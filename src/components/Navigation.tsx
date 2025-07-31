import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-medium border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300"
          >
            heyimpatrice
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              Services
            </button>
          </div>
          
          {/* Contact Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105"
            size="sm"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;