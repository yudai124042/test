const RAW_URL = 'https://raw.githubusercontent.com/yudai124042/test/main/live.html';

const FIXED_EVT = `function evt(e){
  const t=e?.type||'';
  const responseId=e?.response_id||e?.response?.id||'';
  const frontResponses=globalThis.__yorimichiFrontResponses||(globalThis.__yorimichiFrontResponses=new Map());
  const finishedResponses=globalThis.__yorimichiFinishedResponses||(globalThis.__yorimichiFinishedResponses=new Set());

  function frontForResponse(rid){
    if(!rid) return ensureFront();
    let f=frontResponses.get(rid);
    if(!f){
      const id=turnNo||1;
      f={id,text:'',el:bubble('front','返答を準備しています…',true,id),responseId:rid,finished:false};
      f.el.dataset.responseId=rid;
      frontResponses.set(rid,f);
      frontByTurn.set(id,f.el);
    }
    currentFront=f;
    return f;
  }

  function finishResponse(rid,transcript=''){
    const f=(rid&&frontResponses.get(rid))||currentFront;
    if(!f||f.finished||(rid&&finishedResponses.has(rid))) return;
    if(transcript&&transcript.trim()) f.text=transcript.trim();
    f.finished=true;
    f.el.classList.remove('draft');
    setBody(f.el,f.text||'（返答しました）');
    conversation.push({role:'assistant',content:f.text||''});
    applyMeta(f.id,true);
    if(f.responseId){frontResponses.delete(f.responseId);finishedResponses.add(f.responseId)}
    if(currentFront===f) currentFront=null;
    assistantSpeaking=false;
    status('on','聞いています','続けてお話しください');
    $('hint').textContent='マイクON・続けて話せます';
  }

  if(t==='session.started'||t==='session.created'||t==='session.updated'){
    status('on','聞いています','そのまま自然にお話しください');
    $('hint').textContent='マイクON・そのまま話せます';
    return;
  }

  if(t.includes('speech_started')){
    assistantSpeaking=false;
    newUserTurn();
    status('on','聞いています','お話しください');
    $('hint').textContent='あなたの声を聞いています…';
    return;
  }
  if(t.includes('speech_stopped')){
    status('on','確認しています','返答を準備しています');
    $('hint').textContent='内容を理解しています…';
    scheduleFinalize(750);
    return;
  }

  const input=t.includes('input_audio_transcription')||t.includes('input_transcript');
  if(input&&typeof e.delta==='string'){
    const u=ensureUser();
    u.text+=e.delta;
    setBody(u.el,u.text||'聞き取っています…');
    scheduleFinalize(850);
    return;
  }
  if(input&&typeof e.transcript==='string'){
    const u=ensureUser();
    u.text=e.transcript;
    setBody(u.el,u.text);
    finalizeUser('transcript',e.transcript);
    return;
  }

  // The assistant UI is keyed by OpenAI response_id. A new response_id can never
  // append to an older assistant bubble, even if a completion event is delayed or missed.
  const outputDelta=t==='response.output_audio_transcript.delta'||t==='response.output_text.delta'||
    t.includes('output_audio_transcript.delta')||t.includes('output_transcript.delta');
  if(outputDelta&&typeof e.delta==='string'){
    if(currentUser?.text?.trim()) finalizeUser('assistant-start');
    assistantSpeaking=true;
    const f=frontForResponse(responseId||('legacy-'+(turnNo||1)));
    status('on','フロントが話しています','途中で話しかけても大丈夫です');
    $('hint').textContent='フロントが返答中…';
    f.text+=e.delta;
    setBody(f.el,f.text||'返答しています…');
    return;
  }

  const outputDone=t==='response.output_audio_transcript.done'||t==='response.output_text.done'||
    t.includes('output_audio_transcript.done')||t.includes('output_transcript.done');
  if(outputDone){
    if(currentUser?.text?.trim()) finalizeUser('assistant-done');
    const text=typeof e.transcript==='string'?e.transcript:(typeof e.text==='string'?e.text:'');
    const f=frontForResponse(responseId||('legacy-'+(turnNo||1)));
    if(text){f.text=text;setBody(f.el,text)}
    finishResponse(responseId||f.responseId,text);
    return;
  }

  // response.done is guaranteed by the Realtime API and acts as a final fallback.
  if(t==='response.done'||t==='response.completed'){
    finishResponse(responseId);
    return;
  }

  if(t==='session.error'||t.endsWith('.error')) fail(e?.error||e?.message||'Live session error');
}`;

export default async function handler(req, res) {
  try {
    const upstream = await fetch(RAW_URL, {
      headers: { 'User-Agent': 'YORIMICHI-PoC' },
      cache: 'no-store',
    });
    if (!upstream.ok) return res.status(502).send('Failed to load PoC page');
    let html = await upstream.text();

    const pattern = /function evt\(e\)\{[\s\S]*?\}\nfunction iceDone/;
    if (!pattern.test(html)) return res.status(500).send('PoC patch target was not found');
    html = html.replace(pattern, `${FIXED_EVT}\nfunction iceDone`);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    return res.status(200).send(html);
  } catch (error) {
    console.error('Live page patch failed', error);
    return res.status(500).send('Failed to render PoC page');
  }
}
