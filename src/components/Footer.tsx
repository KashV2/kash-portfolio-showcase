import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/30 py-8 relative overflow-hidden" style={{boxShadow: '0 -4px 20px hsl(186 100% 50% / 0.1)'}}>
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-wide">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" style={{filter: 'drop-shadow(0 0 4px hsl(186 100% 50%))'}} />
            <span>by <span className="text-primary">Kashyap Vallur</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:vallur@purdue.edu"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
              style={{filter: 'drop-shadow(0 0 0px hsl(186 100% 50%))'}}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px hsl(186 100% 50%))'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px hsl(186 100% 50%))'}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/KashV2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
              style={{filter: 'drop-shadow(0 0 0px hsl(186 100% 50%))'}}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px hsl(186 100% 50%))'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px hsl(186 100% 50%))'}
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            © {new Date().getFullYear()} <span className="text-primary">All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
