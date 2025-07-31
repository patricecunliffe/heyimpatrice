const ServicesSection = () => {
  const services = [
    {
      number: "#1",
      title: "Strategy & Consulting",
      description: "Brand positioning and digital strategy that converts"
    },
    {
      number: "#2", 
      title: "Website Design & Development",
      description: "Beautiful, responsive websites built for results"
    },
    {
      number: "#3",
      title: "Ongoing Support",
      description: "Maintenance, updates, and optimization services"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
            Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-card shadow-medium hover:shadow-strong transition-all duration-300 rounded-lg animate-fade-in hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-medium">
                  {service.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;