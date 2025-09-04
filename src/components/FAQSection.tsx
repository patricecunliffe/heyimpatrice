import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
        No — all websites are hosted and managed by me. This ensures top performance, security, and compatibility with the tools I’ve set up. It also means you never have to worry about updates, backups, or bugs.
      </p>,
  aPlain: "No — all websites are hosted and managed by me. This ensures top performance, security, and compatibility with the tools I’ve set up. It also means you never have to worry about updates, backups, or bugs."
}, {
  q: "What’s included in the monthly cost?",
  a: <p>
        Your monthly plan covers hosting, security monitoring, software updates, backups, and basic performance optimisation. You can add extra services (like custom development, content updates, advanced SEO, or email marketing) at an additional cost.
      </p>,
  aPlain: "Your monthly plan covers hosting, security monitoring, software updates, backups, and basic performance optimisation. You can add extra services (like custom development, content updates, advanced SEO, or email marketing) at an additional cost."
}, {
  q: "Do you offer a handover so I can manage my own site?",
  a: <p>
        No — I specialise in managed websites so you get consistent performance and professional support without the learning curve.
      </p>,
  aPlain: "No — I specialise in managed websites so you get consistent performance and professional support without the learning curve."
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
        That’s exactly why I offer scalable packages. You can start small and add more capabilities as your needs evolve — without rebuilding from scratch.
      </p>,
  aPlain: "That’s exactly why I offer scalable packages. You can start small and add more capabilities as your needs evolve — without rebuilding from scratch."
}, {
  q: "Do you provide SEO?",
  a: <p>
        I provide basic on-page SEO with every site to ensure search engines can find you. More advanced SEO work can be added as a separate service when you’re ready to invest in growth.
      </p>,
  aPlain: "I provide basic on-page SEO with every site to ensure search engines can find you. More advanced SEO work can be added as a separate service when you’re ready to invest in growth."
}, {
  q: "How long will my website take to build?",
  a: <div className="space-y-2">
        <ul className="list-disc pl-6">
          <li>Quick Launch: Typically 1–2 weeks</li>
          <li>Growth Package: 3–5 weeks</li>
          <li>The Complete Build: 6–8 weeks</li>
        </ul>
        <p className="text-muted-foreground">
          Timelines depend on complexity, feedback speed, and content readiness.
        </p>
      </div>,
  aPlain: "Quick Launch: Typically 1–2 weeks; Growth Package: 3–5 weeks; The Complete Build: 6–8 weeks. Timelines depend on complexity, feedback speed, and content readiness."
}, {
  q: "Do you work with all industries?",
  a: <p>
        Yes. I’ve built websites for a variety of industries — service providers, creatives, educators, and more. The process is tailored to your goals, not your industry.
      </p>,
  aPlain: "Yes. I’ve built websites for a variety of industries — service providers, creatives, educators, and more. The process is tailored to your goals, not your industry."
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
  return <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl mb-6 font-normal md:text-6xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Clear answers about hosting, timelines, support, and more.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((item, i) => (
            <article key={i} className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${i + 1}`} className="border-none">
                  <AccordionTrigger className="p-0 text-left font-dmsans text-lg font-semibold hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="p-0 pt-4 text-muted-foreground">
                    <div className="prose prose-sm max-w-none">
                      {item.a}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </article>
          ))}
        </div>

        <script type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqLd)
      }} />
      </div>
    </section>;
};
export default FAQSection;