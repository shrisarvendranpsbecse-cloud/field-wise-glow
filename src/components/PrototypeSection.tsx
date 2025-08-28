import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Upload, Eye, Zap } from "lucide-react";

const PrototypeSection = () => {
  const goals = [
    {
      step: "01",
      title: "Process Sample Potato Field Images",
      description: "Upload and analyze high-resolution satellite or drone imagery of potato fields",
      icon: Upload,
      status: "completed"
    },
    {
      step: "02", 
      title: "Classify Fields into Growth Stages",
      description: "Automatically identify and categorize crops into 3+ distinct growth phases",
      icon: Eye,
      status: "in-progress"
    },
    {
      step: "03",
      title: "Highlight Low-Fertility Zones",
      description: "Use NDVI analysis to pinpoint areas requiring nutrient supplementation",
      icon: Zap,
      status: "planned"
    }
  ];

  return (
    <section id="prototype" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Prototype Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our development roadmap focuses on delivering key functionality 
            that provides immediate value to farmers.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {goals.map((goal, index) => (
            <div key={index} className="flex items-start mb-12 last:mb-0">
              <div className="flex-shrink-0 mr-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg border-2 
                  ${goal.status === 'completed' 
                    ? 'bg-fertility text-white border-fertility' 
                    : goal.status === 'in-progress'
                    ? 'bg-warning text-white border-warning'
                    : 'bg-muted text-muted-foreground border-border'
                  }`}>
                  {goal.status === 'completed' ? <CheckCircle className="h-8 w-8" /> : goal.step}
                </div>
              </div>
              
              <Card className="flex-1 shadow-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <goal.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl font-semibold text-card-foreground">
                      {goal.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Interactive Demo Placeholder */}
        <div className="bg-gradient-tech p-12 rounded-2xl shadow-tech">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interactive Demo
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Experience our AI-powered crop analysis in action
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-full h-64 bg-white/5 rounded-lg border-2 border-dashed border-white/30 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Upload className="h-12 w-12 text-white/60 mx-auto mb-4" />
                      <p className="text-white/80 text-lg">Upload Satellite Image</p>
                      <p className="text-white/60 text-sm">Drag and drop or click to select</p>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 font-semibold"
                  >
                    Analyze Field
                  </Button>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 text-white">
                  <h4 className="text-lg font-semibold mb-3">Sample Output:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Growth Stage:</span>
                      <span className="font-medium text-earth-secondary">Vegetative</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nitrogen Level:</span>
                      <span className="font-medium text-warning">Low</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recommendation:</span>
                      <span className="font-medium text-fertility">Apply Urea (150 kg/ha)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;