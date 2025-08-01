import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Quick Launch",
      description: "Single landing page with clear CTAs and quick deployment. Perfect for getting your business online fast.",
      features: ["Single page design", "Clear call-to-actions", "Quick build & deployment", "Basic SEO", "From $500 + ($40 p/m)"],
      recommended: false
    },
    {
      title: "Growth Package", 
      description: "Four-page website build with optional Linktree integration. The sweet spot for most businesses.",
      features: ["4-page website", "Contact forms", "Custom link in bio", "2-week delivery", "3 rounds of revisions", "From $1500 + ($75 p/m)"],
      recommended: true
    },
    {
      title: "Full Stack Solution",
      description: "Complete SaaS build with authentication, user systems, and database integration for ambitious projects.",
      features: ["User authentication", "Database integration", "Admin dashboard", "Ongoing support", "Scalable architecture", "From $3000 + ($200 p/m)"],
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
                className={`relative rounded-xl transition-all duration-300 transform hover:scale-105 animate-fade-in group p-8 ${
                  service.recommended 
                    ? 'bg-card border-2 border-primary shadow-strong hover:shadow-intense scale-105 md:scale-110' 
                    : 'bg-card shadow-medium hover:shadow-intense'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Recommended badge - centered at top */}
                {service.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground font-semibold px-4 py-2 shadow-strong text-sm">
                      RECOMMENDED
                    </Badge>
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-4 text-foreground ${service.recommended ? 'mt-4' : ''}`}>
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