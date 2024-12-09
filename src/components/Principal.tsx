import { useEffect, useState } from 'react';

const Principal = () => {
  const [offset, setOffset] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await import.meta.glob<{ default: string }>('../../public/background/*.(png|jpg|jpeg|svg)');
        const imageUrls = Object.values(images);
        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        const imageModule = await randomImage();
        setBackgroundImage(imageModule.default);
      } catch (error) {
        console.error("Error al cargar las imágenes:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const titleSubtitlePairs = [
      {
        title: "Construye el futuro de tu negocio con IA",
        subtitle: "Soluciones Innovadoras para Negocios Modernos"
      },
      {
        title: "IA y Tecnología Avanzada",
        subtitle: "Inteligencia Artificial que Impulsa el Cambio"
      },
      {
        title: "Transforma ideas con IA",
        subtitle: "Soluciones de IA para el Futuro"
      }
    ];
    const randomPair = titleSubtitlePairs[Math.floor(Math.random() * titleSubtitlePairs.length)];
    setTitle(randomPair.title);
    setSubtitle(randomPair.subtitle);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Principal;