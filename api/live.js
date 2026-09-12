const RAW_URL = 'https://raw.githubusercontent.com/yudai124042/test/main/live.html';

const FIXED_EVT = `function evt(e){
  const t=e?.type||'';
  if(t==='session.started'||t==='session.created'||t==='session.updated'){
    status('on','聞いています','そのまま自然にお話しください');
    $('hint').textContent='マイクON・そのまま話せます';
    return;
  }

  // A new assistant response is a hard boundary. If the previous response did not
  // emit the transcript completion event we expected, close its bubble here.
  if(t==='response.created'){
    if(currentFront?.text?.trim()) finishFront();
    assistantSpeaking=true;
  }

  if(t.includes('speech_started')){
    // The user speaking again is also a hard boundary between assistant turns.
    if(currentFront?.text?.trim()) finishFront();
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

  const output=t.includes('output_audio_transcript')||t.includes('output_transcript')||t.includes('audio_transcript')||t.includes('output_text');
  if(output&&typeof e.delta==='string'){
    if(currentUser?.text?.trim()) finalizeUser('assistant-start');
    assistantSpeaking=true;
    const f=ensureFront();
    status('on','フロントが話しています','途中で話しかけても大丈夫です');
    $('hint').textContent='フロントが返答中…';
    f.text+=e.delta;
    setBody(f.el,f.text||'返答しています…');
    return;
  }
  if(output&&(typeof e.transcript==='string'||typeof e.text==='string'||t.endsWith('.done')||t.endsWith('.completed'))){
    if(currentUser?.text?.trim()) finalizeUser('assistant-done');
    const text=typeof e.transcript==='string'?e.transcript:(typeof e.text==='string'?e.text:'');
    if(text){
      const f=ensureFront();
      f.text=text;
      setBody(f.el,f.text);
    }
    // transcript done/completed is the normal assistant bubble boundary.
    if(t.endsWith('.done')||t.endsWith('.completed')) finishFront();
    return;
  }

  // GPT-Live can also signal completion at the response level. Treat that as a
  // final fallback so no response can leak into the next chat bubble.
  if(t==='response.done'||t==='response.completed'){
    if(currentFront) finishFront();
    return;
  }

  if(t==='session.error'||t.endsWith('.error')) fail(e?.error||e?.message||'Live session error');
}`;

export default async function handler(req, res) {
  try {
    const upstream = await fetch(RAW_URL, { headers: { 'User-Agent': 'YORIMICHI-PoC' } });
    if (!upstream.ok) return res.status(502).send('Failed to load PoC page');
    let html = await upstream.text();

    const pattern = /function evt\(e\)\{[\s\S]*?\}\nfunction iceDone/;
    if (!pattern.test(html)) return res.status(500).send('PoC patch target was not found');
    html = html.replace(pattern, `${FIXED_EVT}\nfunction iceDone`);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=300');
    return res.status(200).send(html);
  } catch (error) {
    console.error('Live page patch failed', error);
    return res.status(500).send('Failed to render PoC page');
  }
}
