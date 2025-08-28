import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import potatoHero from "@/assets/potato-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${potatoHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">AI-Powered Potato Crop</span>
            <span className="block bg-gradient-to-r from-earth-secondary to-harvest bg-clip-text text-transparent">
              Growth Stage &amp; Nutrient
            </span>
            <span className="block">Health Management</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Smarter irrigation. Healthier crops. Higher yields.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-earth-secondary hover:bg-earth-secondary/90 text-foreground font-semibold px-8 py-4 rounded-lg shadow-tech"
            >
              Explore Prototype
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Floating stats */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-earth-secondary">85%</div>
            <div className="text-sm text-gray-300">Yield Improvement</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-earth-secondary">40%</div>
            <div className="text-sm text-gray-300">Water Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-earth-secondary">60%</div>
            <div className="text-sm text-gray-300">Cost Reduction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;