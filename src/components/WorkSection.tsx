import WebsiteScreenshot from './WebsiteScreenshot';
const WorkSection = () => {
  const projects = [{
    title: "Kingdom Purpose",
    description: "A SaaS platform helping people discover their divine calling and purpose through guided assessments and personalized coaching.",
    url: "kingdompurpose.au",
    technologies: ["React", "Node.js", "Supabase", "Stripe"]
  }, {
    title: "Empower Leader",
    description: "Coaching services website optimised for generating leads, resourcing pastors with log ins for current clients for quick access to content.",
    url: "empowerleader.org",
    technologies: ["Next.js", "Shopify", "TailwindCSS"]
  }, {
    title: "inherhands",
    description: "Artist website for managing a portfolio with the ability feature and personally manage ongoing for sale and sold works.",
    url: "strategicpartners.com.au",
    technologies: ["React", "TypeScript", "Framer Motion"]
  }];
  const handleProjectClick = (url: string) => {
    window.open(`https://${url}`, '_blank');
  };
  return <section id="work" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl mb-6 font-normal md:text-6xl">
              My Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real projects that deliver results for businesses ready to make their mark online
            </p>
          </div>
          
          <div className="space-y-20">
            {projects.map((project, index) => <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in`} style={{
            animationDelay: `${index * 0.3}s`
          }}>
                {/* Project Image */}
                <div className="flex-1 relative group cursor-pointer" onClick={() => handleProjectClick(project.url)}>
                  <div className="relative overflow-hidden rounded-2xl shadow-strong hover:shadow-intense transition-all duration-500 transform hover:scale-105">
                    <WebsiteScreenshot 
                      url={project.url}
                      title={project.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      onClick={() => handleProjectClick(project.url)}
                    />
                    {/* Overlay with click hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/90 px-6 py-3 rounded-full">
                        <span className="text-sm font-semibold">View Project →</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Device frame decoration */}
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary/20 rounded-full -z-10"></div>
                  <div className="absolute -top-4 -left-4 w-6 h-6 bg-accent/30 rounded-full -z-10"></div>
                </div>
                
                {/* Project Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl mb-4 text-foreground font-normal md:text-4xl">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 md:text-base">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-sm text-muted-foreground">Visit:</span>
                      <button onClick={() => handleProjectClick(project.url)} className="text-primary hover:text-primary/80 font-medium underline decoration-2 underline-offset-4 transition-colors">
                        {project.url}
                      </button>
                    </div>
                    
                    {/* Technologies */}
                    
                  </div>
                  
                  {/* CTA Button */}
                  
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default WorkSection;