const AboutSection = () => {
  return <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left-aligned content */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                About Patrice
              </h2>
              
              <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
                <p>
I’m a pastor by day and a creative problem-solver the rest of the time, with a passion for building digital experiences that actually work. When I’m not leading our community in worship, you’ll find me crafting websites that turn curious visitors into loyal customers and transform bold ideas into thriving online ventures.                </p>
                
                <p>
I believe every business deserves a website that works as hard as they do. That’s why I specialize in creating clean, conversion-focused designs that cut through the digital noise and get straight to the point. No unnecessary bells and whistles – just smart, strategic web solutions that help people connect with their audience and grow their impact.                </p>
                <p>
              I lead a small but mighty family that’s passionate about one thing: helping others win. Whether you’re launching a ministry, growing a business, or bringing a creative venture to life, we’re here to build the digital foundation that supports your biggest dreams.  
              </p>
                <p className="text-xl font-medium text-foreground">
                  Let's build something amazing together.
                </p>
              </div>
              
              {/* Professional credentials or quick stats */}
              
            </div>
            
            {/* Right-aligned profile image */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <img src="https://raw.githubusercontent.com/patricecunliffe/spirit-gift-navigator/947c2216f7b08e2f5e19bfa3888cbb0bfb0a8480/Patrice2.png" alt="Pat Cunliffe - Patrice" className="w-[30rem] h-[30rem] lg:w-[35rem] lg:h-[35rem] object-cover rounded-full shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105 grayscale" />
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;