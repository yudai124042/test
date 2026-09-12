export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    openaiKeyConfigured: Boolean(process.env.OPENAI_API_KEY),
    model: 'gpt-live-1',
  });
}
