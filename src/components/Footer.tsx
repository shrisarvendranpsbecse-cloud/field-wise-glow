import { Sprout, Github, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-earth-secondary" />
              <span className="text-2xl font-bold">CropAI</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Transforming agriculture through AI-powered crop management 
              and precision farming solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-earth-secondary transition-colors">Home</a></li>
              <li><a href="#problem" className="text-white/80 hover:text-earth-secondary transition-colors">Problem Statement</a></li>
              <li><a href="#impact" className="text-white/80 hover:text-earth-secondary transition-colors">Why It Matters</a></li>
              <li><a href="#data" className="text-white/80 hover:text-earth-secondary transition-colors">Data Sources</a></li>
              <li><a href="#prototype" className="text-white/80 hover:text-earth-secondary transition-colors">Prototype</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Button 
                  variant="link" 
                  className="text-white/80 hover:text-earth-secondary p-0 h-auto font-normal"
                  onClick={() => window.open("#", "_blank")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Problem Statement PDF
                </Button>
              </li>
              <li>
                <Button 
                  variant="link" 
                  className="text-white/80 hover:text-earth-secondary p-0 h-auto font-normal"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repository
                </Button>
              </li>
              <li>
                <Button 
                  variant="link" 
                  className="text-white/80 hover:text-earth-secondary p-0 h-auto font-normal"
                  onClick={() => window.open("#", "_blank")}
                >
                  API Documentation
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>experts@cropai.com</span>
              </div>
              <div className="text-white/80">
                +1 (555) 123-FARM
              </div>
            </div>
            <Button 
              size="sm" 
              className="bg-earth-secondary hover:bg-earth-secondary/90 text-foreground font-semibold"
            >
              Get Recommendations
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 CropAI. All rights reserved. Empowering farmers with AI-driven insights.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;