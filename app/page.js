'use client';
import { useState } from 'react';

export default function HomePage() {
  const [image, setImage] = useState(null);
  const [compressed, setCompressed] = useState(null);
  const [originalSize, setOriginalSize] = useState(null);
  const [compressedSize, setCompressedSize] = useState(null);
  const [loading, setLoading] = useState(false);

  const upload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
    setOriginalSize((file.size / 1024).toFixed(2));
    setLoading(true);

    const res = await fetch('/api/compress', {
      method: 'POST',
      body: file,
    });

    if (!res.ok) {
      alert("Compression failed.");
      setLoading(false);
      return;
    }

    const blob = await res.blob();
    if (!blob.type.startsWith('image/')) {
      alert("Invalid image returned.");
      setLoading(false);
      return;
    }

    setCompressed(URL.createObjectURL(blob));
    setCompressedSize((blob.size / 1024).toFixed(2));
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 space-y-4">
      <h1 className="text-3xl font-bold">ZippyImage - Image Compressor</h1>
      
      <input type="file" accept="image/*" onChange={upload} />
      {loading && <p>🔄 Compressing...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {image && (
          <div>
            <h2 className="font-semibold">Original Image ({originalSize} KB)</h2>
            <img src={image} alt="Original" className="border max-w-xs mt-2" />
          </div>
        )}

        {compressed && (
          <div>
            <h2 className="font-semibold">Compressed Image ({compressedSize} KB)</h2>
            <img src={compressed} alt="Compressed" className="border max-w-xs mt-2" />
            <a href={compressed} download="compressed.png" className="inline-block mt-2 text-blue-600 underline">
             ⬇️ Download Compressed
            </a>
          </div>
        )}
      </div>

      {/* Google Ads placeholder */}
      <div className="mt-6 w-full max-w-xl text-center border-t pt-4 text-gray-500">
        [Ad space here – connect Google AdSense]
      </div>
    </main>
  );
}
