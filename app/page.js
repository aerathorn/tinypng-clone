'use client';
import { useState } from 'react';

export default function HomePage() {
  const [image, setImage] = useState(null);
  const [compressed, setCompressed] = useState(null);
  const [loading, setLoading] = useState(false);

  const upload = async (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setLoading(true);
    const res = await fetch('/api/compress', {
      method: 'POST',
      body: file
    });
    const blob = await res.blob();
    setCompressed(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50'>
      <h1 className='text-3xl font-bold mb-6'>ZippyImage - Image Compressor</h1>
      <input type='file' accept='image/*' onChange={upload} />
      {loading && <p>Compressing...</p>}
      {compressed && <img src={compressed} alt='Compressed' className='mt-4 max-h-64' />}
    </main>
  );
}