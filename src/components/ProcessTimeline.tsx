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
  "Start by reaching out for a complimentary quote and sharing your vision with us. In this step, we'll have a thoughtful conversation about your goals, ideas, and what you want your website to achieve. This is where we get to the heart of your project and truly understand your aspirations, so we can lay strong foundations and ensure everything we build aligns with your vision from the very beginning.",
  "We'll present a variety of tailored site options and strategies, guiding you through each possibility to help you find the best fit for your business. This step is all about gaining clarity on what we want to build together and defining the strategy that will lead to the best outcome for everyone involved. By exploring your needs and goals in depth, we ensure that every decision supports your vision and sets your project up for success from the outset.",
  "I'll develop your website one page at a time, carefully crafting content and designing layouts that reflect the original vision we established together. Throughout this process, I'll keep you updated and invite your feedback at every stage, ensuring each page truly represents your goals and ideas. By building page by page, we can thoughtfully outwork your vision and make adjustments as needed, so the final result is a website that's both cohesive and uniquely yours.",
  "Once the build is complete, we'll go through a thorough review process together to confirm that every page, link, piece of language, and image is exactly as you envisioned. After your final approval, your site goes live! At this stage, you can choose ongoing management with me for future updates and support, or opt for a full code handover with resources and training to manage things independently. This ensures a seamless transition and gives you confidence that your website is ready for success, no matter which path you choose.",
];

const stepTitles: string[] = [
  "1. Get a Free Quote & Share Your Vision",
  "2. Explore Options & Website Strategy", 
  "3. Develop: Build Page by Page",
  "4. Launch & Handover",
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
              <h4 className="text-sm font-medium leading-none">{stepTitles[activeStep]}</h4>
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
