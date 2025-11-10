import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        
        <Card className="max-w-2xl mx-auto p-8 bg-card border-border">
          <p className="text-center text-foreground/80 mb-8">
            I'm always open to discussing new opportunities, collaborations, or just chatting about data science and technology!
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:vallur@purdue.edu"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">vallur@purdue.edu</p>
              </div>
            </a>

            <a 
              href="https://github.com/KashV2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <p className="text-sm text-muted-foreground">github.com/KashV2</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">425-209-8230</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">West Lafayette, IN 47906</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <a href="mailto:vallur@purdue.edu">
                Send Message
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
