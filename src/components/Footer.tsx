import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const services = [
    "Website Design",
    "Logo Design", 
    "Web Development",
    "Software Development",
    "Management Systems"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-primary via-gray-900 to-brand-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full transform translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full transform -translate-x-40 translate-y-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  WebNex<span className="text-brand-accent">Z</span> Solutions
                </h3>
                <div className="w-16 h-1 bg-brand-accent rounded-full mb-4" />
                <p className="text-gray-300 leading-relaxed">
                  Where Web Tech meets Next Zen Solutions through Innovation. 
                  Empowering businesses with cutting-edge digital solutions.
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-3 text-brand-accent">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-10 h-10 p-0 border-white/20 text-black hover:bg-brand-accent hover:border-brand-accent hover:text-brand-primary transition-all duration-300"
                        asChild
                      >
                        <a href={social.href} aria-label={social.label}>
                          <IconComponent className="w-4 h-4" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-brand-accent">Our Services</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a 
                        href="#services" 
                        className="text-gray-300 hover:text-brand-accent transition-colors duration-300 flex items-center group"
                      >
                        <div className="w-1 h-1 bg-brand-accent rounded-full mr-3 group-hover:w-2 transition-all duration-300" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-brand-accent">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-brand-accent transition-colors duration-300 flex items-center group"
                      >
                        <div className="w-1 h-1 bg-brand-accent rounded-full mr-3 group-hover:w-2 transition-all duration-300" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-brand-accent">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm">
                        Whitefield, Bengaluru,<br />
                        Karnataka - 560066
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <a 
                      href="tel:+918886200010" 
                      className="text-gray-300 hover:text-brand-accent transition-colors duration-300 text-sm"
                    >
                      +91 - 8886200010
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <a 
                      href="mailto:hr@webnexz.in" 
                      className="text-gray-300 hover:text-brand-accent transition-colors duration-300 text-sm"
                    >
                      hr@webnexz.in
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                    <div className="text-sm text-gray-300">
                      <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p>Sun: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 WebNexZ Solutions. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Made with ❤️ in Bengaluru</span>
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-black hover:bg-brand-accent hover:border-brand-accent hover:text-brand-primary transition-all duration-300"
                onClick={scrollToTop}
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;