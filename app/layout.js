export const metadata = {
  title: 'ZippyImage - Image Compressor',
  description: 'Compress your images quickly and for free.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}