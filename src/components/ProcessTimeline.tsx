import { useEffect, useRef, useState } from "react";
import { MessageSquare, ListChecks, ClipboardCheck, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Quote", Icon: MessageSquare },
  { title: "Strategy", Icon: ListChecks },
  { title: "Build", Icon: Code2 },
  { title: "Launch", Icon: Rocket },
];

const details: string[] = [
  "Tell us what you want your website to achieve. We’ll dig into your goals, audience, and ideas so we can plan a site that delivers real results — not just good looks.",
  "We’ll guide you through tailored options, from fast-turnaround launches to fully custom builds. You’ll know exactly what you’re getting, how long it will take, and the investment required.",
  "We design, develop, and test your site with precision. You’ll see progress, give feedback, and watch your vision take shape — polished, functional, and ready to perform.",
  "Your site goes live, backed by our ongoing hosting, security, updates, and priority support. We don’t just launch and leave — we keep your website running at its best.",
];

const stepTitles: string[] = [
  "Step 1 — Share Your Vision",
  "Step 2 — Select Your Package",
  "Step 3 — Build & Refine",
  "Step 4 — Launch & Care",
];

const ProcessTimeline = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveStep(null);
    };
    if (activeStep !== null) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [activeStep]);

  const handleToggle = (idx: number) =>
    setActiveStep((prev) => (prev === idx ? null : idx));

  return (
    <section
      ref={ref}
      aria-labelledby="process-timeline-heading"
      className="pt-4 md:pt-6 pb-8"
    >
      <h3 id="process-timeline-heading" className="sr-only">
        Project Process Timeline
      </h3>

      {/* Desktop: compact horizontal with arrows */}
      <div className="hidden md:flex items-center justify-center flex-wrap gap-3">
        {steps.map((step, idx) => {
          const Icon = step.Icon;
          const isActive = activeStep === idx;
          return (
            <div key={step.title} className="flex items-center">
              <button
                type="button"
                onClick={() => handleToggle(idx)}
                aria-expanded={isActive}
                aria-controls="process-details"
                className={cn(
                  "flex items-center gap-2 bg-card border border-border rounded-full px-3 py-2 shadow-sm will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  isActive ? "bg-accent text-accent-foreground" : "text-foreground",
                  inView
                    ? "opacity-100 translate-y-0 motion-safe:animate-[bounce_1.1s_cubic-bezier(0.34,1.56,0.64,1)_infinite]"
                    : "opacity-0 translate-y-2"
                )}
                style={{ animationDelay: `${idx * 160}ms` }}
              >
                <div
                  className={cn(
                    "h-7 w-7 rounded-full border border-border bg-background text-foreground text-xs font-medium flex items-center justify-center",
                    isActive && "bg-accent-foreground text-accent"
                  )}
                >
                  {idx + 1}
                </div>
                <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm font-medium leading-none">{step.title}</span>
              </button>
              {idx < steps.length - 1 && (
                <span
                  className="mx-2 text-muted-foreground select-none"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: full width pills with arrows */}
      <div className="md:hidden">
        <ul className="space-y-2 flex flex-col items-center max-w-sm mx-auto w-full">
          {steps.map((step, idx) => {
            const Icon = step.Icon;
            const isActive = activeStep === idx;
            return (
              <li key={step.title} className="flex flex-col items-center w-full">
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isActive}
                  aria-controls={`process-details-${idx}`}
                  className={cn(
                    "flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-sm will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 w-full justify-start",
                    isActive ? "bg-accent text-accent-foreground" : "text-foreground",
                    inView
                      ? "opacity-100 translate-y-0 motion-safe:animate-[bounce_1.1s_cubic-bezier(0.34,1.56,0.64,1)_infinite]"
                      : "opacity-0 translate-y-2"
                  )}
                  style={{ animationDelay: `${idx * 160}ms` }}
                >
                  <div
                    className={cn(
                      "h-7 w-7 rounded-full border border-border bg-background text-foreground text-xs font-medium flex items-center justify-center flex-shrink-0",
                      isActive && "bg-accent-foreground text-accent"
                    )}
                  >
                    {idx + 1}
                  </div>
                  <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium leading-none">{step.title}</span>
                </button>
                {isActive && (
                  <article
                    id={`process-details-${idx}`}
                    className="mt-2 bg-card border border-border rounded-2xl shadow-sm px-5 py-4 w-full animate-enter"
                  >
                    <header className="mb-2">
                      <h4
                        className="text-base font-medium leading-none font-dmsans"
                        dangerouslySetInnerHTML={{
                          __html: stepTitles[idx].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                        }}
                      />
                    </header>
                    <div
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: details[idx].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                      }}
                    />
                  </article>
                )}
                {idx < steps.length - 1 && (
                  <span
                    className="my-1 text-muted-foreground select-none"
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Details panel */}
      {activeStep !== null && (
        <div
          id="process-details"
          role="region"
          aria-live="polite"
          className="mt-5 hidden md:flex justify-center"
        >
          <article className="bg-card border border-border rounded-2xl shadow-sm px-5 py-4 max-w-2xl w-full animate-enter mx-auto">
            <header className="mb-2">
              <h4 className="text-base font-medium leading-none font-dmsans" dangerouslySetInnerHTML={{
                __html: stepTitles[activeStep].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} />
            </header>
            <div className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{
              __html: details[activeStep].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
          </article>
        </div>
      )}
    </section>
  );
};

export default ProcessTimeline;
