import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Instagram, AtSign } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import ContactForm from "@/components/ContactForm";
import ProductCard from "@/components/ProductCard";
import productIconicPeople from "@/assets/product-iconic-people.png";
import productIconicPlaces from "@/assets/product-places.png";
import productMusicians from "@/assets/product-musicians.png";
import productSportsPeople from "@/assets/product-sports-people.png";
import productFormula1 from "@/assets/product-formula-1.png";
import productBible from "@/assets/product-bible.png";
const LinksPage = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const products = [
    {
      id: "iconic-people",
      title: "Iconic People Collection",
      price: "$0.99",
      image: productIconicPeople,
      productUrl: "https://heyimpatrice.gumroad.com/l/iconic-people",
      category: "wallpapers" as const
    },
    {
      id: "iconic-places",
      title: "Iconic Places Collection",
      price: "$0.99",
      image: productIconicPlaces,
      productUrl: "https://heyimpatrice.gumroad.com/l/places-collection",
      category: "wallpapers" as const
    },
    {
      id: "musicians",
      title: "Musicians Collection",
      price: "$0.99",
      image: productMusicians,
      productUrl: "https://heyimpatrice.gumroad.com/l/musicians-collection",
      category: "wallpapers" as const
    },
    {
      id: "sports-people",
      title: "Sports People Collection",
      price: "$0.99",
      image: productSportsPeople,
      productUrl: "https://heyimpatrice.gumroad.com/l/sports-people",
      category: "wallpapers" as const
    },
    {
      id: "formula-1",
      title: "Formula 1 Collection",
      price: "$0.99",
      image: productFormula1,
      productUrl: "https://heyimpatrice.gumroad.com/l/formula1-collection",
      category: "wallpapers" as const
    },
    {
      id: "bible",
      title: "Bible Collection",
      price: "$0.99",
      image: productBible,
      productUrl: "https://heyimpatrice.gumroad.com/l/bible-collection",
      category: "wallpapers" as const
    }
  ];

  const links = [
    {
      title: "Notion",
      url: "https://www.notion.so/@heyimpatrice",
      icon: FileText,
      description: "Get all my templates",
      external: true
    }
  ];
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

        <h1 className="text-2xl font-bold mb-3 animate-fade-in animation-delay-200 font-dmsans">heyimpatrice</h1>

        <p className="text-foreground text-center max-w-md animate-fade-in animation-delay-300 text-lg mb-6 px-4">
          I create minimalist wallpapers and notion templates to simplify your life
        </p>

        {/* Contact Button - Prominent CTA */}
        <Button 
          onClick={() => setContactOpen(true)} 
          className="w-full max-w-md h-14 rounded-2xl font-dmsans font-bold text-base shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] animate-fade-in animation-delay-400 bg-foreground text-background hover:bg-foreground/90"
        >
          Contact Me
        </Button>
      </div>

      {/* Links Section */}
      <div className="max-w-md mx-auto px-6 pb-8">
        <div className="space-y-3">
          {links.map((link, index) => (
            <Button 
              key={link.title} 
              onClick={() => handleLinkClick(link.url, link.external)} 
              variant="outline" 
              style={{
                animationDelay: `${(index + 5) * 100}ms`
              }} 
              className="w-full h-14 rounded-2xl justify-start text-left px-5 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] group animate-fade-in bg-card hover:bg-accent border-border"
            >
              <div className="flex items-center gap-3 w-full">
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground group-hover:text-primary transition-colors font-dmsans font-semibold text-base">
                    {link.title}
                  </h3>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              productUrl={product.productUrl}
            />
          ))}
        </div>
      </div>

      {/* Contact Drawer */}
      <Drawer open={contactOpen} onOpenChange={setContactOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center text-3xl">Contact Me</DrawerTitle>
            <DrawerDescription className="text-center">Send me a quick message</DrawerDescription>
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
            <iframe src="https://tally.so/embed/woqqZN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" className="w-full h-[70vh] rounded-md border border-border" frameBorder="0" loading="lazy" title="Free quote form" />
          </div>
        </DrawerContent>
      </Drawer>

      {/* Footer */}
      <div className="text-center pb-8 px-6">
        <div className="flex items-center justify-center gap-6 mt-3 mb-6">
          <a href="https://instagram.com/heyimpatrice" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram">
            <Instagram className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
          <a href="https://www.threads.net/@heyimpatrice" target="_blank" rel="noopener noreferrer" aria-label="Visit Threads">
            <AtSign className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">Built with love in Australia 🇦🇺</p>
      </div>
    </main>;
};
export default LinksPage;