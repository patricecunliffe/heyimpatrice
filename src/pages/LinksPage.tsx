import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, FileText, MessageSquare, Palette, Instagram, AtSign } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import ContactForm from "@/components/ContactForm";
const LinksPage = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const links = [{
    title: "My Website",
    url: "/",
    icon: Home,
    description: "Explore my work and services"
  }, {
    title: "Wallpapers",
    url: "https://heyimpatrice.gumroad.com",
    icon: Palette,
    description: "Wallpapers for your devices",
    external: true
  }, {
    title: "Notion",
    url: "https://www.notion.so/@heyimpatrice",
    icon: FileText,
    description: "Get my FREE templates",
    external: true
  }, {
    title: "Get a Free Quote",
    url: "https://kiwi-oatmeal-777.notion.site/23fd5994cd3480b0bcc0cb7be9052fee?pvs=105",
    icon: MessageSquare,
    description: "Start your next project!"
  }];
  const handleLinkClick = (url: string, external?: boolean) => {
    if (external) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };
  return <main className="min-h-screen bg-background text-foreground">
      {/* Profile Section */}
      <div className="flex flex-col items-center pt-16 pb-8 px-6">
        <div className="w-24 h-24 mb-6 rounded-full overflow-hidden shadow-strong animate-fade-in">
          <img src="/lovable-uploads/e95d8ab0-4eb5-4b29-9b31-33c4bfb5ad5d.png" alt="Patrice Profile" loading="lazy" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-2xl font-bold mb-2 animate-fade-in animation-delay-200 font-dmsans ">heyimpatrice</h1>

        <p className="text-muted-foreground text-center max-w-xs animate-fade-in animation-delay-300 text-xs">Creative at heart, ready to build something remarkable with you.</p>
      </div>

      {/* Links Section */}
      <div className="max-w-md mx-auto px-6 pb-16">
        <div className="space-y-4">
          {/* Contact Me - inverted style */}
          <Button onClick={() => setContactOpen(true)} className="w-full h-16 justify-start text-left p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] group animate-fade-in bg-foreground text-background hover:bg-background hover:text-foreground border border-border">
            <div className="flex items-center space-x-4 w-full">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between py-0">
                  <div>
                    <h3 className="transition-colors font-dmsans font-bold text-lg group-hover:text-foreground">
                      Contact Me
                    </h3>
                    <p className="mt-0.5 py-0 text-xs font-thin opacity-80 group-hover:opacity-100">
                      Reach out directly via the form
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Button>

          {links.map((link, index) => <Button key={link.title} onClick={() => {
          if (link.title === "Get a Free Quote") {
            setQuoteOpen(true);
            return;
          }
          handleLinkClick(link.url, link.external);
        }} variant="outline" style={{
          animationDelay: `${(index + 4) * 100}ms`
        }} className="w-full h-16 justify-start text-left p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] group animate-fade-in bg-card hover:bg-accent border-border py-[40px]">
              <div className="flex items-center space-x-4 w-full">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between py-0">
                    <div>
                      <h3 className="text-foreground group-hover:text-primary transition-colors font-dmsans font-bold text-lg">
                        {link.title}
                      </h3>
                      <p className="text-muted-foreground mt-0.5 py-0 text-xs font-thin group-hover:text-accent-foreground">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Button>)}
        </div>
      </div>

      {/* Contact Drawer */}
      <Drawer open={contactOpen} onOpenChange={setContactOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Contact Me</DrawerTitle>
            <DrawerDescription>Send me a quick message</DrawerDescription>
          </DrawerHeader>
          <div className="px-6 pb-8">
            <ContactForm onSubmitted={() => setContactOpen(false)} />
          </div>
        </DrawerContent>
      </Drawer>

      {/* Quote Drawer */}
      <Drawer open={quoteOpen} onOpenChange={setQuoteOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center text-3xl">Get a Free Quote</DrawerTitle>
            <DrawerDescription className="text-center">Tell me about your project</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-8">
            <iframe src="https://kiwi-oatmeal-777.notion.site/ebd/23fd5994cd3480b0bcc0cb7be9052fee" className="w-full h-[70vh] rounded-md border border-border" frameBorder="0" allowFullScreen title="Free quote form" />
          </div>
        </DrawerContent>
      </Drawer>

      {/* Footer */}
      <div className="text-center pb-8 px-6">
        <div className="flex items-center justify-center gap-6 mb-3">
          <a href="https://instagram.com/heyimpatrice" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram">
            <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
          <a href="https://www.threads.net/@heyimpatrice" target="_blank" rel="noopener noreferrer" aria-label="Visit Threads">
            <AtSign className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">Built with love in Australia 🇦🇺</p>
      </div>
    </main>;
};
export default LinksPage;