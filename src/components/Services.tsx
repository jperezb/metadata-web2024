const Services = () => {
  const services = [
    {
      title: "Transformación Tecnológica",
      description: "Ayudamos a las empresas a transformar su negocio con tecnologías modernas."
    },
    {
      title: "Desarrollo de aplicaciones",
      description: "Desarrollamos aplicaciones personalizadas para satisfacer las necesidades específicas de tu negocio."
    },
    {
      title: "Inteligencia Artificial",
      description: "Implementamos soluciones de IA para optimizar sus operaciones y mejorar la experiencia del cliente."
    },
    {
      title: "Soluciones cloud",
      description: "Implementamos infraestructura cloud robusta y altamente escalable para optimizar sus operaciones."
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;