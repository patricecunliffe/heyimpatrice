import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
  return <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-6xl font-instrument text-foreground mb-6">
            Websites That Work While You Sleep
          </h2>
          
          {/* Blurb text */}
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-8">
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

          {/* Arrow connector */}
          <div className="flex justify-center mb-8">
            <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
          </div>

          {/* Interactive statements - 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {statements.map((statement, index) => <div key={index} className={`
                  bg-card border border-border rounded-lg p-6 shadow-soft 
                  transition-all duration-300 cursor-pointer
                  hover:shadow-medium hover:border-accent/20
                  ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm opacity-50' : 'blur-none opacity-100'}
                `} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                <h3 className="text-foreground font-medium leading-relaxed mb-3 text-2xl">
                  {statement.headline}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {statement.byline}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;