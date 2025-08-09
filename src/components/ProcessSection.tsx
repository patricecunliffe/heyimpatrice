import { MessageSquare, Compass, Map, FileCode, CheckCircle2, Rocket as RocketIcon } from 'lucide-react';

const steps = [
  {
    title: 'Get a Free Quote & Share Your Vision',
    description:
      'Start by reaching out for a complimentary quote. We’ll chat about your goals, ideas, and what you want your website to achieve.',
    icon: MessageSquare,
  },
  {
    title: 'Explore Options & Website Strategy',
    description:
      'We’ll present a variety of tailored site options and strategies, helping you choose the best approach for your business.',
    icon: Compass,
  },
  {
    title: 'Plan: Confirm Project Roadmap',
    description:
      'Together, we’ll finalize the structure and flow, making sure every detail aligns with your vision before we begin development.',
    icon: Map,
  },
  {
    title: 'Develop: Build Page by Page',
    description:
      'I’ll develop your website one page at a time—writing content, designing layouts, and providing updates so you can give feedback at every stage.',
    icon: FileCode,
  },
  {
    title: 'Review & Refine',
    description:
      'After development, we review the entire website together, making final tweaks and ensuring everything is just right.',
    icon: CheckCircle2,
  },
  {
    title: 'Launch & Handover',
    description:
      'Once approved, your site goes live! Choose ongoing management with me or opt for a complete handover with resources and training if you prefer.',
    icon: RocketIcon,
  },
];

const ProcessSection = () => {
  return (
    <section aria-labelledby="process-heading" className="py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="text-center mb-8 md:mb-12 animate-fade-in">
          <h3 id="process-heading" className="text-3xl md:text-4xl font-normal">
            Our Web Design Process
          </h3>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A clear, collaborative path from idea to launch.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <article
                key={idx}
                className="rounded-3xl border border-border bg-card text-card-foreground p-6 shadow-sm hover:shadow-intense transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-accent" />
                      <h4 className="text-lg font-medium leading-tight">{step.title}</h4>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
