import { useEffect, useState, useRef } from 'react';
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const testimonials = [{
    quote: "As someone who has never worked with Patrice, I can only imagine the magic they're capable of. If Patrice ever gets a client, I'm confident the testimonials will be legendary.",
    author: "Jordan Flanagan",
    company: "Imaginary Solutions Ltd",
    location: "Dublin, Ireland"
  }, {
    quote: "I've never had the pleasure of hiring Patrice, but based on the zero reviews so far, I'm sure they're saving all the five-star service for their first client!",
    author: "Casey Lee",
    company: "Phantom Enterprises",
    location: "Toronto, Canada"
  }, {
    quote: "Patrice's empty testimonial section speaks volumes—mostly about my own regret for not being their first client. Someone fix this, please!",
    author: "Suki Tanaka",
    company: "Fictitious Friends Inc.",
    location: "Tokyo, Japan"
  }, {
    quote: "I was going to write a glowing review for Patrice, but then I realized I haven't actually worked with them yet. Someone hire this person so I can jump on the bandwagon!",
    author: "Alex Martinez",
    company: "Placeholder Partners",
    location: "Buenos Aires, Argentina"
  }, {
    quote: "Patrice's testimonial page is so fresh and untouched, it's basically a collector's item. Be the first to change that!",
    author: "Priya Singh",
    company: "Hypothetical Ventures",
    location: "Mumbai, India"
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
  return <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl mb-6 font-normal md:text-6xl">
              Client Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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