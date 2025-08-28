import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Satellite, BarChart3, Cloud, Database } from "lucide-react";

const DataSourcesSection = () => {
  const dataSources = [
    {
      icon: Satellite,
      title: "Sentinel-2 Satellite Imagery",
      description: "High-resolution multispectral imagery providing detailed crop monitoring capabilities",
      features: ["10m spatial resolution", "5-day revisit cycle", "13 spectral bands", "Free access via ESA"]
    },
    {
      icon: BarChart3,
      title: "NDVI/NDRE Vegetation Indices",
      description: "Advanced vegetation health metrics for precise crop condition assessment",
      features: ["Normalized vegetation index", "Red-edge measurements", "Chlorophyll content", "Stress detection"]
    },
    {
      icon: Database,
      title: "Soil Fertility Datasets",
      description: "Comprehensive soil composition and nutrient level databases",
      features: ["NPK levels", "pH measurements", "Organic matter content", "Historical fertility trends"]
    },
    {
      icon: Cloud,
      title: "Weather & Yield Data",
      description: "Historical weather patterns and crop yield information for predictive modeling",  
      features: ["Temperature & rainfall", "Humidity levels", "Historical yields", "Climate patterns"]
    }
  ];

  return (
    <section id="data" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Data Sources &amp; APIs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI system leverages multiple high-quality data sources to provide 
            accurate crop analysis and recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataSources.map((source, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <source.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {source.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {source.description}
                </p>
                <ul className="space-y-2">
                  {source.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Integration Note */}
        <div className="mt-16 bg-card p-8 rounded-lg shadow-card">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Real-Time Data Integration
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our platform seamlessly integrates with various APIs and data sources to provide 
              up-to-date information for accurate crop analysis. All data is processed using 
              advanced machine learning algorithms to deliver actionable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSourcesSection;