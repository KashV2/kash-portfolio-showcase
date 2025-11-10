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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border card-hover group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">{project.category}</Badge>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50">
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
