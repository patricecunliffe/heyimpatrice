import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    toast
  } = useToast();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate form submission - In real implementation, this would integrate with Supabase
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Let's work together - Website Project Inquiry");
    const body = encodeURIComponent(`Hi Patrice,

I'm interested in working with you on a website project. Here are some details:

Project type: [Please specify - Quick Launch, Growth Package, or Full Stack Solution]
Timeline: [When do you need this completed?]
Budget: [What's your budget range?]
Business/Organization: [Tell me about your business]

Additional details:
[Any specific requirements or questions]

Looking forward to hearing from you!

Best regards,
[Your name]`);
    window.location.href = `mailto:patricecunliffe@gmail.com?subject=${subject}&body=${body}`;
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-secondary py-16 pt-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Let's Work Together
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Ready to transform your online presence? Choose the way that works best for you to get started.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Side - Work With Me */}
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Work With Me
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Ready to get started? Drop me an email with your project details, 
                    and I'll get back to you within 24 hours with a personalized proposal.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-strong border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">
                    What to include in your email:
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Project type (Quick Launch, Growth Package, or Full Stack)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Your timeline and budget range</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Brief description of your business/organization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Any specific requirements or inspiration</span>
                    </li>
                  </ul>
                </div>

                <Button onClick={handleEmailClick} size="lg" className="w-full md:w-auto shadow-strong hover:shadow-intense transition-all transform hover:scale-105 text-lg px-8 py-4">
                  Send Email Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Button>
              </div>

              {/* Right Side - Contact Form */}
              <div className="animate-fade-in">
                <div className="bg-card rounded-2xl p-8 shadow-strong border border-border/50">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  {isSubmitted ? <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    </div> : <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input name="name" value={formData.name} onChange={handleInputChange} className={`shadow-soft ${errors.name ? 'border-destructive' : ''}`} placeholder="Your full name" />
                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`shadow-soft ${errors.email ? 'border-destructive' : ''}`} placeholder="your.email@example.com" />
                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message <span className="text-destructive">*</span>
                        </label>
                        <Textarea name="message" value={formData.message} onChange={handleInputChange} rows={6} className={`shadow-soft ${errors.message ? 'border-destructive' : ''}`} placeholder="Tell me about your project..." />
                        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                      </div>
                      
                      <Button type="submit" disabled={isSubmitting} className="w-full shadow-medium hover:shadow-strong transition-all">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in md:text-5xl">
              Book a 20 Minute Call
            </h2>
            <p className="text-xl text-muted-foreground mb-12 animate-slide-up">
              Prefer to chat? Book a quick call to discuss your project and see if we're a good fit.
            </p>
            
            <div className="bg-card rounded-2xl shadow-strong p-8 animate-fade-in">
              {/* Calendly Widget */}
              <div className="relative w-full h-96 md:h-[600px] rounded-lg overflow-hidden">
                <iframe src="https://kiwi-oatmeal-777.notion.site/23fd5994cd3480b0bcc0cb7be9052fee?pvs=105" width="100%" height="100%" frameBorder="0" title="Schedule a consultation with Patrice" className="border-0"></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No pressure, no sales pitch - just a friendly chat about your goals and how I can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Questionnaire Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in md:text-5xl">Get a Quick Quote Within 3 Days</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">Don't want to email, call, or fill out a form? Get a personalised quote within 3 days via this quick questionnaire.</p>
            
            <div className="bg-card rounded-2xl shadow-strong p-8 animate-fade-in">
              <div className="space-y-6">
                
                <h3 className="text-2xl font-semibold">
                  5-Minute Project Questionnaire
                </h3>
                <p className="text-muted-foreground">Answer a few easy questions about your project, business goals, and style preferences. I'll send you a detailed proposal with pricing within 3 business days.</p>
                
                
                
                <Button size="lg" onClick={() => window.open('https://forms.gle/placeholder-link', '_blank')} className="shadow-strong hover:shadow-intense transition-all transform hover:scale-105 text-lg px-8 py-4">
                  Start Questionnaire
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ContactPage;