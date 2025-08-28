import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, DollarSign, Droplets } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Reduced Yields",
      description: "Poor timing of irrigation and fertilization can reduce crop yield by up to 50%"
    },
    {
      icon: DollarSign,
      title: "Higher Costs",
      description: "Inefficient resource usage leads to increased operational costs and wasted inputs"
    },
    {
      icon: Droplets,
      title: "Water Waste",
      description: "Over-irrigation damages crops and depletes precious water resources"
    },
    {
      icon: AlertTriangle,
      title: "Soil Degradation",
      description: "Improper fertilization harms soil health and long-term sustainability"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Challenge Farmers Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Incorrect timing of irrigation and fertilization drastically reduces yield, 
            increases costs, and harms soil. Traditional farming methods lack the precision 
            needed for optimal crop management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-destructive/10 rounded-full">
                    <problem.icon className="h-8 w-8 text-destructive" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-lg shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Our AI Solution Changes Everything
            </h3>
            <p className="text-lg text-muted-foreground">
              By combining satellite imagery, vegetation indices, and machine learning, 
              we provide farmers with precise, data-driven insights for optimal crop management 
              at every growth stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;