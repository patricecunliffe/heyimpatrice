import { useEffect, useState, useRef } from 'react';
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const testimonials = [{
    quote: "Patrice delivered exactly what we needed - a simple, effective website that converts visitors into customers. Our online sales increased 40% in the first month.",
    author: "Sarah Johnson",
    company: "Tech Startup CEO",
    location: "Sydney"
  }, {
    quote: "Working with Pat was incredible. The attention to detail and clean design exceeded our expectations. He truly understands what businesses need to succeed online.",
    author: "Mike Chen",
    company: "Creative Agency Director",
    location: "Melbourne"
  }, {
    quote: "Our new website has transformed our business. Pat's strategic approach and professional execution delivered results we didn't think were possible.",
    author: "Emma Wilson",
    company: "E-commerce Founder",
    location: "Brisbane"
  }, {
    quote: "From concept to completion, Patrice was professional, responsive, and delivered on every promise. The Kingdom Purpose platform has been life-changing for our community.",
    author: "David Martinez",
    company: "Ministry Leader",
    location: "Perth"
  }, {
    quote: "The website Pat built for us perfectly captures our brand and converts visitors at an impressive rate. His understanding of both design and business is remarkable.",
    author: "Lisa Thompson",
    company: "Consulting Firm Partner",
    location: "Adelaide"
  }];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused && !isUserInteracting) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, isUserInteracting, testimonials.length]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsUserInteracting(true);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    }
    setIsUserInteracting(false);
  };

  // Mouse handlers for desktop
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 1000);
  };
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl mb-6 md:text-8xl font-instrument ">
              Client Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-dmsans">
              Real feedback from businesses who've transformed their online presence
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div ref={scrollContainerRef} className="flex transition-transform duration-700 ease-in-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {testimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card shadow-strong rounded-2xl p-8 md:p-12 mx-auto max-w-4xl animate-fade-in border border-border/50">
                    {/* Quote */}
                    <blockquote className="text-2xl md:text-3xl lg:text-4xl text-foreground mb-8 leading-relaxed font-medium">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Attribution */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="font-bold text-lg text-foreground mb-1">
                          {testimonial.author}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonial.company}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-125 shadow-medium' : 'bg-muted hover:bg-muted-foreground/50'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
          
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;