import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const skills = [
  "Python", "R", "SQL", "Java", "C", "C++",
  "React", "TypeScript", "JavaScript",
  "Machine Learning", "Data Visualization",
  "PostgreSQL", "AWS", "Agile Development"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 bg-card border-border card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-foreground">Purdue University</h4>
              <p className="text-muted-foreground">Bachelor of Science in Data Science</p>
              <p className="text-sm text-muted-foreground">Aug 2024 – Dec 2028</p>
              <p className="text-sm text-muted-foreground mt-2">West Lafayette, IN</p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border card-hover">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
