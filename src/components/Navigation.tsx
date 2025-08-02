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
                  <path d="M12.186 24C5.582 24 0 18.418 0 12 0 5.582 5.582 0 12 0s12 5.582 12 12c0 6.418-5.582 12-12 12zm0-2.2c5.407 0 9.8-4.393 9.8-9.8S17.593 2.2 12 2.2 2.2 6.593 2.2 12s4.393 9.8 9.8 9.8zm-1.677-13.956c1.341-1.075 3.292-1.075 4.633 0 1.341 1.075 1.341 2.816 0 3.891l-2.317 1.856-2.316-1.856c-1.341-1.075-1.341-2.816 0-3.891zm2.317 10.133c-3.139 0-5.685-2.546-5.685-5.685s2.546-5.685 5.685-5.685 5.685 2.546 5.685 5.685-2.546 5.685-5.685 5.685zm0-1.825c2.132 0 3.86-1.728 3.86-3.86s-1.728-3.86-3.86-3.86-3.86 1.728-3.86 3.86 1.728 3.86 3.86 3.86z"/>
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
                  <path d="M12.186 24C5.582 24 0 18.418 0 12 0 5.582 5.582 0 12 0s12 5.582 12 12c0 6.418-5.582 12-12 12zm0-2.2c5.407 0 9.8-4.393 9.8-9.8S17.593 2.2 12 2.2 2.2 6.593 2.2 12s4.393 9.8 9.8 9.8zm-1.677-13.956c1.341-1.075 3.292-1.075 4.633 0 1.341 1.075 1.341 2.816 0 3.891l-2.317 1.856-2.316-1.856c-1.341-1.075-1.341-2.816 0-3.891zm2.317 10.133c-3.139 0-5.685-2.546-5.685-5.685s2.546-5.685 5.685-5.685 5.685 2.546 5.685 5.685-2.546 5.685-5.685 5.685zm0-1.825c2.132 0 3.86-1.728 3.86-3.86s-1.728-3.86-3.86-3.86-3.86 1.728-3.86 3.86 1.728 3.86 3.86 3.86z"/>
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