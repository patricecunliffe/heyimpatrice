import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram } from 'lucide-react';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      scrollToSection('home');
    } else {
      navigate('/');
    }
  };
  const handleContactClick = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
    setIsMobileMenuOpen(false);
  };
  const handleMobileMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-medium border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={handleLogoClick} className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300">
            heyimpatrice
          </button>
          
          {/* Mobile Social Icons + Menu Button */}
          <div className="md:hidden flex items-center space-x-3 ml-auto">
            {/* Social Media Icons */}
            <a href="https://instagram.com/heyimpatrice" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
              <Instagram size={20} />
            </a>
            
            {/* Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground hover:text-primary transition-colors duration-300">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('work')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              My Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              Stories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
          
          {/* Social Media and Contact */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="https://instagram.com/heyimpatrice" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                <Instagram size={20} />
              </a>
                  <a href="https://threads.net/@heyimpatrice" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
  <i className="hgi hgi-solid hgi-home" style={{
                fontSize: 20
              }}></i>
            </a>

            </div>
            
            {/* Contact Button - Hidden on mobile */}
            <Button variant="ghost" onClick={() => scrollToSection('contact')} className="hidden md:flex rounded-none border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-semibold" size="sm">Get Started</Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="md:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-md z-40">
          {/* Close button in top right */}
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-6 p-2 text-foreground hover:text-primary transition-colors duration-300">
            <X size={24} />
          </button>
          
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button onClick={() => {
          navigate('/');
          setIsMobileMenuOpen(false);
        }} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              Home
            </button>
            <button onClick={() => handleMobileMenuClick('services')} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              Services
            </button>
            <button onClick={() => handleMobileMenuClick('work')} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              Work
            </button>
            <button onClick={() => handleMobileMenuClick('testimonials')} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              Stories
            </button>
            <button onClick={() => handleMobileMenuClick('contact')} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>}
    </nav>;
};
export default Navigation;