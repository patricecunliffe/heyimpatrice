import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
  const services = [
    {
      title: "Quick Launch",
      description: "Single landing page with clear CTAs and rapid deployment. Perfect for getting your business online fast.",
      features: ["Single page design", "Clear call-to-actions", "Rapid 3-day deployment", "Mobile responsive", "Basic SEO setup"],
      price: "Starting at $997",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      recommended: false
    },
    {
      title: "Growth Package", 
      description: "Four-page website build with optional Linktree integration. The sweet spot for most businesses.",
      features: ["4-page website", "Contact forms", "Linktree integration", "SEO optimization", "2-week delivery", "3 rounds of revisions"],
      price: "Starting at $2,497",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=250&fit=crop",
      recommended: true
    },
    {
      title: "Full Stack Solution",
      description: "Complete SaaS build with authentication, user systems, and database integration for ambitious projects.",
      features: ["Custom SaaS development", "User authentication", "Database integration", "Admin dashboard", "Ongoing support", "Scalable architecture"],
      price: "Starting at $7,997",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      recommended: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services That Deliver
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package to bring your vision to life and start converting visitors into customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative bg-card rounded-xl shadow-medium hover:shadow-intense transition-all duration-300 transform hover:scale-105 animate-fade-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Recommended badge */}
                {service.recommended && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 shadow-medium">
                      RECOMMENDED
                    </Badge>
                  </div>
                )}
                
                {/* Service image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price */}
                  <div className="text-2xl font-bold text-primary mb-6">
                    {service.price}
                  </div>
                  
                  {/* CTA Button */}
                  <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-medium hover:shadow-strong">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;