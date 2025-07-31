import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hey I'm <span className="animate-kinetic inline-block">Patrice</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            <p className="mb-4">
              I create simple, effective 
            </p>
            <p className="mb-4">
              websites that bring
            </p>
            <p>
              in the dollars.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="shadow-strong hover:shadow-intense transition-all transform hover:scale-105"
            >
              About
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="shadow-medium hover:shadow-strong transition-all"
            >
              CTA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;