import '../styles/globals.css';

export const metadata = {
  title: 'ZippyImage – Free Online Image Compressor',
  description: 'Compress JPEG and PNG images online for free using AI-powered compression. Fast, secure, and privacy-friendly.',
  keywords: [
    'image compressor',
    'free image compression',
    'TinyPNG alternative',
    'compress PNG',
    'compress JPEG',
    'online image optimizer',
    'AI image compression',
  ],
  authors: [{ name: 'Aerathorn' }],
  openGraph: {
    title: 'ZippyImage – Free Online Image Compressor',
    description: 'Fast, free and private image compression tool powered by AI. No sign-up needed.',
    url: 'https://tinypng-clone-nkdt.vercel.app',
    siteName: 'ZippyImage',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'ZippyImage compression preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZippyImage – AI Image Compressor',
    description: 'Compress images online using AI. Free and fast.',
    site: '@yourtwitter',
    creator: '@yourtwitter',
    images: ['/og-preview.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
