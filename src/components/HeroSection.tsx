import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';
const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [heroBg1, heroBg2, heroBg3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgrounds.length);
    }, 4000); // 4-second intervals

    return () => clearInterval(interval);
  }, [backgrounds.length]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden" style={{
    minHeight: 'calc(100vh - env(safe-area-inset-top))'
  }}>
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((bg, index) => <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentBg ? 'opacity-20' : 'opacity-0'}`} style={{
        backgroundImage: `url(${bg})`
      }} />)}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Small header text - slides up from bottom */}
            <div className="mb-6 opacity-0 translate-y-8 animate-slide-up-delayed">
              <p className="text-sm md:text-base text-muted-foreground tracking-wide font-dmsans font-medium">
                hey i'm patrice
              </p>
            </div>
            
            {/* Main vision statement - fades in */}
            <div className="mb-12 opacity-0 animate-fade-in-delayed">
              <h1 className="text-4xl md:text-6xl leading-tight mb-6 lg:text-7xl font-instrument">
                Creating simple, effective 
                <br />
                <span className="font-bold">websites</span> that turn
                <br />
                visitors into customers
              </h1>
            </div>
            
            {/* CTA Buttons - appear with scale effect */}
            <div className="flex flex-col sm:flex-row gap-6 items-start opacity-0 animate-scale-in-delayed">
              <Button size="lg" onClick={() => scrollToSection('about')} className="px-8 py-4 text-lg shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105 bg-primary text-primary-foreground">
                Learn About Me
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="px-8 py-4 text-lg shadow-medium hover:shadow-strong transition-all duration-300 border-2 hover:bg-primary hover:text-primary-foreground">
                Start Your Project
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-delayed">
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              <img
                src="/lovable-uploads/be74fedd-28c8-4019-a7fb-1f8f65eb9a1a.png"
                alt="Patrice - Character illustration"
                className="w-full h-full object-contain dark:invert"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        
      </div>
    </section>;
};
export default HeroSection;