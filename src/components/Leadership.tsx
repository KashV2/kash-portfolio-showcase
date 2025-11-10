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
    <section id="leadership" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Leadership & <span className="gradient-text">Community</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{activity.organization}</p>
                <p className="text-foreground/80 text-sm">{activity.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
