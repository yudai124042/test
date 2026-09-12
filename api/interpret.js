import { HOTEL_PROFILE, UNKNOWN_FACTS } from '../lib/hotel-context.js';

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['kind', 'source_refs', 'needs_follow_up', 'follow_up_reason', 'recommendation_category', 'action'],
  properties: {
    kind: { type: 'string', enum: ['information', 'staff_action', 'recommendation', 'unknown', 'chitchat'] },
    source_refs: { type: 'array', items: { type: 'string' }, maxItems: 4 },
    needs_follow_up: { type: 'boolean' },
    follow_up_reason: { type: 'string' },
    recommendation_category: { type: 'string', enum: ['none', 'food', 'experience', 'both'] },
    action: {
      type: 'object',
      additionalProperties: false,
      required: ['ready_for_confirmation', 'intent', 'title', 'room', 'item', 'quantity', 'timing', 'desired_time', 'urgency', 'note', 'summary'],
      properties: {
        ready_for_confirmation: { type: 'boolean' },
        intent: { type: 'string' },
        title: { type: 'string' },
        room: { type: 'string' },
        item: { type: 'string' },
        quantity: { type: 'string' },
        timing: { type: 'string' },
        desired_time: { type: 'string' },
        urgency: { type: 'string' },
        note: { type: 'string' },
        summary: { type: 'string' },
      },
    },
  },
};

function getOutputText(json) {
  if (typeof json?.output_text === 'string' && json.output_text.trim()) return json.output_text;
  for (const item of json?.output || []) {
    if (item?.type !== 'message') continue;
    for (const part of item.content || []) {
      if (typeof part?.text === 'string') return part.text;
    }
  }
  return '';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'OPENAI_API_KEY is not configured.' });

  const latest = typeof req.body?.latest === 'string' ? req.body.latest.trim() : '';
  const conversation = Array.isArray(req.body?.conversation) ? req.body.conversation.slice(-8) : [];
  if (!latest) return res.status(400).json({ error: 'latest utterance is required' });
  if (latest.length > 1200) return res.status(413).json({ error: 'latest utterance is too long' });

  const compactContext = {
    stayContext: HOTEL_PROFILE.stayContext,
    checkInOut: HOTEL_PROFILE.checkInOut,
    amenities: HOTEL_PROFILE.amenities,
    housekeeping: HOTEL_PROFILE.housekeeping,
    loanItems: HOTEL_PROFILE.loanItems,
    luggage: HOTEL_PROFILE.luggage,
    transport: HOTEL_PROFILE.transport,
    roomFacilities: HOTEL_PROFILE.roomFacilities,
    breakfast: HOTEL_PROFILE.breakfast,
    wifi: HOTEL_PROFILE.wifi,
    publicBath: HOTEL_PROFILE.publicBath,
    laundry: HOTEL_PROFILE.laundry,
    staffRecommendations: HOTEL_PROFILE.staffRecommendations,
    serviceRules: HOTEL_PROFILE.serviceRules,
    unknownFacts: UNKNOWN_FACTS,
  };

  const instructions = `You are a fast intent parser for a hotel voice-front-desk PoC. Return only the structured result required by the schema.

Classify the guest's latest utterance using the recent conversation and AUTHORITATIVE HOTEL CONTEXT.

Definitions:
- staff_action: a hotel staff member would need to physically or operationally do something: deliver towels/amenities, change or skip housekeeping, lend an item, handle maintenance, arrange taxi, change checkout/booking, handle luggage, wake-up request, etc.
- recommendation: the guest asks for places to eat, things to do, experiences, sightseeing, or local recommendations.
- information: a factual question answerable from registered hotel data and requiring no staff action.
- unknown: a hotel-specific factual question whose answer is not registered.
- chitchat: none of the above.

For staff_action:
- room is already known as 512号室. Do not ask for the room again.
- Set action.ready_for_confirmation=true only when the minimum operational details are known.
- Towels/amenities normally need item and quantity. If quantity is missing, needs_follow_up=true.
- Late checkout/checkout change needs desired_time. If missing, needs_follow_up=true. Never imply availability is guaranteed.
- Taxi normally needs desired pickup time and destination; if either is missing, needs_follow_up=true.
- Housekeeping opt-out such as 清掃不要 is complete without quantity and can be ready immediately.
- Maintenance should include the issue in note/item; exact timing can be blank if the guest did not specify it.
- Correct self-corrections using the latest intent, e.g. "2枚、いや3枚" means 3.
- summary should be a concise Japanese confirmation sentence even if the guest spoke English.

For recommendations:
- recommendation_category must be food, experience, or both.
- source_refs should point to staffRecommendations.

For source_refs:
- Use concise labels such as "朝食 > 営業時間", "アメニティ > 追加依頼", "チェックイン・アウト > レイトチェックアウト", "清掃 > 清掃不要", "ホテルスタッフおすすめ", or "未登録情報".
- Never invent a source outside the supplied context.

For non-actions, set all action strings to empty, ready_for_confirmation=false, intent="none".

AUTHORITATIVE HOTEL CONTEXT:
${JSON.stringify(compactContext)}
`;

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5.6-luna',
        reasoning: { effort: 'none' },
        store: false,
        max_output_tokens: 700,
        instructions,
        input: JSON.stringify({ latest, conversation }),
        text: {
          format: {
            type: 'json_schema',
            name: 'hotel_turn_analysis',
            strict: true,
            schema: SCHEMA,
          },
          verbosity: 'low',
        },
      }),
    });

    const raw = await response.text();
    if (!response.ok) {
      console.error('Interpret response error', response.status, raw.slice(0, 1500));
      return res.status(response.status).json({ error: 'Intent analysis failed.' });
    }
    const json = JSON.parse(raw);
    const outputText = getOutputText(json);
    const parsed = JSON.parse(outputText);
    const usage = json.usage || {};
    const inputTokens = Number(usage.input_tokens || 0);
    const outputTokens = Number(usage.output_tokens || 0);
    const estimatedCostUsd = inputTokens * 0.20 / 1_000_000 + outputTokens * 1.20 / 1_000_000;
    return res.status(200).json({ ...parsed, analysis_cost_usd: estimatedCostUsd });
  } catch (error) {
    console.error('Intent analysis failed', error);
    return res.status(502).json({ error: 'Intent analysis failed.' });
  }
}
