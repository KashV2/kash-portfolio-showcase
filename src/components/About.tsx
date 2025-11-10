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
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary max-w-xs"></div>
          <h2 className="text-4xl font-bold text-center uppercase tracking-wider">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary max-w-xs"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 bg-card glow-border card-hover relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 border border-primary flex items-center justify-center" style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)'}}>
                <GraduationCap className="w-6 h-6 text-primary" style={{filter: 'drop-shadow(0 0 4px hsl(186 100% 50%))'}} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wide">Education</h3>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-foreground">Purdue University</h4>
              <p className="text-muted-foreground">Bachelor of Science in Data Science</p>
              <p className="text-sm text-muted-foreground">Aug 2024 – Dec 2028</p>
              <p className="text-sm text-muted-foreground mt-2">West Lafayette, IN</p>
            </div>
          </Card>

          <Card className="p-6 bg-card glow-border card-hover relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted text-foreground text-sm font-medium border border-primary/50 hover:border-primary transition-all hover:shadow-[0_0_10px_hsl(186_100%_50%_/_0.5)] uppercase tracking-wide"
                  style={{
                    clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
                    animationDelay: `${index * 0.05}s`
                  }}
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
