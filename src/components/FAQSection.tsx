import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqs: {
  q: string;
  a: React.ReactNode;
  aPlain: string;
}[] = [{
  q: "Do I own my website?",
  a: <p>
        Yes. The website is built for you, and you own the content, branding, and assets. I handle all hosting and management so you can focus on running your business, not your tech stack.
      </p>,
  aPlain: "Yes. The website is built for you, and you own the content, branding, and assets. I handle all hosting and management so you can focus on running your business, not your tech stack."
}, {
  q: "Can I take the site and host it somewhere else?",
  a: <p>
        No — all websites are hosted and managed by me. This ensures top performance, security, and compatibility with the tools I've set up. It also means you never have to worry about updates, backups, or bugs.
      </p>,
  aPlain: "No — all websites are hosted and managed by me. This ensures top performance, security, and compatibility with the tools I've set up. It also means you never have to worry about updates, backups, or bugs."
}, {
  q: "What's included in the monthly cost?",
  a: <p>
        Your monthly plan covers hosting, security monitoring, software updates, backups, and basic performance optimisation. You can add extra services (like custom development, content updates, advanced SEO, or email marketing) at an additional cost.
      </p>,
  aPlain: "Your monthly plan covers hosting, security monitoring, software updates, backups, and basic performance optimisation. You can add extra services (like custom development, content updates, advanced SEO, or email marketing) at an additional cost."
}, {
  q: "Do you offer a handover so I can manage my own site?",
  a: <p>
        Not really — I specialise in managed websites so you get consistent performance and professional support without the learning curve. I can look into a handover on special request but the website build cost would need to increase.
      </p>,
  aPlain: "Not really — I specialise in managed websites so you get consistent performance and professional support without the learning curve. I can look into a handover on special request but the website build cost would need to increase."
}, {
  q: "What if I want big changes after launch?",
  a: <p>
        No problem. You can request one-off changes at an hourly rate, or choose a monthly add-on for a set number of hours each month for ongoing tweaks, updates, and improvements.
      </p>,
  aPlain: "No problem. You can request one-off changes at an hourly rate, or choose a monthly add-on for a set number of hours each month for ongoing tweaks, updates, and improvements."
}, {
  q: "Do you offer payment plans?",
  a: <p>
        Yes — you can choose to pay monthly, every 6 months or annually (with a small discount for annual payments). This keeps billing simple and predictable.
      </p>,
  aPlain: "Yes — you can choose to pay monthly, every 6 months or annually (with a small discount for annual payments). This keeps billing simple and predictable."
}, {
  q: "What if my business grows and I need more features?",
  a: <p>
        That's exactly why I offer scalable packages. You can start small and add more capabilities as your needs evolve — without rebuilding from scratch.
      </p>,
  aPlain: "That's exactly why I offer scalable packages. You can start small and add more capabilities as your needs evolve — without rebuilding from scratch."
}, {
  q: "Do you provide SEO?",
  a: <p>
        I provide basic on-page SEO with every site to ensure search engines can find you. More advanced SEO work can be added as a separate service when you're ready to invest in growth.
      </p>,
  aPlain: "I provide basic on-page SEO with every site to ensure search engines can find you. More advanced SEO work can be added as a separate service when you're ready to invest in growth."
}, {
  q: "How long will my website take to build?",
  a: <p>
        Quick Launch: Typically 1–2 weeks; Growth Package: 3–5 weeks; The Complete Build: 6–8 weeks. Timelines depend on complexity, feedback speed, and content readiness.
      </p>,
  aPlain: "Quick Launch: Typically 1–2 weeks; Growth Package: 3–5 weeks; The Complete Build: 6–8 weeks. Timelines depend on complexity, feedback speed, and content readiness."
}, {
  q: "Do you work with all industries?",
  a: <p>
        Yes. I've built websites for a variety of industries — service providers, creatives, educators, and more. The process is tailored to your goals, not your industry.
      </p>,
  aPlain: "Yes. I've built websites for a variety of industries — service providers, creatives, educators, and more. The process is tailored to your goals, not your industry."
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
                Clear answers about hosting, timelines, support, and more.
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