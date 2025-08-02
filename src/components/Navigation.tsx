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
  const handleContactClick = () => {
    navigate('/contact');
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
          <button onClick={() => navigate('/')} className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300">
            heyimpatrice
          </button>
          
          {/* Mobile Social Icons + Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Social Media Icons */}
            <a href="https://instagram.com/heyimpatrice" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://threads.net/@heyimpatrice" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.155 5.33c-1.147 0-2.025.257-2.636.77-.61.512-.915 1.247-.915 2.205h-1.5c0-1.292.458-2.355 1.375-3.188C9.458 4.313 10.646 3.83 12.155 3.83c1.51 0 2.698.483 3.564 1.45.867.966 1.301 2.253 1.301 3.86 0 .64-.09 1.23-.269 1.77-.18.54-.434 1.026-.762 1.458a5.34 5.34 0 0 1-1.155 1.134c-.44.31-.918.556-1.434.738v.05c.516.182.994.428 1.434.738.44.31.83.681 1.155 1.134.328.432.582.918.762 1.458.179.54.269 1.13.269 1.77 0 1.607-.434 2.894-1.301 3.86-.866.967-2.055 1.45-3.564 1.45-1.509 0-2.697-.483-3.564-1.45-.867-.966-1.301-2.253-1.301-3.86h1.5c0 .958.305 1.693.915 2.205.61.513 1.489.77 2.636.77s2.025-.257 2.636-.77c.61-.512.915-1.247.915-2.205 0-.958-.305-1.693-.915-2.205-.61-.513-1.489-.77-2.636-.77h-.75v-1.5h.75c1.147 0 2.025-.257 2.636-.77.61-.512.915-1.247.915-2.205 0-.958-.305-1.693-.915-2.205-.61-.513-1.489-.77-2.636-.77z"/>
              </svg>
            </a>
            
            {/* Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground hover:text-primary transition-colors duration-300">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('work')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              Work
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.155 5.33c-1.147 0-2.025.257-2.636.77-.61.512-.915 1.247-.915 2.205h-1.5c0-1.292.458-2.355 1.375-3.188C9.458 4.313 10.646 3.83 12.155 3.83c1.51 0 2.698.483 3.564 1.45.867.966 1.301 2.253 1.301 3.86 0 .64-.09 1.23-.269 1.77-.18.54-.434 1.026-.762 1.458a5.34 5.34 0 0 1-1.155 1.134c-.44.31-.918.556-1.434.738v.05c.516.182.994.428 1.434.738.44.31.83.681 1.155 1.134.328.432.582.918.762 1.458.179.54.269 1.13.269 1.77 0 1.607-.434 2.894-1.301 3.86-.866.967-2.055 1.45-3.564 1.45-1.509 0-2.697-.483-3.564-1.45-.867-.966-1.301-2.253-1.301-3.86h1.5c0 .958.305 1.693.915 2.205.61.513 1.489.77 2.636.77s2.025-.257 2.636-.77c.61-.512.915-1.247.915-2.205 0-.958-.305-1.693-.915-2.205-.61-.513-1.489-.77-2.636-.77h-.75v-1.5h.75c1.147 0 2.025-.257 2.636-.77.61-.512.915-1.247.915-2.205 0-.958-.305-1.693-.915-2.205-.61-.513-1.489-.77-2.636-.77z"/>
                </svg>
              </a>
            </div>
            
            {/* Contact Button - Hidden on mobile */}
            <Button onClick={handleContactClick} className="hidden md:flex shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105" size="sm">CONNECT</Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="md:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-md z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button onClick={() => {
          navigate('/');
          setIsMobileMenuOpen(false);
        }} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              Home
            </button>
            <button onClick={() => handleMobileMenuClick('about')} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              About
            </button>
            <button onClick={() => handleMobileMenuClick('services')} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              Services
            </button>
            <button onClick={() => handleMobileMenuClick('work')} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              Work
            </button>
            <button onClick={handleContactClick} className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300">
              Get In Touch
            </button>
          </div>
        </div>}
    </nav>;
};
export default Navigation;