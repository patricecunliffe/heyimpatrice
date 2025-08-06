import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

const useTypewriter = (baseText: string, cyclingWords: string[], speed: number = 80) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [phase, setPhase] = useState<'base' | 'typing' | 'deleting' | 'complete'>('base');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === 'base') {
      if (currentIndex < baseText.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + baseText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
      } else {
        setPhase('typing');
        setCurrentIndex(0);
      }
    } else if (phase === 'typing') {
      const word = cyclingWords[currentWordIndex];
      if (currentIndex < word.length) {
        timeout = setTimeout(() => {
          setCurrentWord(prev => prev + word[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed + 20);
      } else {
        if (currentWordIndex === cyclingWords.length - 1) {
          setPhase('complete');
          setIsComplete(true);
        } else {
          timeout = setTimeout(() => {
            setPhase('deleting');
            setCurrentIndex(word.length - 1);
          }, 1000);
        }
      }
    } else if (phase === 'deleting') {
      if (currentIndex >= 0) {
        timeout = setTimeout(() => {
          setCurrentWord(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, 50);
      } else {
        setCurrentWordIndex(prev => prev + 1);
        setPhase('typing');
        setCurrentIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, baseText, cyclingWords, speed, phase, currentWordIndex]);

  const fullDisplayText = displayText + currentWord;
  const showCursor = !isComplete || phase === 'complete';

  return { displayText: fullDisplayText, isComplete, showCursor };
};
const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [heroBg1, heroBg2, heroBg3];
  
  const baseText = "Creating simple, effective websites that turn visitors into ";
  const cyclingWords = ["customers", "clients", "contacts"];
  const { displayText, isComplete, showCursor } = useTypewriter(baseText, cyclingWords, 80);
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
      <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-2 items-center min-h-[70vh] md:min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-left">
            
            {/* Main vision statement - typewriter animation */}
            <div className="mb-8 opacity-0 animate-fade-in-delayed">
              <h1 className="text-4xl md:text-6xl leading-tight mb-6 lg:text-7xl font-instrument">
                {displayText}
                {showCursor && <span className="animate-pulse">_</span>}
              </h1>
            </div>
            
            {/* Work with me button - appears after title */}
            <div className="mb-6 md:mb-12 opacity-0 animate-fade-in-delayed">
              <Button variant="ghost" size="lg" onClick={() => scrollToSection('contact')} className="rounded-none px-8 py-4 border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-semibold text-base">WORK WITH ME</Button>
            </div>
            
            {/* CTA Buttons - appear with scale effect */}
            <div className="flex flex-col sm:flex-row gap-6 items-start opacity-0 animate-scale-in-delayed">
              <Button size="lg" onClick={() => scrollToSection('about')} className="px-8 py-4 text-lg shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105 bg-primary text-primary-foreground">
                Learn About Me
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="py-4 text-lg shadow-medium hover:shadow-strong transition-all duration-300 border-2 hover:bg-primary hover:text-primary-foreground px-[16px]">
                Start Your Project
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center opacity-0 animate-fade-in-delayed mt-4 lg:mt-0">
            <div className="w-96 h-96 sm:w-[400px] sm:h-[400px] md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              <img src="/lovable-uploads/3d156ebe-4687-4964-b218-bf0d36dc8927.png" alt="Patrice - Character illustration" className="w-full h-full object-contain dark:invert" />
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