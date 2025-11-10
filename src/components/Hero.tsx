import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="gradient-text">Kashyap Vallur</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-delay">
            Data Science Student | Machine Learning Enthusiast | Full-Stack Developer
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about leveraging AI and data to solve real-world problems. 
            Currently studying at Purdue University, with experience in ML, data analysis, and full-stack development.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-delay-3">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://github.com/KashV2" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
