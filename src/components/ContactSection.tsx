import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
const ContactSection = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Let's work together - Website Project Inquiry");
    window.location.href = `mailto:patricecunliffe@gmail.com?subject=${subject}`;
  };
  return <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl mb-6 font-normal md:text-6xl">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Let's bring your vision to life with a website that not only looks amazing 
              but converts visitors into customers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Email Option */}
              <div className="bg-card rounded-xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="mb-4 font-normal text-2xl">Send an Email</h3>
                <p className="text-muted-foreground mb-6 text-base">Describe your project and I’ll reply in 24 hours with how I can help.</p>
                <Button onClick={handleEmailClick} variant="secondary" className="w-full shadow-medium hover:shadow-strong">
                  Send Email
                </Button>
              </div>

              {/* Book a Call Option */}
              <div className="bg-card rounded-xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="mb-4 text-2xl font-normal">Book a Call</h3>
                <p className="text-muted-foreground mb-6 text-base">Book a 20-minute call to see if we’re a fit.</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="w-full shadow-medium hover:shadow-strong">
                      Schedule Call
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh]">
                    <DialogHeader>
                      <DialogTitle className="text-3xl text-center ">Book a 20-minute call</DialogTitle>
                      <DialogDescription className="text-center ">Pick a time that works for you.</DialogDescription>
                    </DialogHeader>
                    <div className="w-full">
                      <iframe src="https://calendly.com/patricecunliffe/30min?hide_event_type_details=1&hide_gdpr_banner=1" className="w-full h-[600px] rounded-md" frameBorder="0" loading="lazy" title="Calendly scheduling" />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Contact Page Option */}
              <div className="bg-card rounded-xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="mb-4 font-normal text-2xl">Contact Form</h3>
                <p className="text-muted-foreground mb-6 text-base">
                  Fill out a quick form and I’ll get back to you within 24 hours.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="w-full shadow-medium hover:shadow-strong">
                      Open Contact Form
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Contact Me</DialogTitle>
                      <DialogDescription>Share a few details and I’ll be in touch.</DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell me about your project..." rows={5} required />
                      </div>
                      <div className="flex justify-end">
                        <Button type="submit" variant="secondary">Send</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            {/* Main CTA */}
            <div className="bg-card rounded-2xl p-8 shadow-intense">
              <h3 className="mb-4 text-4xl font-normal">
                Get Your Free Quote in 3 Days
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Share your goals and receive a tailored project quote within 3 business days—no obligation.
              </p>
              <div className="flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="secondary" className="shadow-strong hover:shadow-intense transition-all transform hover:scale-105">
                      Get a Free Quote
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px]">
                    <DialogHeader>
                      <DialogTitle className="text-center font-normal text-3xl">Request a Free Quote</DialogTitle>
                      <DialogDescription className="text-center">Complete the form below and I’ll follow up within 3 business days.</DialogDescription>
                    </DialogHeader>
                    <div className="w-full">
                      <iframe src="https://kiwi-oatmeal-777.notion.site/ebd/23fd5994cd3480b0bcc0cb7be9052fee" className="w-full h-[600px] rounded-md" frameBorder="0" allowFullScreen title="Free quote form" />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;