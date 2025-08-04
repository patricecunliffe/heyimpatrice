import illustration2 from '@/assets/illustration-2.png';
import illustration3 from '@/assets/illustration-3.png';
import illustration4 from '@/assets/illustration-4.png';
import illustration5 from '@/assets/illustration-5.png';

const AboutSection = () => {
  // Base illustrations - easily expandable for 40+ images
  const baseIllustrations = [
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/489677bcfcec242a82b68a69f27bfd37e62d700d/Colosseum.png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/489677bcfcec242a82b68a69f27bfd37e62d700d/Eiffel%20Tower%20mirror%20(dark).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/489677bcfcec242a82b68a69f27bfd37e62d700d/Stonehenge.png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/489677bcfcec242a82b68a69f27bfd37e62d700d/Eiffel%20Tower%20mirror%20(dark).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Aeropolis%20of%20Athens%20(midnight%20moss).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Big%20Ben%20(crow%20black).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Empire%20State%20(snowbelt).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Golden%20Gate%20(volcano%20glow).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Great%20Wall%20(toasted%20barley).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/London%20Eye%20(cocoa%20bean).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Notre%20Dame%20(dark).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Stonehenge.png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Sydney%20(chinese%20white).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Tower%20Bridge.png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Albert%20(dandelion).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Ali%20(corn%20silk).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Augustine%20(malibu%20beige).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Billy%20Graham%20(pale%20gold).png',
    // Add your GitHub-hosted images here as you upload them:
    // 'https://raw.githubusercontent.com/username/repo/main/src/assets/illustration-6.png',
    // 'https://raw.githubusercontent.com/username/repo/main/src/assets/illustration-7.png',
    // ... up to 40+ images
  ];

  // Duplicate arrays for infinite scrolling
  const illustrations = [...baseIllustrations, ...baseIllustrations, ...baseIllustrations];

  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Text */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            I create minimalistic wallpapers, Notion templates and websites to simplify your life and help you grow.
          </h2>
        </div>

        {/* Moving Cards Animation */}
        <div className="relative h-[400px] md:h-[420px] lg:h-[550px]">
          {/* Top Row - Moving Left with Natural Blur */}
          <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
            <div 
              className="flex gap-6 animate-scroll-left"
              style={{ width: `${illustrations.length * 280}px` }}
            >
              {illustrations.map((img, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`Illustration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Natural blur gradients */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Bottom Row - Moving Right with Natural Blur */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
            <div 
              className="flex gap-6 animate-scroll-right"
              style={{ width: `${illustrations.length * 280}px` }}
            >
              {illustrations.slice().reverse().map((img, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`Illustration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Natural blur gradients */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;