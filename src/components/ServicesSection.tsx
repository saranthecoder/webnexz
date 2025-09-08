import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Palette, 
  Code, 
  Monitor, 
  GraduationCap, 
  BookOpen,
  Building,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Designing",
      description: "Modern, responsive, and engaging website designs that reflect your brand and captivate your audience.",
      features: ["Responsive Design", "User Experience", "Brand Identity"],
      gradient: "from-brand-primary to-brand-secondary"
    },
    {
      icon: Palette,
      title: "Logo Design",
      description: "Unique and memorable logos that establish a strong brand identity and make you stand out.",
      features: ["Brand Strategy", "Visual Identity", "Creative Concepts"],
      gradient: "from-brand-secondary to-brand-accent"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Robust, scalable, and secure web solutions tailored to your business needs.",
      features: ["Custom Solutions", "Scalable Architecture", "Security"],
      gradient: "from-brand-accent to-brand-success"
    },
    {
      icon: Monitor,
      title: "Software Development",
      description: "Custom software applications that streamline your operations and drive efficiency.",
      features: ["Custom Apps", "Process Automation", "Integration"],
      gradient: "from-brand-success to-brand-primary"
    },
    {
      icon: GraduationCap,
      title: "Student Management",
      description: "Comprehensive student management systems for educational institutions.",
      features: ["Student Records", "Attendance", "Grade Management"],
      gradient: "from-brand-primary to-brand-accent"
    },
    {
      icon: BookOpen,
      title: "Library Management",
      description: "Digital library solutions for efficient book and resource management.",
      features: ["Catalog System", "Issue/Return", "Digital Resources"],
      gradient: "from-brand-secondary to-brand-success"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-secondary border-brand-secondary">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From creative design to robust development, we provide comprehensive digital solutions 
            that help your business thrive in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card overflow-hidden relative"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mr-2 text-brand-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-brand-secondary font-semibold group-hover:underline cursor-pointer">
                      Learn More →
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Management Systems Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-white border-0 shadow-glow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Building className="w-16 h-16 text-brand-accent" />
              </div>
              <CardTitle className="text-2xl font-bold mb-2">
                College Management Systems
              </CardTitle>
              <CardDescription className="text-gray-200 text-lg">
                Complete management solutions for educational institutions including student records, 
                library systems, and administrative tools.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;