const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
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
                  I'm <span className="font-semibold text-foreground">Pat Cunliffe</span>, known around here as Patrice (thanks, FIFA). Pastor by day, creative every other waking moment.
                </p>
                
                <p>
                  I lead a small but mighty family that's passionate about helping others win - in business, in their ventures, and in their areas of ministry.
                </p>
                
                <p className="text-xl font-medium text-foreground">
                  Let's build something amazing together.
                </p>
              </div>
              
              {/* Professional credentials or quick stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Right-aligned profile image */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <img
                  src="/lovable-uploads/be74fedd-28c8-4019-a7fb-1f8f65eb9a1a.png"
                  alt="Pat Cunliffe - Patrice"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-strong hover:shadow-intense transition-all duration-300 transform hover:scale-105"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;