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
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border card-hover">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                    
                    <p className="text-foreground/90 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/50">
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
