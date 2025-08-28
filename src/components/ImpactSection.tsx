import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplets, TrendingUp, Coins } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Leaf,
      title: "Sustainable Soil Health",
      description: "Precise nutrient management preserves soil fertility and prevents degradation",
      color: "text-fertility",
      bgColor: "bg-fertility/10"
    },
    {
      icon: Droplets,
      title: "Precise Irrigation",
      description: "AI-driven water management reduces waste while ensuring optimal hydration",
      color: "text-tech",
      bgColor: "bg-tech/10"
    },
    {
      icon: TrendingUp,
      title: "Better Yield",
      description: "Data-driven decisions lead to healthier crops and increased productivity",
      color: "text-earth-secondary",
      bgColor: "bg-earth-secondary/10"
    },
    {
      icon: Coins,
      title: "Lower Costs",
      description: "Optimized resource usage significantly reduces operational expenses",
      color: "text-harvest",
      bgColor: "bg-harvest/10"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why It Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered solution transforms traditional farming into precision agriculture, 
            delivering measurable benefits for farmers, the environment, and food security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-card hover:shadow-tech transition-all duration-500 hover:-translate-y-3 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 ${impact.bgColor} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <impact.icon className={`h-10 w-10 ${impact.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-tech p-12 rounded-2xl shadow-tech">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Proven Results
            </h3>
            <p className="text-xl text-white/90">
              Real impact from precision agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2 animate-pulse-slow">85%</div>
              <div className="text-xl font-semibold mb-2">Yield Increase</div>
              <div className="text-white/80">Average improvement in crop production</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2 animate-pulse-slow">40%</div>
              <div className="text-xl font-semibold mb-2">Water Saved</div>
              <div className="text-white/80">Reduction in irrigation requirements</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2 animate-pulse-slow">60%</div>
              <div className="text-xl font-semibold mb-2">Cost Reduction</div>
              <div className="text-white/80">Savings in fertilizer and water costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;