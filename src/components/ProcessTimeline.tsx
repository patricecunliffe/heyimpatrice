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

const ProcessTimeline = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
          return (
            <div key={step.title} className="flex items-center">
              <div
                className={cn(
                  "flex items-center gap-2 bg-card border border-border rounded-full px-3 py-2 shadow-sm will-change-transform",
                  inView
                    ? "opacity-100 translate-y-0 motion-safe:animate-[bounce_0.6s_cubic-bezier(0.34,1.56,0.64,1)_1]"
                    : "opacity-0 translate-y-2"
                )}
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="h-7 w-7 rounded-full border border-border bg-background text-foreground text-xs font-medium flex items-center justify-center">
                  {idx + 1}
                </div>
                <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm font-medium leading-none">{step.title}</span>
              </div>
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

      {/* Mobile: vertical timeline */}
      <div className="md:hidden">
        <ul className="space-y-3">
          {steps.map((step, idx) => {
            const Icon = step.Icon;
            return (
              <li key={step.title} className="relative pl-8">
                {/* Number badge */}
                <div
                  className={cn(
                    "absolute left-0 top-1.5 h-6 w-6 rounded-full border border-border bg-card text-foreground text-[11px] font-medium flex items-center justify-center shadow-sm will-change-transform",
                    inView
                      ? "opacity-100 translate-y-0 motion-safe:animate-[bounce_0.6s_cubic-bezier(0.34,1.56,0.64,1)_1]"
                      : "opacity-0 translate-y-2"
                  )}
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  {idx + 1}
                </div>

                {/* Connector to next */}
                {idx < steps.length - 1 && (
                  <div
                    className="absolute left-3 top-7 bottom-[-6px] w-px bg-border"
                    aria-hidden="true"
                  />
                )}

                {/* Content */}
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-sm font-medium leading-none">{step.title}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProcessTimeline;
