const Clients = () => {
  const clients = [
    {
      name: "Cliente 1",
      logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Cliente 2",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      name: "Cliente 3",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      name: "Cliente 4",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestros Clientes</h2>
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