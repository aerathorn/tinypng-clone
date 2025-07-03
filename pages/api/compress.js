import sharp from 'sharp';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const buffers = [];
  req.on('data', chunk => buffers.push(chunk));
  req.on('end', async () => {
    const input = Buffer.concat(buffers);
    try {
      const compressed = await sharp(input).jpeg({ quality: 70 }).toBuffer();
      res.setHeader('Content-Type', 'image/jpeg');
      res.send(compressed);
    } catch (e) {
      res.status(500).json({ error: 'Compression failed' });
    }
  });
}