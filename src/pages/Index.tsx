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
    <div className="min-h-screen bg-[#F4F4F4] dark:bg-gray-900 font-inter transition-colors">
      <main className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-inter font-bold mb-12 md:mb-16 leading-tight text-black dark:text-white transition-colors">
            I create minimalist wallpapers, Notion templates and websites to simplify your life
          </h1>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 md:gap-8 mb-8 md:mb-10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors"
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
              className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 bg-white dark:bg-gray-800 border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-grow">
                <h2 className="text-lg md:text-xl font-inter font-bold mb-3 text-black dark:text-white transition-colors">
                  {card.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  {card.description}
                </p>
              </div>
              <Button
                onClick={card.action}
                variant="ghost"
                className="w-full md:w-auto md:min-w-[140px] border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-inter font-semibold text-black dark:text-white transition-colors"
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
