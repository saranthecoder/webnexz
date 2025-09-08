import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Lightbulb, Rocket } from "lucide-react";

const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full transform translate-x-32" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-accent/10 rounded-full transform -translate-x-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-primary border-brand-primary">
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Our Purpose & Direction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by innovation and excellence, we're committed to transforming businesses 
            through cutting-edge digital solutions.
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 shadow-card overflow-hidden relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
            
            <CardHeader className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Target className="w-full h-full text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
                    Our Mission
                  </CardTitle>
                  <div className="w-12 h-1 bg-brand-accent rounded-full mt-2" />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses by delivering innovative, reliable, and scalable digital solutions 
                that drive growth and success. We believe in creating technology that not only meets 
                current needs but anticipates future challenges.
              </p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full" />
                  <span className="text-sm text-muted-foreground">Innovative Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full" />
                  <span className="text-sm text-muted-foreground">Reliable Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full" />
                  <span className="text-sm text-muted-foreground">Business Growth</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 shadow-card overflow-hidden relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary to-brand-accent opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
            
            <CardHeader className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-secondary to-brand-accent p-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Eye className="w-full h-full text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
                    Our Vision
                  </CardTitle>
                  <div className="w-12 h-1 bg-brand-accent rounded-full mt-2" />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a global leader in web technology, setting new standards for excellence and 
                innovation in the digital era. We envision a future where every business has access 
                to world-class digital solutions.
              </p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                  <span className="text-sm text-muted-foreground">Global Leadership</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                  <span className="text-sm text-muted-foreground">Innovation Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                  <span className="text-sm text-muted-foreground">Digital Excellence</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Innovation */}
          <Card className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-accent to-brand-success p-3">
                <Lightbulb className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly pushing boundaries with creative solutions and cutting-edge technology.
              </p>
            </CardContent>
          </Card>

          {/* Excellence */}
          <Card className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-success to-brand-primary p-3">
                <Rocket className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Delivering superior quality in every project with attention to detail and precision.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;