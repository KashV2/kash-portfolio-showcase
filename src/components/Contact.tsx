import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary max-w-xs"></div>
          <h2 className="text-4xl font-bold text-center uppercase tracking-wider">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary max-w-xs"></div>
        </div>
        
        <Card className="max-w-2xl mx-auto p-8 bg-card glow-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-primary/30"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-primary/30"></div>
          
          <p className="text-center text-foreground/80 mb-8 leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just chatting about data science and technology!
          </p>
          
          <div className="space-y-4 relative z-10">
            <a 
              href="mailto:vallur@purdue.edu"
              className="flex items-center gap-4 p-4 bg-muted border border-primary/50 hover:border-primary transition-all hover:shadow-[0_0_15px_hsl(186_100%_50%_/_0.3)] group"
              style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}
            >
              <div className="w-10 h-10 bg-primary/10 border border-primary flex items-center justify-center flex-shrink-0" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)'}}>
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" style={{filter: 'drop-shadow(0 0 4px hsl(186 100% 50%))'}} />
              </div>
              <div>
                <p className="font-medium text-foreground uppercase tracking-wide text-sm">Email</p>
                <p className="text-sm text-muted-foreground">vallur@purdue.edu</p>
              </div>
            </a>

            <a 
              href="https://github.com/KashV2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-muted border border-primary/50 hover:border-primary transition-all hover:shadow-[0_0_15px_hsl(186_100%_50%_/_0.3)] group"
              style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}
            >
              <div className="w-10 h-10 bg-primary/10 border border-primary flex items-center justify-center flex-shrink-0" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)'}}>
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" style={{filter: 'drop-shadow(0 0 4px hsl(186 100% 50%))'}} />
              </div>
              <div>
                <p className="font-medium text-foreground uppercase tracking-wide text-sm">GitHub</p>
                <p className="text-sm text-muted-foreground">github.com/KashV2</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-muted border border-primary/50"
              style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
              <div className="w-10 h-10 bg-primary/10 border border-primary flex items-center justify-center flex-shrink-0" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)'}}>
                <Phone className="w-5 h-5 text-primary" style={{filter: 'drop-shadow(0 0 4px hsl(186 100% 50%))'}} />
              </div>
              <div>
                <p className="font-medium text-foreground uppercase tracking-wide text-sm">Phone</p>
                <p className="text-sm text-muted-foreground">425-209-8230</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted border border-primary/50"
              style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
              <div className="w-10 h-10 bg-primary/10 border border-primary flex items-center justify-center flex-shrink-0" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)'}}>
                <MapPin className="w-5 h-5 text-primary" style={{filter: 'drop-shadow(0 0 4px hsl(186 100% 50%))'}} />
              </div>
              <div>
                <p className="font-medium text-foreground uppercase tracking-wide text-sm">Location</p>
                <p className="text-sm text-muted-foreground">West Lafayette, IN 47906</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center relative z-10">
            <Button size="lg" className="w-full md:w-auto glow-border relative overflow-hidden group" asChild>
              <a href="mailto:vallur@purdue.edu">
                <div className="absolute inset-0 bg-primary/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative z-10 uppercase tracking-wider">Send Message</span>
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
