import { Button } from "@/components/ui/button";
import { ExternalLink, Home, FileText, MessageSquare, Palette } from "lucide-react";
const LinksPage = () => {
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
    title: "Get a Quote",
    url: "https://kiwi-oatmeal-777.notion.site/23fd5994cd3480b0bcc0cb7be9052fee?pvs=105",
    icon: MessageSquare,
    description: "Start your next project!"
  }];
  const handleLinkClick = (url: string, external?: boolean) => {
    if (external) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  };
  return <div className="min-h-screen bg-background text-foreground">
      {/* Profile Section */}
      <div className="flex flex-col items-center pt-16 pb-8 px-6">
        <div className="w-24 h-24 mb-6 rounded-full overflow-hidden shadow-strong animate-fade-in">
          <img src="/lovable-uploads/be74fedd-28c8-4019-a7fb-1f8f65eb9a1a.png" alt="Patrice Profile" className="w-full h-full object-cover" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2 animate-fade-in animation-delay-200 font-dmsans ">heyimpatrice</h1>
        
        <p className="text-muted-foreground text-center max-w-xs animate-fade-in animation-delay-300 text-xs">
          Pastor by day, creative every other waking moment. Let's build something amazing together.
        </p>
      </div>

      {/* Links Section */}
      <div className="max-w-md mx-auto px-6 pb-16">
        <div className="space-y-4">
          {links.map((link, index) => {
          const Icon = link.icon;
          return <Button key={link.title} onClick={() => handleLinkClick(link.url, link.external)} variant="outline" style={{
            animationDelay: `${(index + 4) * 100}ms`
          }} className="w-full h-16 justify-start text-left p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] group animate-fade-in bg-card hover:bg-accent border-border py-[40px]">
                <div className="flex items-center space-x-4 w-full">
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between py-0">
                      <div>
                        <h3 className="text-foreground group-hover:text-primary transition-colors font-dmsans font-bold text-lg">
                          {link.title}
                        </h3>
                        <p className="text-muted-foreground mt-0.5 py-0 text-xs font-thin">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Button>;
        })}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pb-8 px-6">
        <p className="text-xs text-muted-foreground">
          Built with love in Australia 🇦🇺
        </p>
      </div>
    </div>;
};
export default LinksPage;