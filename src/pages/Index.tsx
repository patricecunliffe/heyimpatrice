import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { FaInstagram, FaThreads } from 'react-icons/fa6';
import { SiNotion, SiGumroad, SiMedium } from 'react-icons/si';
import ThemeToggle from '@/components/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const socialLinks = [{
    icon: FaInstagram,
    url: 'https://www.instagram.com/heyimpatrice/',
    label: 'Instagram'
  }, {
    icon: FaThreads,
    url: 'https://www.threads.net/@heyimpatrice',
    label: 'Threads'
  }, {
    icon: SiNotion,
    url: 'https://patricecunliffe.notion.site',
    label: 'Notion'
  }, {
    icon: SiGumroad,
    url: 'https://heyimpatrice.gumroad.com/',
    label: 'Gumroad'
  }, {
    icon: SiMedium,
    url: 'https://medium.com/@patricecunliffe',
    label: 'Medium'
  }];
  const featureCards = [{
    title: 'FREE Wallpaper Pack',
    description: 'If you have just discovered my wallpapers then start here, with a free download of 20 curated wallpapers for your iPhone to get started.',
    buttonText: 'DOWNLOAD',
    action: () => setIsModalOpen(true),
    isClickable: true
  }, {
    title: 'My Wallpaper & Notion Shop',
    description: 'My one stop shop powered by shopify where you can purchase all my wallpaper collections and exclusive Notion templates.',
    buttonText: 'VISIT',
    action: () => window.open('https://shop.heyimpatrice.com', '_blank'),
    isClickable: false
  }, {
    title: 'Work With Me',
    description: 'Learn more about what I have to offer when it comes to web design and funnel building that turns customers into clients, not just viewers.',
    buttonText: 'JOIN',
    action: () => window.location.href = '/workwithme',
    isClickable: false
  }];
  return <div className="min-h-screen bg-[#F4F4F4] dark:bg-background font-inter transition-colors">
      <main className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-inter font-bold mb-12 md:mb-16 leading-tight text-black dark:text-white transition-colors">
            I create minimalist wallpapers, Notion templates and websites to simplify your life
          </h1>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 md:gap-8 mb-8 md:mb-10">
            {socialLinks.map(social => <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors">
                <social.icon className="w-6 h-6 md:w-7 md:h-7" />
              </a>)}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-6">
          {featureCards.map(card => <Card key={card.title} onClick={card.isClickable ? card.action : undefined} className={`p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 bg-white dark:bg-card border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${card.isClickable ? 'cursor-pointer' : ''}`}>
              <div className="flex-grow">
                <h2 className="text-lg md:text-xl font-inter font-bold mb-3 text-black dark:text-white transition-colors">
                  {card.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-600 dark:text-muted-foreground leading-relaxed transition-colors">
                  {card.description}
                </p>
              </div>
              <Button onClick={card.action} variant="ghost" className="w-full md:w-auto md:min-w-[140px] border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-inter font-semibold text-black dark:text-white transition-colors" size="lg">
                {card.buttonText}
              </Button>
            </Card>)}
        </div>

        {/* Desktop Modal */}
        {!isMobile && <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
              <DialogHeader>
                <DialogTitle>Get Your FREE Wallpaper Pack</DialogTitle>
              </DialogHeader>
              <div className="overflow-y-auto max-h-[calc(80vh-100px)]">
                <iframe src="https://tally.so/embed/rjyAjN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="600" frameBorder="0" marginHeight={0} marginWidth={0} title="FREE Wallpaper Pack Form" className="w-full" />
              </div>
            </DialogContent>
          </Dialog>}

        {/* Mobile Drawer */}
        {isMobile && <Drawer open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DrawerContent className="max-h-[90vh]">
              
              <div className="overflow-y-auto flex-1 px-4 pb-8">
                <iframe src="https://tally.so/embed/rjyAjN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="600" frameBorder="0" marginHeight={0} marginWidth={0} title="FREE Wallpaper Pack Form" className="w-full" />
              </div>
            </DrawerContent>
          </Drawer>}
      </main>

      <ThemeToggle />
    </div>;
};
export default Index;