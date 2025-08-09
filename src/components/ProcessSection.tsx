const steps = [
  {
    title: 'Get a Free Quote & Share Your Vision',
    description: 'Share your vision and get a free quote.',
  },
  {
    title: 'Explore Options & Website Strategy',
    description: 'Review tailored options and pick a direction.',
  },
  {
    title: 'Plan: Confirm Project Roadmap',
    description: 'Confirm the structure and roadmap together.',
  },
  {
    title: 'Develop: Build Page by Page',
    description: 'Build pages with regular updates and feedback.',
  },
  {
    title: 'Review & Refine',
    description: 'Review everything and polish details.',
  },
  {
    title: 'Launch & Handover',
    description: 'Launch with ongoing care or full handover.',
  },
];

const ProcessSection = () => {
  return (
    <section aria-labelledby="process-heading" className="pt-6 md:pt-8 pb-12 md:pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Accessible heading only for screen readers to maintain page structure */}
        <h3 id="process-heading" className="sr-only">
          Web Design Process
        </h3>

        {/* Mobile: Vertical stacked list */}
        <div className="md:hidden space-y-5">
          {steps.map((step, idx) => (
            <article
              key={idx}
              className="flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm font-medium">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium leading-tight">{step.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden md:flex items-start justify-between gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <article
              key={idx}
              className="flex-1 min-w-0 text-center animate-fade-in"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div className="mx-auto mb-3 h-14 w-14 lg:h-16 lg:w-16 rounded-full border border-border bg-card text-foreground shadow-sm flex items-center justify-center font-medium">
                {idx + 1}
              </div>
              <h4 className="text-sm font-medium leading-tight max-w-[18rem] mx-auto">{step.title}</h4>
              <p className="mt-1 text-xs text-muted-foreground max-w-[18rem] mx-auto">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
