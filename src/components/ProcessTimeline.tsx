import { useEffect, useRef, useState } from "react";
import { MessageSquare, ListChecks, ClipboardCheck, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Quote", Icon: MessageSquare },
  { title: "Options", Icon: ListChecks },
  { title: "Plan", Icon: ClipboardCheck },
  { title: "Build", Icon: Code2 },
  { title: "Launch", Icon: Rocket },
];

const details: string[] = [
  "Share goals and get a fast, transparent quote.",
  "Compare tailored options and choose a direction.",
  "Confirm structure, scope, and timeline.",
  "Ship pages iteratively with regular updates.",
  "Go live with handover or managed care.",
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

      {/* Mobile: centered pills with arrows */}
      <div className="md:hidden">
        <ul className="space-y-2 flex flex-col items-center">
          {steps.map((step, idx) => {
            const Icon = step.Icon;
            const isActive = activeStep === idx;
            return (
              <li key={step.title} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isActive}
                  aria-controls="process-details"
                  className={cn(
                    "flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-sm will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
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
          className="mt-5 flex justify-center"
        >
          <article className="bg-card border border-border rounded-2xl shadow-sm px-5 py-4 max-w-xl w-full animate-enter">
            <header className="flex items-center gap-3 mb-2">
              <div className="h-7 w-7 rounded-full border border-border bg-background text-foreground text-xs font-medium flex items-center justify-center">
                {activeStep + 1}
              </div>
              <div className="flex items-center gap-2">
                {(() => {
                  const Icon = steps[activeStep].Icon;
                  return <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />;
                })()}
                <h4 className="text-sm font-semibold leading-none">{steps[activeStep].title}</h4>
              </div>
            </header>
            <p className="text-sm text-muted-foreground">
              {details[activeStep]}
            </p>
          </article>
        </div>
      )}
    </section>
  );
};

export default ProcessTimeline;
