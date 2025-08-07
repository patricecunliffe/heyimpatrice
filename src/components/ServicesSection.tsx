import { useState } from 'react';
import { Rocket, TrendingUp, Layers } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const services = [{
    title: "Quick Launch",
    description: "Single landing page with clear CTAs and quick deployment. Perfect for getting your business online fast.",
    icon: Rocket,
    price: "From $500",
    details: {
      overview: "Perfect for businesses that need to get online quickly with a professional presence. This package focuses on speed and efficiency while maintaining quality.",
      includes: ["Single responsive landing page", "Clear call-to-action buttons", "Basic SEO optimization", "Contact form integration", "Mobile-first design", "Fast deployment (2-3 days)"],
      hosting: {
        managed: "Ongoing hosting & management at $40/month includes updates, security monitoring, and technical support.",
        handover: "Code handover option available with external hosting setup guidance and documentation."
      }
    }
  }, {
    title: "Growth Package",
    description: "Four-page website build with optional Linktree integration. The sweet spot for most businesses.",
    icon: TrendingUp,
    price: "From $1500",
    details: {
      overview: "The most popular choice for established businesses ready to scale their online presence with a comprehensive multi-page website.",
      includes: ["4-page responsive website", "Advanced contact forms", "Custom link-in-bio page", "2-week development timeline", "3 rounds of revisions", "SEO optimization", "Analytics integration"],
      hosting: {
        managed: "Ongoing hosting & management at $75/month includes content updates, security, performance monitoring, and priority support.",
        handover: "Complete code handover with hosting setup, documentation, and training session included."
      }
    }
  }, {
    title: "Full Stack Solution",
    description: "Complete SaaS build with authentication, user systems, and database integration for ambitious projects.",
    icon: Layers,
    price: "From $3000",
    details: {
      overview: "Enterprise-level solution for businesses requiring custom functionality, user management, and scalable architecture.",
      includes: ["Custom user authentication system", "Database design & integration", "Admin dashboard", "API development", "Scalable cloud architecture", "Ongoing technical support", "Performance optimization"],
      hosting: {
        managed: "Comprehensive hosting & management at $200/month includes server management, database optimization, security updates, and dedicated support.",
        handover: "Full source code delivery with deployment documentation, server setup guidance, and technical handover session."
      }
    }
  }];
  return <>
      <section id="services" className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-instrument text-6xl mb-6 md:text-6xl">
                Services That Deliver
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Choose the perfect package to bring your vision to life and start converting visitors into customers
              </p>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-center md:space-x-[-40px] space-y-8 md:space-y-0 py-[60px]">
              {services.map((service, index) => {
              const Icon = service.icon;
              const rotations = ['-8deg', '3deg', '8deg'];
              return <div key={index} className={`service-card cursor-pointer transition-all duration-500 hover:scale-110 hover:z-30 animate-fade-in ${index === 1 ? 'md:z-20 md:scale-105' : 'md:z-10'}`} style={{
                animationDelay: `${index * 0.2}s`,
                transform: `rotate(${rotations[index]})`
              }} onClick={() => setSelectedService(index)}>
                    <div className="bg-card border border-border rounded-xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 w-80 h-80 flex flex-col text-left">
                      <div className="flex justify-start mb-6">
                        <Icon className="w-12 h-12 text-accent" />
                      </div>
                      
                      <h3 className="mb-4 text-foreground text-4xl font-normal">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed flex-grow text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-6">
          {selectedService !== null && <>
              <DialogHeader className="text-center mb-6">
                <DialogTitle className="text-center text-5xl font-normal">
                  {services[selectedService].title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 mx-auto">
                    {(() => {
                  const Icon = services[selectedService].icon;
                  return <Icon className="w-16 h-16 text-accent" />;
                })()}
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {services[selectedService].details.overview}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3 font-dmsans">What's Included</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {services[selectedService].details.includes.map((item, index) => <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>)}
                  </ul>
                </div>
                
                
                
                <div className="text-center pt-4 border-t">
                  <div className="text-2xl font-bold text-accent mb-3">
                    {services[selectedService].price}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Ready to get started? Let's discuss your project requirements and timeline.
                  </p>
                  <button 
                    onClick={() => setShowQuoteModal(true)}
                    className="hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-full font-semibold transition-colors duration-200 border border-border"
                  >
                    Get a free quote!
                  </button>
                </div>
              </div>
            </>}
        </DialogContent>
      </Dialog>

      {/* Quote Modal */}
      <Dialog open={showQuoteModal} onOpenChange={setShowQuoteModal}>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle className="text-center font-normal text-3xl">Request a Free Quote</DialogTitle>
            <div className="text-center text-muted-foreground">Complete the form below and I'll follow up within 3 business days.</div>
          </DialogHeader>
          <div className="w-full">
            <iframe 
              src="https://kiwi-oatmeal-777.notion.site/ebd/23fd5994cd3480b0bcc0cb7be9052fee" 
              className="w-full h-[600px] rounded-md" 
              frameBorder="0" 
              allowFullScreen 
              title="Free quote form" 
            />
          </div>
        </DialogContent>
      </Dialog>
    </>;
};
export default ServicesSection;