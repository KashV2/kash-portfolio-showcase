import { Card } from "@/components/ui/card";
import { Award, Heart, Users } from "lucide-react";

const activities = [
  {
    title: "Treasurer",
    organization: "Purdue Indy Quantitative Economics Club",
    description: "Organized events and supported members in applying quantitative methods to real-world economic problems along with managing budget.",
    icon: Users
  },
  {
    title: "FRC Robotics Team 2412 Leadership",
    organization: "FIRST Robotics",
    description: "Managed over 14 students in producing FRC World Championship qualifying Impact Award videos 2 years in a row.",
    icon: Award
  },
  {
    title: "Community Service",
    organization: "Various Organizations",
    description: "Over 80 hours in volunteer work at Pacific Northwest FIRST Robotics competitions as Field Reset, Event Photographer & Queuer Volunteer. Camp Eyabsut (Burns Camp) — Counselor-in-Training & Volunteer.",
    icon: Heart
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-secondary max-w-xs"></div>
          <h2 className="text-4xl font-bold text-center uppercase tracking-wider">
            Leadership & <span className="gradient-text-secondary">Community</span>
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-secondary max-w-xs"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card key={index} className="p-6 bg-card glow-border-secondary card-hover relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-secondary/30 group-hover:border-secondary/60 transition-colors"></div>
                <div className="w-12 h-12 bg-secondary/10 border border-secondary flex items-center justify-center mb-4" style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)'}}>
                  <Icon className="w-6 h-6 text-secondary" style={{filter: 'drop-shadow(0 0 4px hsl(27 100% 50%))'}} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 uppercase tracking-wide">{activity.title}</h3>
                <p className="text-sm text-secondary font-medium mb-3" style={{textShadow: '0 0 8px hsl(27 100% 50% / 0.3)'}}>{activity.organization}</p>
                <p className="text-foreground/80 text-sm leading-relaxed">{activity.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
