import { useState, useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const ResourcesPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Wallpapers section data (reused from AboutSection)
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

  const topRowIllustrations = [...baseIllustrations, ...baseIllustrations, ...baseIllustrations];
  const bottomRowIllustrations = [...baseIllustrations.slice(8), ...baseIllustrations, ...baseIllustrations.slice(0, 8)];

  // Notion templates data
  const notionTemplates = [
    {
      id: 1,
      title: "Project Management Hub",
      description: "Complete project tracking with timelines, tasks, and team collaboration",
      gradient: "from-purple-500 to-pink-500",
      price: "$15",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Content Creator Kit",
      description: "Manage your content calendar, ideas, and analytics in one place",
      gradient: "from-blue-500 to-cyan-500",
      price: "$12",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Finance Tracker Pro",
      description: "Budget planning, expense tracking, and financial goal management",
      gradient: "from-green-500 to-emerald-500",
      price: "$18",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Study Planner",
      description: "Academic organization with class schedules, assignments, and notes",
      gradient: "from-orange-500 to-red-500",
      price: "$10",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Life OS Dashboard",
      description: "All-in-one life management system for goals, habits, and planning",
      gradient: "from-indigo-500 to-purple-500",
      price: "$25",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Travel Journal",
      description: "Document your adventures with itineraries, memories, and photos",
      gradient: "from-teal-500 to-blue-500",
      price: "$8",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 7,
      title: "Business Starter Kit",
      description: "Launch your business with planning templates and tracking tools",
      gradient: "from-rose-500 to-pink-500",
      price: "$22",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
    }
  ];

  // Website portfolio data
  const websites = [
    {
      title: "Kingdom Purpose",
      url: "kingdompurpose.au",
      image: "/src/assets/portfolio-kingdom-purpose.jpg"
    },
    {
      title: "Empower Leader",
      url: "empowerleader.org",
      image: "/src/assets/portfolio-ecommerce.jpg"
    },
    {
      title: "inherhands",
      url: "strategicpartners.com.au",
      image: "/src/assets/portfolio-corporate.jpg"
    }
  ];

  const handleWallpaperMouseMove = (e: React.MouseEvent, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleWebsiteClick = (url: string) => {
    window.open(`https://${url}`, '_blank');
  };

  const handleTemplateClick = (templateId: number) => {
    window.open('https://heyimpatrice.gumroad.com/', '_blank');
  };

  // Touch and drag handlers for template carousel
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleCarouselMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Wallpapers Section */}
      <section className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto mb-20">
            <h1 className="font-anton text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              I create minimalistic wallpapers
            </h1>
          </div>

          <div className="relative h-[400px] md:h-[420px] lg:h-[550px]">
            {/* Top Row - Moving Left */}
            <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
              <div 
                className="flex gap-6 animate-scroll-left"
                style={{ width: `${topRowIllustrations.length * 280}px` }}
              >
                {topRowIllustrations.map((img, index) => (
                  <div
                    key={`top-${index}`}
                    className="group relative flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:cursor-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjM2MTUgMTQuNjc5MkMyNi4zNjE1IDE4Ljc3MDggMjIuOTYxNSAyMi4xNTQyIDE4LjkzMDggMjIuMTU0MkMxNC45IDIyLjE1NDIgMTEuNSAxOC43NzA4IDExLjUgMTQuNjc5MkMxMS41IDEwLjU4NzUgMTQuOSA3LjIwNDEgMTguOTMwOCA3LjIwNDFDMjIuOTYxNSA3LjIwNDEgMjYuMzYxNSAxMC41ODc1IDI2LjM2MTUgMTQuNjc5MloiIGZpbGw9IiNGRjkwRTgiLz4KPHA+YXRoIGQ9Ik0zNC4xNjkyIDI5LjIyOUMzNC4xNjkyIDI5LjIyOSAzNC43MDc3IDI2LjI3NzEgMzQuNzA3NyAyNi4yNzcxQzM0LjcwNzcgMjYuMjc3MSAzMy42MTU0IDI2LjI3NzEgMzMuNjE1NCAyNi4yNzcxQzMzLjA3NjkgMjYuMjc3MSAzMi41Mzg1IDI2LjI3NzEgMzIgMjYuMjc3MUMzMS40NjE1IDI2LjI3NzEgMzAuOTIzIDI2LjI3NzEgMzAuMzg0NSAyNi4yNzcxQzI4IDI2LjI3NzEgMjUuNjE1NCAyNi4yNzcxIDIzLjIzMDggMjYuMjc3MUMxOS4yIDI2LjI3NzEgMTUuMTY5MiAyNi4yNzcxIDExLjEzODUgMjYuMjc3MUM5LjEyMzA4IDI2LjI3NzEgNy4xMDc2OSAyNi4yNzcxIDUuMDkyMyAyNi4yNzcxQzMuMDc2OTIgMjYuMjc3MSAxLjA2MTU0IDI2LjI3NzEgLTAuOTUzODQ2IDI2LjI3NzFWMjkuMjI5QzEuMDYxNTQgMjkuMjI5IDMuMDc2OTIgMjkuMjI5IDUuMDkyMyAyOS4yMjlDNy4xMDc2OSAyOS4yMjkgOS4xMjMwOCAyOS4yMjkgMTEuMTM4NSAyOS4yMjlDMTUuMTY5MiAyOS4yMjkgMTkuMiAyOS4yMjkgMjMuMjMwOCAyOS4yMjlDMjUuNjE1NCAyOS4yMjkgMjggMjkuMjI5IDMwLjM4NDUgMjkuMjI5QzMwLjkyMyAyOS4yMjkgMzEuNDYxNSAyOS4yMjkgMzIgMjkuMjI5QzMyLjUzODUgMjkuMjI5IDMzLjA3NjkgMjkuMjI5IDMzLjYxNTQgMjkuMjI5QzM0LjE1MzggMjkuMjI5IDM0LjY5MjMgMjkuMjI5IDM0LjIzMDggMjkuMjI5SDM0LjE2OTJaIiBmaWxsPSIjRkY5MEU4Ii8+Cjwvc3ZnPgo='), pointer-events]"
                    onMouseMove={(e) => handleWallpaperMouseMove(e, `top-${index}`)}
                    onMouseEnter={() => setHoveredCard(`top-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <img
                      src={img}
                      alt={`Wallpaper ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
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
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Bottom Row - Moving Right */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
              <div 
                className="flex gap-6 animate-scroll-right"
                style={{ width: `${bottomRowIllustrations.length * 280}px` }}
              >
                {bottomRowIllustrations.map((img, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="group relative flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:cursor-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjM2MTUgMTQuNjc5MkMyNi4zNjE1IDE4Ljc3MDggMjIuOTYxNSAyMi4xNTQyIDE4LjkzMDggMjIuMTU0MkMxNC45IDIyLjE1NDIgMTEuNSAxOC43NzA4IDExLjUgMTQuNjc5MkMxMS41IDEwLjU4NzUgMTQuOSA3LjIwNDEgMTguOTMwOCA3LjIwNDFDMjIuOTYxNSA3LjIwNDEgMjYuMzYxNSAxMC41ODc1IDI2LjM2MTUgMTQuNjc5MloiIGZpbGw9IiNGRjkwRTgiLz4KPHA+YXRoIGQ9Ik0zNC4xNjkyIDI5LjIyOUMzNC4xNjkyIDI5LjIyOSAzNC43MDc3IDI2LjI3NzEgMzQuNzA3NyAyNi4yNzcxQzM0LjcwNzcgMjYuMjc3MSAzMy42MTU0IDI2LjI3NzEgMzMuNjE1NCAyNi4yNzcxQzMzLjA3NjkgMjYuMjc3MSAzMi41Mzg1IDI2LjI3NzEgMzIgMjYuMjc3MUMzMS40NjE1IDI2LjI3NzEgMzAuOTIzIDI2LjI3NzEgMzAuMzg0NSAyNi4yNzcxQzI4IDI2LjI3NzEgMjUuNjE1NCAyNi4yNzcxIDIzLjIzMDggMjYuMjc3MUMxOS4yIDI2LjI3NzEgMTUuMTY5MiAyNi4yNzcxIDExLjEzODUgMjYuMjc3MUM5LjEyMzA4IDI2LjI3NzEgNy4xMDc2OSAyNi4yNzcxIDUuMDkyMyAyNi4yNzcxQzMuMDc2OTIgMjYuMjc3MSAxLjA2MTU0IDI2LjI3NzEgLTAuOTUzODQ2IDI2LjI3NzFWMjkuMjI5QzEuMDYxNTQgMjkuMjI5IDMuMDc2OTIgMjkuMjI5IDUuMDkyMyAyOS4yMjlDNy4xMDc2OSAyOS4yMjkgOS4xMjMwOCAyOS4yMjkgMTEuMTM4NSAyOS4yMjlDMTUuMTY5MiAyOS4yMjkgMTkuMiAyOS4yMjkgMjMuMjMwOCAyOS4yMjlDMjUuNjE1NCAyOS4yMjkgMjggMjkuMjI5IDMwLjM4NDUgMjkuMjI5QzMwLjkyMyAyOS4yMjkgMzEuNDYxNSAyOS4yMjkgMzIgMjkuMjI5QzMyLjUzODUgMjkuMjI5IDMzLjA3NjkgMjkuMjI5IDMzLjYxNTQgMjkuMjI5QzM0LjE1MzggMjkuMjI5IDM0LjY5MjMgMjkuMjI5IDM0LjIzMDggMjkuMjI5SDM0LjE2OTJaIiBmaWxsPSIjRkY5MEU4Ii8+Cjwvc3ZnPgo='), pointer-events]"
                    onMouseMove={(e) => handleWallpaperMouseMove(e, `bottom-${index}`)}
                    onMouseEnter={() => setHoveredCard(`bottom-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <img
                      src={img}
                      alt={`Wallpaper ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
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
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Notion Templates Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              I create simple Notion templates
            </h2>
          </div>

          {/* Swipeable Template Cards */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-6 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleCarouselMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {notionTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="flex-shrink-0 w-80 md:w-96 cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden select-none"
                  onClick={() => !isDragging && handleTemplateClick(template.id)}
                >
                  <CardContent className="p-0">
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={template.image}
                        alt={template.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-80`}></div>
                      <div className="absolute inset-0 p-8 text-white">
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                          {template.price}
                        </div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16"></div>
                        <div className="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mt-8"></div>
                        <h3 className="text-2xl font-bold mb-3 relative z-10">{template.title}</h3>
                        <p className="text-white/90 leading-relaxed relative z-10">{template.description}</p>
                      </div>
                    </div>
                    <div className="p-6 bg-card">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Click to view details</span>
                        <span className="text-primary font-medium">→</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Fade edges for visual indication of scrollability */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Websites Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              I create effective websites that help your business grow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websites.map((website, index) => (
              <div
                key={index}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => handleWebsiteClick(website.url)}
              >
                <img
                  src={website.image}
                  alt={website.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h3 className="text-white text-xl font-bold mb-2">{website.title}</h3>
                    <span className="text-white/80 text-sm">Visit Website →</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-black/90 px-3 py-1 rounded-full text-xs font-semibold">
                    {website.url}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;