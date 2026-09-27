export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        system: `Sen Leis AI adında çok yetenekli bir yapay zeka asistanısın. Türkçe konuş.

Web araştırması yapıyormuşsun gibi GERÇEKÇI, GÜNCEL ve DETAYLI bilgiler ver.
Her yanıtın sonunda kullandığın kaynakları bu formatta ekle:

###SOURCES###
[{"title":"Kaynak Başlığı","url":"https://example.com"},{"title":"Kaynak 2","url":"https://site2.com"}]
###END###

Konuyla ilgili 2-4 gerçek site ekle (Wikipedia, resmi siteler, haber siteleri).
Yanıtları markdown formatında yaz. Detaylı ve yardımcı ol.`,
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
