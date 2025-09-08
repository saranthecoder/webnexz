import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Calendar
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Whitefield, Bengaluru, Karnataka - 560066",
      gradient: "from-brand-primary to-brand-secondary"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 - 8886200010",
      gradient: "from-brand-secondary to-brand-accent"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hr@webnexz.in",
      gradient: "from-brand-accent to-brand-success"
    }
  ];

  const workingHours = [
    { days: "Monday - Saturday", hours: "9:00 AM - 6:00 PM" },
    { days: "Sunday", hours: "10:00 AM - 2:00 PM" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-brand-primary to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-accent/10 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-secondary/10 rounded-full" />
        <div className="absolute top-3/4 right-1/3 w-32 h-32 bg-brand-accent/20 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent bg-brand-accent/10">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-brand-accent to-white bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-accent">Let's Connect</h3>
              <p className="text-gray-300 text-lg mb-8">
                We're here to help you achieve your digital goals. Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-accent mb-1">{info.title}</h4>
                          <p className="text-gray-300">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Working Hours */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-brand-accent">
                  <Clock className="w-6 h-6" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-gray-300">{schedule.days}</span>
                    <span className="text-brand-accent font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-secondary border-0 shadow-glow overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 border border-white/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-32 h-32 border border-white/10 rounded-full" />
              </div>
              
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-center">
                  Ready to Start Your Project?
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center relative">
                <p className="text-gray-200 mb-8 text-lg">
                  Let's discuss your requirements and create something amazing together.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-semibold py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-white/30 text-white hover:bg-white/10 py-4 rounded-full transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Meeting
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <Send className="w-12 h-12 mx-auto mb-4 text-brand-accent" />
                <h3 className="text-xl font-bold mb-4 text-brand-accent">Quick Response</h3>
                <p className="text-gray-300 mb-6">
                  Need immediate assistance? We typically respond to inquiries within 2-4 hours during business hours.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <span>Email Response: 2-4 hours</span>
                  <span>•</span>
                  <span>Phone: Immediate</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary border-0 shadow-glow">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4 text-brand-accent">
                Transform Your Digital Presence Today
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join 30+ satisfied clients who have transformed their businesses with our innovative solutions.
              </p>
              <Button 
                size="lg" 
                className="bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-semibold px-12 py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
              >
                Get Your Free Consultation
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;