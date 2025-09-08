import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Trophy, Users, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Calendar,
      number: "4+",
      label: "Years of Expertise",
      description: "Delivering quality solutions since 2020",
      gradient: "from-brand-primary to-brand-secondary"
    },
    {
      icon: Trophy,
      number: "30+",
      label: "Successful Projects",
      description: "Completed with excellence and precision",
      gradient: "from-brand-secondary to-brand-accent"
    },
    {
      icon: Users,
      number: "100%",
      label: "Client Satisfaction",
      description: "Happy clients who trust our solutions",
      gradient: "from-brand-accent to-brand-success"
    },
    {
      icon: Star,
      number: "24/7",
      label: "Support Available",
      description: "We're here when you need us most",
      gradient: "from-brand-success to-brand-primary"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-brand-accent/5 rounded-full" />
        <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-brand-secondary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-primary border-brand-primary">
            Our Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Numbers That Speak
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have delivered 30+ projects in website designing, logo designing, web development, 
            and software development over the past 4 years, helping businesses achieve their 
            digital goals with creativity and precision.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-3 border-0 shadow-card overflow-hidden relative"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
                
                <CardContent className="p-8 text-center relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.gradient} p-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
                      {stat.number}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-semibold text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors duration-300">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement Section */}
        <div className="mt-16">
          <Card className="bg-gradient-secondary text-white border-0 shadow-glow overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full" />
            </div>
            
            <CardContent className="p-12 text-center relative">
              <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-3xl font-bold mb-4">Excellence in Every Project</h3>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Our commitment to quality and innovation has helped businesses across various industries 
                achieve their digital transformation goals and establish a strong online presence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;