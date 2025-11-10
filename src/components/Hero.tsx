import { Button } from "@/components/ui/button";
import { Github, Mail, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Tron-style animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full grid-bg opacity-30"></div>
        <div className="absolute w-[600px] h-[600px] border border-primary/30 rounded-full -top-48 -left-48 animate-glow-pulse"></div>
        <div className="absolute w-[500px] h-[500px] border border-secondary/30 rounded-full -bottom-48 -right-48 animate-glow-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse" style={{top: '20%'}}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50 animate-pulse" style={{top: '60%', animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Digital accent */}
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Zap className="w-6 h-6 text-primary" style={{filter: 'drop-shadow(0 0 8px hsl(186 100% 50%))'}} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in uppercase tracking-wider">
            Hi, I'm <span className="gradient-text">Kashyap Vallur</span>
          </h1>
          
          <div className="relative inline-block mb-8 animate-fade-in-delay">
            <p className="text-xl md:text-2xl text-foreground px-6 py-3 border border-primary/50 bg-primary/5" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
              Data Science Student | Machine Learning Enthusiast | Full-Stack Developer
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-delay-2 leading-relaxed">
            Passionate about leveraging AI and data to solve real-world problems. 
            Currently studying at Purdue University, with experience in ML, data analysis, and full-stack development.
          </p>
          
          <div className="flex gap-4 justify-center animate-fade-in-delay-3">
            <Button size="lg" className="gap-2 glow-border relative overflow-hidden group" asChild>
              <a href="#contact">
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Mail className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Get in Touch</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 glow-border-secondary relative overflow-hidden group" asChild>
              <a href="https://github.com/KashV2" target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Github className="w-4 h-4 relative z-10" />
                <span className="relative z-10">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary flex items-start justify-center p-2 glow-border">
          <div className="w-1 h-3 bg-primary" style={{boxShadow: 'var(--glow-primary)'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
