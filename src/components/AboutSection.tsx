import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [centeredIndex, setCenteredIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return; // Only for mobile
      
      const viewportCenter = window.innerHeight / 2 + window.scrollY;
      let closestIndex = null;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenteredIndex(closestIndex);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  const statements = [{
    headline: "Build genuine connections with every visitor",
    byline: "Websites that feel personal and guide people naturally toward working with you."
  }, {
    headline: "Replace 6+ subscriptions with one powerful system",
    byline: "Stop juggling multiple platforms and paying for tools that don't talk to each other."
  }, {
    headline: "Get qualified leads while you sleep",
    byline: "Automated systems that identify your best prospects and nurture them until they're ready to buy."
  }, {
    headline: "Stop losing customers to confusing websites",
    byline: "Clear, simple designs that make it obvious what you do and how to get started."
  }];
  return <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-6xl font-instrument text-foreground mb-6">
            Websites That Work While You Sleep
          </h2>
          
          {/* Blurb text */}
          <p className="text-muted-foreground text-base leading-relaxed mb-16 max-w-2xl mx-auto">
            I'm a developer passionate about creating systems that help you get more clients without the complexity of managing logins and subscriptions daily.
          </p>

          {/* Interactive statements - 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {statements.map((statement, index) => {
              const isBlurred = window.innerWidth < 768 
                ? centeredIndex !== null && centeredIndex !== index
                : hoveredIndex !== null && hoveredIndex !== index;
              
              return (
                <div 
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`
                    bg-card border border-border rounded-lg p-6 shadow-soft 
                    transition-all duration-300
                    md:cursor-pointer md:hover:shadow-medium md:hover:border-accent/20
                    ${isBlurred ? 'blur-sm opacity-50' : 'blur-none opacity-100'}
                  `} 
                  onMouseEnter={() => setHoveredIndex(index)} 
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h3 className="text-foreground font-medium leading-relaxed mb-3 text-2xl">
                    {statement.headline}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {statement.byline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;