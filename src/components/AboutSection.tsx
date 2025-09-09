import { useState } from 'react';

const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const statements = [
    "Build genuine connections with every visitor",
    "Replace 6+ subscriptions with one powerful system",
    "Get qualified leads while you sleep",
    "Stop losing customers to confusing websites"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-instrument text-foreground leading-tight">
              Websites That Work While You Sleep
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a website developer passionate about creating systems that actually get you more clients. Too many business owners are juggling multiple subscriptions — website hosting, form builders, email automation, assessment tools, link management, analytics dashboards — all while their website sits there looking pretty but not converting.
              </p>
              <p>
                My solution? One functional website that replaces most of your tech stack. Instead of managing five different platforms and monthly bills, you get a streamlined system designed to capture leads, nurture prospects, and convert visitors into paying customers.
              </p>
              <p>
                I believe websites should be simple, effective, and work 24/7 to grow your business — not create more complexity in your life.
              </p>
            </div>
          </div>

          {/* Right side - Interactive statements */}
          <div className="space-y-4">
            {statements.map((statement, index) => (
              <div
                key={index}
                className={`
                  bg-card border border-border rounded-lg p-6 shadow-soft 
                  transition-all duration-300 cursor-pointer
                  hover:shadow-medium hover:border-accent/20
                  ${hoveredIndex !== null && hoveredIndex !== index 
                    ? 'blur-sm opacity-50' 
                    : 'blur-none opacity-100'
                  }
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p className="text-foreground text-lg font-medium leading-relaxed">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;