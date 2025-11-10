import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Users } from "lucide-react";

const experiences = [
  {
    title: "Undergraduate Teaching Assistant",
    company: "The Data Mine – The Delta Faucet Company",
    location: "West Lafayette, IN",
    period: "Aug 2025 - Present",
    description: "Guided a team of 10 students as a Teaching Assistant for The Data Mine – Delta Faucet in applying AI techniques and data formatting methods to identify company leads.",
    icon: Users,
    tags: ["AI", "Leadership", "Data Analysis"]
  },
  {
    title: "Machine Learning Intern",
    company: "LoftxAI",
    location: "Seattle, WA",
    period: "May 2025 – Aug 2025",
    description: "Developed and fine-tuned a chatbot with Ollama Gemma, gaining hands-on experience in applied machine learning and model customization. Queried and managed structured datasets using PostgreSQL.",
    icon: Code,
    tags: ["Machine Learning", "PostgreSQL", "Chatbot Development"]
  },
  {
    title: "Undergraduate Researcher",
    company: "The Data Mine – Corteva Agriscience & Allison Transmission",
    location: "West Lafayette, IN",
    period: "Aug 2024 – May 2024",
    description: "Collaborated with a team of 8 students working for Corteva Agriscience, using Python, AWS Textract, and LLMs like ChatGPT and Ollama APIs to automate data extraction. Part of a GPS analytics team on an Allison Transmission project.",
    icon: Briefcase,
    tags: ["Python", "AWS", "LLMs", "Data Processing"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-secondary max-w-xs"></div>
          <h2 className="text-4xl font-bold text-center uppercase tracking-wider">
            Professional <span className="gradient-text-secondary">Experience</span>
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-secondary max-w-xs"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card key={index} className="p-6 bg-card glow-border-secondary card-hover relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-secondary/30 group-hover:border-secondary/60 transition-colors"></div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/10 border border-secondary flex items-center justify-center" style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)'}}>
                      <Icon className="w-6 h-6 text-secondary" style={{filter: 'drop-shadow(0 0 4px hsl(27 100% 50%))'}} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">{exp.title}</h3>
                      <span className="text-sm text-secondary px-2 py-1 border border-secondary/50" style={{clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'}}>{exp.period}</span>
                    </div>
                    
                    <p className="text-primary font-medium mb-1" style={{textShadow: '0 0 8px hsl(186 100% 50% / 0.3)'}}>{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                    
                    <p className="text-foreground/90 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
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
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
