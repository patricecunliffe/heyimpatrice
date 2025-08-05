import { useState } from 'react';
import illustration2 from '@/assets/illustration-2.png';
import illustration3 from '@/assets/illustration-3.png';
import illustration4 from '@/assets/illustration-4.png';
import illustration5 from '@/assets/illustration-5.png';

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  // Base illustrations - easily expandable for 40+ images
  const baseIllustrations = [
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Michael%20(beige).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Sydney%20(chinese%20white).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Augustine%20(malibu%20beige).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Da%20Vinci%20(chinese%20white).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Mark%20Twain%20(orange%20peel).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Ali%20(corn%20silk).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Plato%20(clotted%20cream).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Aeropolis%20of%20Athens%20(midnight%20moss).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Billy%20Graham%20(pale%20gold).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Big%20Ben%20(crow%20black).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Empire%20State%20(snowbelt).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Golden%20Gate%20(volcano%20glow).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Great%20Wall%20(toasted%20barley).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/London%20Eye%20(cocoa%20bean).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Steve%20Irwin%20(off%20white).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Marilyn%20Monroe%20(light%20cream).png',
    'https://raw.githubusercontent.com/patricecunliffe/heyimpatrice/refs/heads/main/Albert%20(dandelion).png',
  ];

  // Create separate arrays for top and bottom rows to prevent duplicates
  const topRowIllustrations = [...baseIllustrations, ...baseIllustrations, ...baseIllustrations];
  const bottomRowIllustrations = [...baseIllustrations.slice(8), ...baseIllustrations, ...baseIllustrations.slice(0, 8)];

  const handleMouseMove = (e: React.MouseEvent, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
              style={{ width: `${topRowIllustrations.length * 280}px` }}
            >
              {topRowIllustrations.map((img, index) => (
                <div
                  key={`top-${index}`}
                  className="group relative flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:cursor-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjM2MTUgMTQuNjc5MkMyNi4zNjE1IDE4Ljc3MDggMjIuOTYxNSAyMi4xNTQyIDE4LjkzMDggMjIuMTU0MkMxNC45IDIyLjE1NDIgMTEuNSAxOC43NzA4IDExLjUgMTQuNjc5MkMxMS41IDEwLjU4NzUgMTQuOSA3LjIwNDEgMTguOTMwOCA3LjIwNDFDMjIuOTYxNSA3LjIwNDEgMjYuMzYxNSAxMC41ODc1IDI2LjM2MTUgMTQuNjc5MloiIGZpbGw9IiNGRjkwRTgiLz4KPHA+YXRoIGQ9Ik0zNC4xNjkyIDI5LjIyOUMzNC4xNjkyIDI5LjIyOSAzNC43MDc3IDI2LjI3NzEgMzQuNzA3NyAyNi4yNzcxQzM0LjcwNzcgMjYuMjc3MSAzMy42MTU0IDI2LjI3NzEgMzMuNjE1NCAyNi4yNzcxQzMzLjA3NjkgMjYuMjc3MSAzMi41Mzg1IDI2LjI3NzEgMzIgMjYuMjc3MUMzMS40NjE1IDI2LjI3NzEgMzAuOTIzIDI2LjI3NzEgMzAuMzg0NSAyNi4yNzcxQzI4IDI2LjI3NzEgMjUuNjE1NCAyNi4yNzcxIDIzLjIzMDggMjYuMjc3MUMxOS4yIDI2LjI3NzEgMTUuMTY5MiAyNi4yNzcxIDExLjEzODUgMjYuMjc3MUM5LjEyMzA4IDI2LjI3NzEgNy4xMDc2OSAyNi4yNzcxIDUuMDkyMyAyNi4yNzcxQzMuMDc2OTIgMjYuMjc3MSAxLjA2MTU0IDI2LjI3NzEgLTAuOTUzODQ2IDI2LjI3NzFWMjkuMjI5QzEuMDYxNTQgMjkuMjI5IDMuMDc2OTIgMjkuMjI5IDUuMDkyMyAyOS4yMjlDNy4xMDc2OSAyOS4yMjkgOS4xMjMwOCAyOS4yMjkgMTEuMTM4NSAyOS4yMjlDMTUuMTY5MiAyOS4yMjkgMTkuMiAyOS4yMjkgMjMuMjMwOCAyOS4yMjlDMjUuNjE1NCAyOS4yMjkgMjggMjkuMjI5IDMwLjM4NDUgMjkuMjI5QzMwLjkyMyAyOS4yMjkgMzEuNDYxNSAyOS4yMjkgMzIgMjkuMjI5QzMyLjUzODUgMjkuMjI5IDMzLjA3NjkgMjkuMjI5IDMzLjYxNTQgMjkuMjI5QzM0LjE1MzggMjkuMjI5IDM0LjY5MjMgMjkuMjI5IDM0LjIzMDggMjkuMjI5SDM0LjE2OTJaIiBmaWxsPSIjRkY5MEU4Ii8+Cjwvc3ZnPgo='), pointer-events]"
                  onMouseMove={(e) => handleMouseMove(e, `top-${index}`)}
                  onMouseEnter={() => setHoveredCard(`top-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img
                    src={img}
                    alt={`Illustration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Purchase Button */}
                  {hoveredCard === `top-${index}` && (
                    <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 pointer-events-none">
                      <a
                        href="https://heyimpatrice.gumroad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute transform -rotate-12 bg-[#FF90E8] text-white px-6 py-2 rounded-full font-anton font-bold text-sm uppercase hover:bg-[#ff7de6] transition-colors duration-200 pointer-events-auto"
                        style={{
                          left: `${mousePosition.x - 40}px`,
                          top: `${mousePosition.y - 20}px`,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        purchase
                      </a>
                    </div>
                  )}
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
              style={{ width: `${bottomRowIllustrations.length * 280}px` }}
            >
              {bottomRowIllustrations.map((img, index) => (
                <div
                  key={`bottom-${index}`}
                  className="group relative flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:cursor-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjM2MTUgMTQuNjc5MkMyNi4zNjE1IDE4Ljc3MDggMjIuOTYxNSAyMi4xNTQyIDE4LjkzMDggMjIuMTU0MkMxNC45IDIyLjE1NDIgMTEuNSAxOC43NzA4IDExLjUgMTQuNjc5MkMxMS41IDEwLjU4NzUgMTQuOSA3LjIwNDEgMTguOTMwOCA3LjIwNDFDMjIuOTYxNSA3LjIwNDEgMjYuMzYxNSAxMC41ODc1IDI2LjM2MTUgMTQuNjc5MloiIGZpbGw9IiNGRjkwRTgiLz4KPHA+YXRoIGQ9Ik0zNC4xNjkyIDI5LjIyOUMzNC4xNjkyIDI5LjIyOSAzNC43MDc3IDI2LjI3NzEgMzQuNzA3NyAyNi4yNzcxQzM0LjcwNzcgMjYuMjc3MSAzMy42MTU0IDI2LjI3NzEgMzMuNjE1NCAyNi4yNzcxQzMzLjA3NjkgMjYuMjc3MSAzMi41Mzg1IDI2LjI3NzEgMzIgMjYuMjc3MUMzMS40NjE1IDI2LjI3NzEgMzAuOTIzIDI2LjI3NzEgMzAuMzg0NSAyNi4yNzcxQzI4IDI2LjI3NzEgMjUuNjE1NCAyNi4yNzcxIDIzLjIzMDggMjYuMjc3MUMxOS4yIDI2LjI3NzEgMTUuMTY5MiAyNi4yNzcxIDExLjEzODUgMjYuMjc3MUM5LjEyMzA4IDI2LjI3NzEgNy4xMDc2OSAyNi4yNzcxIDUuMDkyMyAyNi4yNzcxQzMuMDc2OTIgMjYuMjc3MSAxLjA2MTU0IDI2LjI3NzEgLTAuOTUzODQ2IDI2LjI3NzFWMjkuMjI5QzEuMDYxNTQgMjkuMjI5IDMuMDc2OTIgMjkuMjI5IDUuMDkyMyAyOS4yMjlDNy4xMDc2OSAyOS4yMjkgOS4xMjMwOCAyOS4yMjkgMTEuMTM4NSAyOS4yMjlDMTUuMTY5MiAyOS4yMjkgMTkuMiAyOS4yMjkgMjMuMjMwOCAyOS4yMjlDMjUuNjE1NCAyOS4yMjkgMjggMjkuMjI5IDMwLjM4NDUgMjkuMjI5QzMwLjkyMyAyOS4yMjkgMzEuNDYxNSAyOS4yMjkgMzIgMjkuMjI5QzMyLjUzODUgMjkuMjI5IDMzLjA3NjkgMjkuMjI5IDMzLjYxNTQgMjkuMjI5QzM0LjE1MzggMjkuMjI5IDM0LjY5MjMgMjkuMjI5IDM0LjIzMDggMjkuMjI5SDM0LjE2OTJaIiBmaWxsPSIjRkY5MEU4Ii8+Cjwvc3ZnPgo='), pointer-events]"
                  onMouseMove={(e) => handleMouseMove(e, `bottom-${index}`)}
                  onMouseEnter={() => setHoveredCard(`bottom-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img
                    src={img}
                    alt={`Illustration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Purchase Button */}
                  {hoveredCard === `bottom-${index}` && (
                    <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 pointer-events-none">
                      <a
                        href="https://heyimpatrice.gumroad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute transform -rotate-12 bg-[#FF90E8] text-white px-6 py-2 rounded-full font-anton font-bold text-sm uppercase hover:bg-[#ff7de6] transition-colors duration-200 pointer-events-auto"
                        style={{
                          left: `${mousePosition.x - 40}px`,
                          top: `${mousePosition.y - 20}px`,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        purchase
                      </a>
                    </div>
                  )}
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