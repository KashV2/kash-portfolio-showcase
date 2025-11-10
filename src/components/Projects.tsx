import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Swole Leveling",
    description: "A fitness app inspired by Solo Leveling, featuring rep-tracking XP system, body-part exercise diagram, and integrated API-based workout library with GIFs.",
    icon: Dumbbell,
    tags: ["React", "TypeScript", "Ionic Framework", "JavaScript"],
    category: "Hackathon Project"
  },
  {
    title: "AI Data Extraction Pipeline",
    description: "Automated data extraction system using AWS Textract and LLMs to process PDF product labels and safety data sheets for Corteva Agriscience.",
    icon: TrendingUp,
    tags: ["Python", "AWS Textract", "ChatGPT API", "Ollama"],
    category: "Research Project"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary max-w-xs"></div>
          <h2 className="text-4xl font-bold text-center uppercase tracking-wider">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary max-w-xs"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="p-6 bg-card glow-border card-hover group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/30 group-hover:border-primary/60 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/30 group-hover:border-primary/60 transition-colors"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center group-hover:scale-110 transition-transform relative" style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)'}}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <Icon className="w-6 h-6 text-primary relative z-10" style={{filter: 'drop-shadow(0 0 6px hsl(186 100% 50%))'}} />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1 border-secondary text-secondary uppercase tracking-wide text-xs" style={{clipPath: 'polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)'}}>{project.category}</Badge>
                    <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-muted border border-primary/50 hover:border-primary uppercase tracking-wide text-xs"
                      style={{clipPath: 'polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)'}}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
