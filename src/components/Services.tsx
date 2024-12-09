const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure services"
    },
    {
      title: "Consulting",
      description: "Expert technical consulting and architecture design"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
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