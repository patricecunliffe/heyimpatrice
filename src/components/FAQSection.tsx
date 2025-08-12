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
        Your monthly plan covers hosting, security monitoring, software updates, backups, and basic performance optimisation. You can add extra services (like custom development, content updates, advanced SEO, forms, or email marketing) at an additional cost.
      </p>,
  aPlain: "Your monthly plan covers hosting, security monitoring, software updates, backups, and basic performance optimisation. You can add extra services (like custom development, content updates, advanced SEO, forms, or email marketing) at an additional cost."
}, {
  q: "Do you offer a handover so I can manage my own site?",
  a: <p>
        No — I specialise in managed websites so you get consistent performance and professional support without the learning curve.
      </p>,
  aPlain: "No — I specialise in managed websites so you get consistent performance and professional support without the learning curve."
}, {
  q: "What if I want changes after launch?",
  a: <p>
        No problem. You can request one-off changes at an hourly rate, or choose a monthly add-on for a set number of hours each month for ongoing tweaks, updates, and improvements.
      </p>,
  aPlain: "No problem. You can request one-off changes at an hourly rate, or choose a monthly add-on for a set number of hours each month for ongoing tweaks, updates, and improvements."
}, {
  q: "Do you offer payment plans?",
  a: <p>
        Yes — you can choose to pay every 6 months or annually (with a small discount for annual payments). This keeps billing simple and predictable.
      </p>,
  aPlain: "Yes — you can choose to pay every 6 months or annually (with a small discount for annual payments). This keeps billing simple and predictable."
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
  return <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <header className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl tracking-tight font-normal md:text-6xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-lg">
            Clear answers about hosting, timelines, support, and more.
          </p>
        </header>

        <article className="rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden">
          <Accordion type="single" collapsible className="divide-y">
            {faqs.map((item, i) => <AccordionItem key={i} value={`item-${i + 1}`} className="border-b last:border-b-0">
                <AccordionTrigger className="px-4 md:px-6 text-base md:text-lg font-medium hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 text-muted-foreground">
                  <div className="prose prose-sm md:prose-base max-w-none">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </article>

        <script type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqLd)
      }} />
      </div>
    </section>;
};
export default FAQSection;