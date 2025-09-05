import { useState } from 'react';
import { Rocket, TrendingUp, Layers, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ProcessTimeline from '@/components/ProcessTimeline';
const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [activeCardMobile, setActiveCardMobile] = useState(1); // Middle card active by default
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const TOUCH_THRESHOLD = 40;
  const services = [{
    title: "Quick Launch",
    headline: "Launch Fast, Look Great",
    description: "Single landing page with clear CTAs and quick deployment. Perfect for getting your business online fast.",
    icon: Rocket,
    price: "From $200 (once-off) + $89/month for ongoing care*",
    careNote: "Includes hosting, analytic updates, performance monitoring, small monthly edits, and support.",
    details: {
      overview: "A professional, mobile-ready website built to get you online in record time — without compromising on style or function. Perfect for new businesses, events, or personal projects that need a strong online presence fast.",
      includes: ["Up to 3 custom-designed pages", "Fully responsive (mobile, tablet, desktop)", "Contact form & basic integrations", "Starter blog/news page option", "Hosting & security setup", "Easy-to-manage backend"]
    }
  }, {
    title: "Growth Package",
    headline: "Built to Grow With You",
    description: "Four-page website build with optional Linktree integration. The sweet spot for most businesses.",
    icon: TrendingUp,
    price: "From $800 (once-off) + $149/month for ongoing care*",
    careNote: "Includes hosting, security & analytic updates, performance monitoring, small monthly edits, and support.",
    details: {
      overview: "A feature-rich website designed to evolve as your business expands. From integrated booking and e-commerce to advanced analytics, this package sets you up for growth without the tech headaches.",
      includes: ["4–6 custom-designed pages", "Fully responsive (mobile, tablet, desktop)", "Booking systems, e-commerce, or lead capture", "Blog/news section with categories", "Integrated email marketing", "Performance & analytics setup"]
    }
  }, {
    title: "Complete Build",
    headline: "Your Complete Website, Done Right",
    description: "Complete website build with blog, forms, automation and a few hours of monthly edits.",
    icon: Layers,
    price: "From $1,250 (once-off) + $299/month for ongoing care*",
    careNote: "Includes hosting, security & analytic updates, performance monitoring, monthly edits, and quick support.",
    details: {
      overview: "A fully customised, high-performance website with all the features you need to launch, grow, and manage your online presence. Designed to scale with you — whether you’re selling, showcasing, or building community.",
      includes: ["5+ custom-designed pages", "Fully responsive (mobile, tablet, desktop)", "Integrated forms, booking, and email capture", "Supabase backend for data + automation", "Blog/news section ready to go", "Fast, secure hosting included"]
    }
  }];
  const handleTouchStart = (e: any) => {
    if (e.touches && e.touches[0]) {
      const x = e.touches[0].clientX;
      setTouchStartX(x);
      setTouchCurrentX(x);
      setIsDragging(true);
      setDragX(0);
    }
  };
  const handleTouchMove = (e: any) => {
    if (e.touches && e.touches[0] && touchStartX !== null) {
      const currentX = e.touches[0].clientX;
      setTouchCurrentX(currentX);
      setDragX(currentX - touchStartX);
    }
  };
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchCurrentX !== null) {
      const deltaX = dragX;
      if (Math.abs(deltaX) > TOUCH_THRESHOLD) {
        if (deltaX < 0) {
          setActiveCardMobile((prev) => (prev + 1) % services.length);
        } else if (deltaX > 0) {
          setActiveCardMobile((prev) => (prev - 1 + services.length) % services.length);
        }
      }
    }
    setIsDragging(false);
    setDragX(0);
    setTouchStartX(null);
    setTouchCurrentX(null);
  };
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
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(index);
                        }}
                        className="story-link text-xs text-accent mt-2 self-start"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>;
            })}
            </div>

            {/* Mobile/Tablet Layout */}
            <div
              className="lg:hidden relative h-[320px] w-full max-w-sm mx-auto py-[60px]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {services.map((service, index) => {
                const Icon = service.icon;

                // Relative position to active index (-1, 0, 1) with wrap-around
                const raw = (index - activeCardMobile + services.length) % services.length;
                const rel = raw === services.length - 1 ? -1 : raw; // -1, 0, 1 for 3 cards
                const isActive = rel === 0;
                const zIndex = isActive ? 30 : 20 - Math.abs(rel);

                // Base stacking and subtle rotation when not active
                const baseTranslateY = isActive
                  ? 0
                  : rel * (typeof window !== 'undefined' && window.innerWidth >= 640 ? 25 : 15);
                const rotationStatic = isActive
                  ? 0
                  : typeof window !== 'undefined' && window.innerWidth < 640
                  ? rel * 3
                  : 0;

                // Drag-driven dynamics
                const horizShift = isDragging
                  ? (rel === 0 ? dragX : rel * Math.min(Math.abs(dragX) * 0.2, 60))
                  : 0;
                const activeScaleDelta = isDragging ? Math.min(Math.abs(dragX) / 600, 0.05) : 0;
                const scale = isActive
                  ? 1 - activeScaleDelta
                  : 0.95 + (isDragging && rel === (dragX > 0 ? -1 : 1) ? Math.min(Math.abs(dragX) / 1200, 0.03) : 0);
                const tilt = isActive ? Math.max(Math.min(dragX * 0.02, 4), -4) : rotationStatic;

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 service-card cursor-pointer transition-all duration-300 animate-fade-in sm:rotate-0`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      zIndex,
                      transform: `translateX(${horizShift}px) translateY(${baseTranslateY}px) scale(${scale}) ${tilt ? `rotate(${tilt}deg)` : ''}`,
                      transition: isDragging ? 'none' : undefined,
                    }}
                    onClick={() => {
                      if (isActive) {
                        setSelectedService(index);
                      } else {
                        setActiveCardMobile(index);
                      }
                    }}
                  >
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
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(index);
                        }}
                        className="story-link text-xs text-accent mt-2 self-start"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                );
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
              <div className="space-y-6">
                {/* Icon and Title Section - Left Aligned */}
                <div className="text-left">
                  <div className="flex items-center justify-start w-16 h-16 mb-4">
                    {(() => {
                      const Icon = services[selectedService].icon;
                      return <Icon className="w-16 h-16 text-accent" />;
                    })()}
                  </div>
                  <h2 className="text-left text-5xl font-normal mb-2">
                    {services[selectedService].title}
                  </h2>
                  {services[selectedService].headline && <p className="text-muted-foreground mt-2 text-left text-lg">{services[selectedService].headline}</p>}
                </div>

                {/* Overview Section - Left Aligned */}
                <div className="text-left">
                  <p className="text-lg text-muted-foreground">
                    {services[selectedService].details.overview}
                  </p>
                </div>
                
                {/* Collapsible What's Included Section */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="whats-included" className="border-none">
                    <AccordionTrigger className="flex items-center justify-between py-4 font-medium text-left hover:no-underline [&>svg:last-child]:hidden focus:outline-none focus-visible:outline-none">
                      <span className="text-xl font-bold font-dmsans">What's Included</span>
                      <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-45" />
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0">
                      <ul className="space-y-2">
                        {services[selectedService].details.includes.map((item, index) => 
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0 mt-2"></div>
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </li>
                        )}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* Separator Line */}
                <div className="border-t border-border"></div>
                
                {/* Pricing Section - Left Aligned */}
                <div className="text-left pt-4">
                  <div className="text-xl font-bold text-accent mb-2">
                    {(() => {
                      const price = services[selectedService].price;
                      const parts = price.split("+");
                      const before = parts[0]?.trim() || price;
                      const after = parts.slice(1).join("+").trim();
                      const sanitizedBefore = before.replace(/\s*\(once-off\)/i, "");
                      return <>
                        <span className="text-xl">{sanitizedBefore}</span>
                        {after && <span className="block text-sm font-medium">+ {after}</span>}
                      </>;
                    })()}
                  </div>
                  {services[selectedService].careNote && <p className="text-muted-foreground mb-4 text-xs">
                    {services[selectedService].careNote}
                  </p>}
                  <p className="text-sm text-muted-foreground mb-6">
                    Ready to get started? Let's discuss your project requirements and timeline.
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowQuoteModal(true);
                    }}
                    className="bg-foreground text-background hover:bg-foreground/90 hover:text-background px-8 py-3 rounded-full font-semibold transition-colors duration-200 border border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="Open free quote form modal"
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
            <iframe src="https://tally.so/embed/woqqZN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" className="w-full h-[600px] rounded-md" frameBorder="0" loading="lazy" title="Free quote form" />
          </div>
        </DialogContent>
      </Dialog>
    </>;
};
export default ServicesSection;