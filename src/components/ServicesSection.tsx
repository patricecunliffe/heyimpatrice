import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Quick Launch",
      description: "Single landing page with clear CTAs and rapid deployment. Perfect for getting your business online fast.",
      features: ["Single page design", "Clear call-to-actions", "Rapid 3-day deployment", "Mobile responsive", "Basic SEO setup"],
      recommended: false
    },
    {
      title: "Growth Package", 
      description: "Four-page website build with optional Linktree integration. The sweet spot for most businesses.",
      features: ["4-page website", "Contact forms", "Linktree integration", "SEO optimization", "2-week delivery", "3 rounds of revisions"],
      recommended: true
    },
    {
      title: "Full Stack Solution",
      description: "Complete SaaS build with authentication, user systems, and database integration for ambitious projects.",
      features: ["Custom SaaS development", "User authentication", "Database integration", "Admin dashboard", "Ongoing support", "Scalable architecture"],
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
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative bg-card rounded-xl shadow-medium hover:shadow-intense transition-all duration-300 transform hover:scale-105 animate-fade-in group p-8"
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
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Centered Get Started Button */}
          <div className="text-center">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105 px-12 py-4 text-lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;