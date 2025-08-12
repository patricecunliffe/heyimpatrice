import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WebsitePackages() {
  const packages = [
    {
      name: "Quick Launch",
      headline: "Launch Fast, Look Great",
      description:
        "A professional, mobile-ready website built to get you online in record time — without compromising on style or function. Perfect for new businesses, events, or personal projects that need a strong online presence fast.",
      features: [
        "Up to 3 custom-designed pages",
        "Fully responsive (mobile, tablet, desktop)",
        "Contact form & basic integrations",
        "Starter blog/news page option",
        "Hosting & security setup",
        "Easy-to-manage backend",
      ],
      investment: "$900 (once-off) + optional care plans",
    },
    {
      name: "Growth Package",
      headline: "Built to Grow With You",
      description:
        "A feature-rich website designed to evolve as your business expands. From integrated booking and e-commerce to advanced analytics, this package sets you up for growth without the tech headaches.",
      features: [
        "4–6 custom-designed pages",
        "Fully responsive (mobile, tablet, desktop)",
        "Booking systems, e-commerce, or lead capture",
        "Blog/news section with categories",
        "Integrated email marketing",
        "Performance & analytics setup",
      ],
      investment: "$1,800 (once-off) + optional care plans",
    },
    {
      name: "Complete Build",
      headline: "Your Complete Website, Done Right",
      description:
        "A fully customised, high-performance website with all the features you need to launch, grow, and manage your online presence. Designed to scale with you — whether you’re selling, showcasing, or building community.",
      features: [
        "5+ custom-designed pages",
        "Fully responsive (mobile, tablet, desktop)",
        "Integrated forms, booking, and email capture",
        "Supabase backend for data + automation",
        "Blog/news section ready to go",
        "Analytics dashboard",
        "Fast, secure hosting included",
      ],
      investment: "$2,500 (once-off) + optional care plans",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <Card
          key={pkg.name}
          className="bg-card border border-border shadow-lg rounded-2xl flex flex-col justify-between"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              {pkg.name}
            </CardTitle>
            <p className="text-lg text-muted-foreground mt-2">{pkg.headline}</p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{pkg.description}</p>
            <ul className="space-y-2 mb-4 text-foreground">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-foreground mb-4">
              Investment: {pkg.investment}
            </p>
            <div className="flex gap-3">
              <Button className="w-full">Book Your Discovery Call</Button>
              <Button variant="outline" className="w-full">
                Start My Project
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
