import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-medium' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">heyimpatrice</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-foreground hover:text-primary transition-colors"
            >
              WORK
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="shadow-medium hover:shadow-strong transition-all"
            >
              CTA
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <Button variant="outline" size="sm" className="md:hidden">
            ☰
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;