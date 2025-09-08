import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Smartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-accent rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-brand-secondary rounded-full animate-pulse opacity-40 delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-brand-accent rounded-full animate-pulse opacity-80 delay-500" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Company Logo/Name */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-brand-accent to-white bg-clip-text text-transparent animate-pulse">
              WebNexZ Solutions
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full" />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Where Web Tech meets Next Zen Solutions through 
            <span className="text-brand-accent font-semibold"> Innovation</span>
          </p>

          {/* Mission Statement */}
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses by delivering innovative, reliable, and scalable digital solutions 
            that drive growth and success in the digital era.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-semibold px-8 py-3 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-black hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          {/* Services Preview Icons */}
          <div className="flex justify-center items-center gap-8 opacity-80">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Code className="h-8 w-8 text-brand-accent" />
              </div>
              <span className="text-sm mt-2 text-gray-300">Development</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Palette className="h-8 w-8 text-brand-accent" />
              </div>
              <span className="text-sm mt-2 text-gray-300">Design</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Smartphone className="h-8 w-8 text-brand-accent" />
              </div>
              <span className="text-sm mt-2 text-gray-300">Mobile</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-brand-accent to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;