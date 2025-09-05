import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqs: {
  q: string;
  a: React.ReactNode;
  aPlain: string;
}[] = [{
  q: "How long is the onboarding process?",
  a: <p>
        Our onboarding process typically takes 1-2 weeks. We'll gather all your requirements, brand assets, and preferences to ensure we create exactly what you need for your business.
      </p>,
  aPlain: "Our onboarding process typically takes 1-2 weeks. We'll gather all your requirements, brand assets, and preferences to ensure we create exactly what you need for your business."
}, {
  q: "Why choose our service over a full-time designer?",
  a: <p>
        We offer the expertise of a full design team at a fraction of the cost. You get professional results without the overhead of hiring, training, or managing an in-house designer.
      </p>,
  aPlain: "We offer the expertise of a full design team at a fraction of the cost. You get professional results without the overhead of hiring, training, or managing an in-house designer."
}, {
  q: "Who will be working on my designs?",
  a: <p>
        Your project will be handled by our experienced design team, led by a senior designer who will be your main point of contact throughout the entire process.
      </p>,
  aPlain: "Your project will be handled by our experienced design team, led by a senior designer who will be your main point of contact throughout the entire process."
}, {
  q: "What programs do you design in?",
  a: <p>
        We use industry-standard tools including Figma, Adobe Creative Suite, Sketch, and other professional design software to deliver high-quality, scalable designs.
      </p>,
  aPlain: "We use industry-standard tools including Figma, Adobe Creative Suite, Sketch, and other professional design software to deliver high-quality, scalable designs."
}, {
  q: "How will we communicate?",
  a: <p>
        We'll set up regular check-ins via your preferred communication method - whether that's email, Slack, or video calls. You'll always know the status of your project.
      </p>,
  aPlain: "We'll set up regular check-ins via your preferred communication method - whether that's email, Slack, or video calls. You'll always know the status of your project."
}, {
  q: "When will I receive my designs?",
  a: <p>
        Project timelines vary based on scope, but most projects are completed within 2-6 weeks. We'll provide you with a detailed timeline during the onboarding process.
      </p>,
  aPlain: "Project timelines vary based on scope, but most projects are completed within 2-6 weeks. We'll provide you with a detailed timeline during the onboarding process."
}, {
  q: "What if I'm not happy with the design?",
  a: <p>
        We include unlimited revisions until you're completely satisfied. Your success is our priority, and we'll work together until we get it exactly right.
      </p>,
  aPlain: "We include unlimited revisions until you're completely satisfied. Your success is our priority, and we'll work together until we get it exactly right."
}];

const FAQSection: React.FC = () => {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.aPlain
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 lg:gap-20">
          {/* Left side - Title and Description */}
          <div className="lg:pr-4">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">FAQ</h2>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                We're here to support you from the start and make the process smooth.
              </p>
            </div>
          </div>

          {/* Right side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <article key={i} className="bg-card border border-border rounded-lg overflow-hidden">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${i + 1}`} className="border-none">
                    <AccordionTrigger className="px-6 py-5 text-left font-medium text-lg hover:no-underline hover:bg-muted/50 transition-colors duration-200 [&[data-state=open]]:bg-muted/50 [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">{item.q}</span>
                        <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-45" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground">
                      <div className="prose prose-sm max-w-none">
                        {item.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </article>
            ))}
          </div>
        </div>

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqLd)
          }}
        />
      </div>
    </section>
  );
};

export default FAQSection;