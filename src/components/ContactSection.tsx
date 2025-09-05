import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from './ContactForm';

const ContactSection = () => {
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
                <p className="text-muted-foreground mb-6 text-base">Describe your project and I'll reply in 24 hours with how I can help.</p>
                <Button asChild variant="outline" className="w-full rounded-full border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background shadow-medium hover:shadow-strong">
                  <a href="mailto:patricecunliffe@gmail.com?subject=Website%20build%20interest" aria-label="Send email to Patrice">
                    Send Email
                  </a>
                </Button>
              </div>

              {/* Book a Call Option */}
              <div className="bg-card rounded-xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="mb-4 text-2xl font-normal">Book a Call</h3>
                <p className="text-muted-foreground mb-6 text-base">Book a 20-minute call to see if we're a fit.</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full rounded-full border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background shadow-medium hover:shadow-strong">
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
                  Fill out a quick form and I'll get back to you within 24 hours.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full rounded-full border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background shadow-medium hover:shadow-strong">
                      Open Contact Form
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle className="text-3xl text-center">Contact Me</DialogTitle>
                      <DialogDescription className="text-center">Share a few details and I'll be in touch.</DialogDescription>
                    </DialogHeader>
                    <ContactForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            {/* Main CTA */}
            <div className="bg-card rounded-2xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105">
              <h3 className="mb-4 text-4xl font-normal">
                Get Your Free Quote in 3 Days
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Share your goals and receive a tailored project quote within 3 business days—no obligation.
              </p>
              <div className="w-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="w-full md:w-80 mx-auto rounded-full border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background shadow-medium hover:shadow-strong">
                      Get a Free Quote
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px]">
                    <DialogHeader>
                      <DialogTitle className="text-center font-normal text-3xl">Request a Free Quote</DialogTitle>
                      <DialogDescription className="text-center">Complete the form below and I'll follow up within 3 business days.</DialogDescription>
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