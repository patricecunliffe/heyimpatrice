import { useEffect, useState } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Patrice delivered exactly what we needed - a simple, effective website that converts visitors into customers.",
      author: "Sarah Johnson",
      company: "Tech Startup"
    },
    {
      quote: "Working with Pat was incredible. The attention to detail and clean design exceeded our expectations.",
      author: "Mike Chen", 
      company: "Creative Agency"
    },
    {
      quote: "Our new website has increased conversions by 40%. Pat's strategic approach really works.",
      author: "Emma Wilson",
      company: "E-commerce Brand"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 animate-fade-in">
            Testimonials
          </h2>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card shadow-strong rounded-lg p-8 animate-fade-in">
                    <blockquote className="text-xl md:text-2xl text-muted-foreground mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;