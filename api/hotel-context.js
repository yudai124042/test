import { HOTEL_PROFILE, UNKNOWN_FACTS, AI_RULES, TEST_SCENARIOS } from '../lib/hotel-context.js';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60');
  return res.status(200).json({
    profile: HOTEL_PROFILE,
    unknownFacts: UNKNOWN_FACTS,
    aiRules: AI_RULES,
    testScenarios: TEST_SCENARIOS,
  });
}
