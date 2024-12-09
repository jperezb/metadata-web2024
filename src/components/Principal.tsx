import { useEffect, useState } from 'react';

const Principal = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000')] bg-cover bg-center"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Building The Future</h1>
          <p className="text-xl md:text-2xl">Innovative Software Solutions for Modern Businesses</p>
        </div>
      </div>
    </div>
  );
};

export default Principal;