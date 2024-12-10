const Clients = () => {
  const clients = [
    {
      name: "Pleno",
      logo: "clients/pleno.png"
    },
    {
      name: "Santillana",
      logo: "clients/santillana.png"
    },
    {
      name: "Ministerio de Economía",
      logo: "clients/ministerio_economia.png"
    },
    {
      name: "Egia",
      logo: "clients/egia.png"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Han confiado en nosotros</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;