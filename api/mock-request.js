export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const action = req.body?.action;
  if (!action || typeof action !== 'object') {
    return res.status(400).json({ error: 'action is required' });
  }

  const requestId = `DEMO-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  return res.status(200).json({
    ok: true,
    mock: true,
    requestId,
    receivedAt: new Date().toISOString(),
    message: '検証モードのため、実際のホテルスタッフには送信していません。',
  });
}
