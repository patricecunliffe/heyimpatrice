import { useState } from 'react';
import { Rocket, TrendingUp, Layers } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProcessTimeline from '@/components/ProcessTimeline';
const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [activeCardMobile, setActiveCardMobile] = useState(1); // Middle card active by default
  const services = [{
    title: "Quick Launch",
    headline: "Launch Fast, Look Great",
    description: "Single landing page with clear CTAs and quick deployment. Perfect for getting your business online fast.",
    icon: Rocket,
    price: "From $900 (once-off) + $59/month for ongoing care*",
    careNote: "Includes hosting, security updates, performance monitoring, small monthly edits, and support.",
    details: {
      overview: "A professional, mobile-ready website built to get you online in record time — without compromising on style or function. Perfect for new businesses, events, or personal projects that need a strong online presence fast.",
      includes: ["Up to 3 custom-designed pages", "Fully responsive (mobile, tablet, desktop)", "Contact form & basic integrations", "Starter blog/news page option", "Hosting & security setup", "Easy-to-manage backend"]
    }
  }, {
    title: "Growth Package",
    headline: "Built to Grow With You",
    description: "Four-page website build with optional Linktree integration. The sweet spot for most businesses.",
    icon: TrendingUp,
    price: "From $1,800 (once-off) + $129/month for ongoing care*",
    careNote: "Includes hosting, security updates, performance monitoring, small monthly edits, and support.",
    details: {
      overview: "A feature-rich website designed to evolve as your business expands. From integrated booking and e-commerce to advanced analytics, this package sets you up for growth without the tech headaches.",
      includes: ["4–6 custom-designed pages", "Fully responsive (mobile, tablet, desktop)", "Booking systems, e-commerce, or lead capture", "Blog/news section with categories", "Integrated email marketing", "Performance & analytics setup"]
    }
  }, {
    title: "Complete Build",
    headline: "Your Complete Website, Done Right",
    description: "Complete SaaS build with authentication, user systems, and database integration for ambitious projects.",
    icon: Layers,
    price: "From $2,500 (once-off) + $219/month for ongoing care*",
    careNote: "Includes hosting, security updates, performance monitoring, small monthly edits, and support.",
    details: {
      overview: "A fully customised, high-performance website with all the features you need to launch, grow, and manage your online presence. Designed to scale with you — whether you’re selling, showcasing, or building community.",
      includes: ["5+ custom-designed pages", "Fully responsive (mobile, tablet, desktop)", "Integrated forms, booking, and email capture", "Supabase backend for data + automation", "Blog/news section ready to go", "Analytics dashboard", "Fast, secure hosting included"]
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
            
            {/* Desktop Layout */}
            <div className="hidden lg:flex relative items-center justify-center space-x-[-80px] py-[60px]">
              {services.map((service, index) => {
              const Icon = service.icon;
              const rotationClasses = ['-rotate-12', 'rotate-3', 'rotate-12'];
              return <div key={index} className={`service-card cursor-pointer transition-all duration-500 hover:scale-110 hover:z-50 animate-fade-in ${index === 1 ? 'z-20 scale-105' : 'z-10'} ${rotationClasses[index]} w-full`} style={{
                animationDelay: `${index * 0.2}s`
              }} onClick={() => setSelectedService(index)}>
                    <div className="bg-card border border-border rounded-2xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 w-full max-w-sm mx-auto min-h-[18rem] w-80 h-80 flex flex-col text-left">
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

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden relative h-[320px] w-full max-w-sm mx-auto py-[60px]">
              {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeCardMobile === index;
              const zIndex = isActive ? 30 : 20 - Math.abs(index - activeCardMobile);

              // Tablet spacing (more spread) and mobile with rotation
              const translateY = isActive ? 0 : (index - activeCardMobile) * (typeof window !== 'undefined' && window.innerWidth >= 640 ? 25 : 15);
              const rotation = isActive ? 0 : typeof window !== 'undefined' && window.innerWidth < 640 ? (index - activeCardMobile) * 3 : 0;
              const scale = isActive ? 1 : 0.95;
              return <div key={index} className={`absolute inset-0 service-card cursor-pointer transition-all duration-300 animate-fade-in sm:rotate-0 ${!isActive && index !== activeCardMobile ? 'rotate-1 sm:rotate-0' : ''}`} style={{
                animationDelay: `${index * 0.2}s`,
                zIndex,
                transform: `translateY(${translateY}px) scale(${scale}) ${rotation !== 0 ? `rotate(${rotation}deg)` : ''}`
              }} onClick={() => {
                if (isActive) {
                  setSelectedService(index);
                } else {
                  setActiveCardMobile(index);
                }
              }}>
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-strong transition-all duration-300 w-full h-[280px] flex flex-col text-left">
                      <div className="flex justify-start mb-4">
                        <Icon className="w-10 h-10 text-accent" />
                      </div>
                      
                      <h3 className="mb-3 text-foreground text-3xl font-normal">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed flex-grow text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>;
            })}
              
              {/* Navigation dots */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {services.map((_, index) => <button key={index} onClick={() => setActiveCardMobile(index)} className={`w-2 h-2 rounded-full transition-colors duration-200 ${activeCardMobile === index ? 'bg-accent' : 'bg-muted-foreground/30'}`} aria-label={`View ${services[index].title} card`} />)}
              </div>
            </div>

            <div className="text-center mt-8 mb-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">our process</p>
            </div>
            <ProcessTimeline />
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
                {services[selectedService].headline && <p className="text-muted-foreground mt-2 text-center">{services[selectedService].headline}</p>}
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 mx-auto">
                    {(() => {
                  const Icon = services[selectedService].icon;
                  return <Icon className="w-16 h-16 text-accent" />;
                })()}
                  </div>
                  <p className="text-lg text-muted-foreground text-center">
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
                  <div className="text-2xl font-bold text-accent mb-2">
                    {services[selectedService].price}
                  </div>
                  {services[selectedService].careNote && <p className="text-xs text-muted-foreground mb-4">
                      {services[selectedService].careNote}
                    </p>}
                  <p className="text-sm text-muted-foreground mb-6">
                    Ready to get started? Let's discuss your project requirements and timeline.
                  </p>
                  <button onClick={() => setShowQuoteModal(true)} className="hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-full font-semibold transition-colors duration-200 border border-border">
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
            <iframe src="https://kiwi-oatmeal-777.notion.site/ebd/23fd5994cd3480b0bcc0cb7be9052fee" className="w-full h-[600px] rounded-md" frameBorder="0" allowFullScreen title="Free quote form" />
          </div>
        </DialogContent>
      </Dialog>
    </>;
};
export default ServicesSection;