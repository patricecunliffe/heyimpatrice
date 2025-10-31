import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FaInstagram, FaThreads } from 'react-icons/fa6';
import { SiNotion, SiGumroad, SiMedium } from 'react-icons/si';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/heyimpatrice/', label: 'Instagram' },
    { icon: FaThreads, url: 'https://www.threads.net/@heyimpatrice', label: 'Threads' },
    { icon: SiNotion, url: 'https://patricecunliffe.notion.site', label: 'Notion' },
    { icon: SiGumroad, url: 'https://heyimpatrice.gumroad.com/', label: 'Gumroad' },
    { icon: SiMedium, url: 'https://medium.com/@patricecunliffe', label: 'Medium' },
  ];

  const featureCards = [
    {
      title: 'My Wallpaper & Notion Shop',
      description: 'My one stop shop powered by shopify where you can purchase all my wallpaper collections and exclusive Notion templates.',
      buttonText: 'VISIT',
      action: () => window.open('https://shop.heyimpatrice.com', '_blank'),
    },
    {
      title: 'Work With Me',
      description: 'Learn more about what I have to offer when it comes to web design and funnel building that turns customers into clients, not just viewers.',
      buttonText: 'JOIN',
      action: () => window.location.href = '/workwithme',
    },
    {
      title: 'FREE Wallpaper Pack',
      description: 'If you have just discovered my wallpapers then start here, with a free download of 20 curated wallpapers for your iPhone to get started.',
      buttonText: 'DOWNLOAD',
      action: () => {
        // Placeholder for PDF download - will be implemented when PDF is provided
        console.log('Download PDF');
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <main className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-inter font-bold mb-8 leading-tight">
            I create minimalist wallpapers, Notion templates and websites to simplify your life
          </h1>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 md:gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-foreground hover:text-foreground/70 transition-colors"
              >
                <social.icon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-6">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 bg-[#F4F4F4] dark:bg-[#F4F4F4] border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-grow">
                <h2 className="text-xl md:text-2xl font-inter font-bold mb-3 text-black">
                  {card.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <Button
                onClick={card.action}
                variant="ghost"
                className="w-full md:w-auto md:min-w-[140px] border border-black hover:bg-black hover:text-white font-inter font-semibold text-black"
                size="lg"
              >
                {card.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </main>

      <ThemeToggle />
    </div>
  );
};

export default Index;
