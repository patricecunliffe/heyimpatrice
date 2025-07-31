import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled with Supabase integration
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Don't want to email, 
                <br />
                or talk. Get a quote
                <br />
                after filling out form
                <br />
                more in depth form
              </h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">More with me</h3>
                  <p className="text-muted-foreground">Email me</p>
                  <p className="text-muted-foreground">Phone</p>
                </div>
              </div>
              
              <Button className="w-full md:w-auto shadow-strong hover:shadow-intense">
                Form Link (Calendly)
              </Button>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card shadow-strong rounded-lg p-8">
                <div className="mb-6 p-4 bg-muted rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Book a meeting</h3>
                  <p className="text-sm text-muted-foreground">Calendly embedded</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="shadow-soft"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="shadow-soft"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Comment / Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="shadow-soft"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full shadow-medium hover:shadow-strong"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;