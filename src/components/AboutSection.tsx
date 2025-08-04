import illustration2 from '@/assets/illustration-2.png';
import illustration3 from '@/assets/illustration-3.png';
import illustration4 from '@/assets/illustration-4.png';
import illustration5 from '@/assets/illustration-5.png';

const AboutSection = () => {
  const illustrations = [
    'https://images.unsplash.com/photo-1470813740244-df37b8c1cdcb?w=1080&h=1080&fit=crop',
    illustration2,
    illustration3,
    illustration4,
    illustration5,
    'https://images.unsplash.com/photo-1470813740244-df37b8c1cdcb?w=1080&h=1080&fit=crop', // Repeat for infinite scroll
    illustration2,
    illustration3,
  ];

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
        <div className="relative h-[600px] md:h-[800px]">
          {/* Top Row - Moving Left */}
          <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
            <div className="flex gap-8 animate-scroll-left w-[200%]">
              {illustrations.map((img, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`Illustration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving Right */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
            <div className="flex gap-8 animate-scroll-right w-[200%]">
              {illustrations.slice().reverse().map((img, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`Illustration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;