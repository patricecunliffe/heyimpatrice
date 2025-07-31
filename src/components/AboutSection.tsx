const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Patrice.</h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Community wisdom at Pat
                </p>
                <p>
                  Cunliffe - called Prince after
                </p>
                <p>
                  playing his music Eric.
                </p>
                <p className="mt-6">
                  From big dog, creative to
                </p>
                <p>
                  all my spare time - etc
                </p>
              </div>
            </div>
            
            <div className="flex justify-center animate-fade-in">
              <div className="w-64 h-64 rounded-full bg-muted shadow-strong flex items-center justify-center">
                <span className="text-6xl text-muted-foreground">Pat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;