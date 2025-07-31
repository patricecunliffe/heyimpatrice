const WorkSection = () => {
  const projects = [
    { title: "Website 1", category: "E-commerce" },
    { title: "Project 2", category: "Portfolio" },
    { title: "Site 3", category: "Business" },
    { title: "Work 4", category: "Creative" },
    { title: "Project 5", category: "Tech" },
    { title: "Website 6", category: "Startup" }
  ];

  return (
    <section id="work" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
            My Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="aspect-square bg-card shadow-medium hover:shadow-strong transition-all duration-300 rounded-lg p-6 flex flex-col justify-between cursor-pointer hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.category}</p>
                </div>
                <div className="w-full h-20 bg-muted rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;