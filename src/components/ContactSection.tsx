import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const ContactSection = () => {
  const navigate = useNavigate();
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Let's work together - Website Project Inquiry");
    window.location.href = `mailto:patricecunliffe@gmail.com?subject=${subject}`;
  };
  return <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 md:text-6xl">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-12 max-w-3xl mx-auto text-xl">
              Let's bring your vision to life with a website that not only looks amazing 
              but converts visitors into customers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Email Option */}
              <div className="bg-card rounded-xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-4">Send an Email</h3>
                <p className="text-muted-foreground mb-6">
                  Drop me a line with your project details and I'll get back to you within 24 hours.
                </p>
                <Button onClick={handleEmailClick} variant="outline" className="w-full shadow-medium hover:shadow-strong">
                  Send Email
                </Button>
              </div>

              {/* Book a Call Option */}
              <div className="bg-card rounded-xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-4">Book a Call</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a 20-minute consultation to discuss your project and see if we're a good fit.
                </p>
                <Button onClick={() => navigate('/contact')} variant="outline" className="w-full shadow-medium hover:shadow-strong">
                  Schedule Call
                </Button>
              </div>

              {/* Contact Page Option */}
              <div className="bg-card rounded-xl p-8 shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out a detailed form or take our quick questionnaire to get a personalized quote.
                </p>
                <Button onClick={() => navigate('/contact')} variant="outline" className="w-full shadow-medium hover:shadow-strong">
                  Contact Form
                </Button>
              </div>
            </div>
            
            {/* Main CTA */}
            <div className="bg-card rounded-2xl p-8 shadow-intense">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Online Presence?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the businesses already winning online with websites that convert. 
                Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate('/contact')} size="lg" className="shadow-strong hover:shadow-intense transition-all transform hover:scale-105">
                  Start Your Project
                </Button>
                <Button onClick={handleEmailClick} variant="outline" size="lg" className="shadow-medium hover:shadow-strong transition-all">
                  Quick Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;