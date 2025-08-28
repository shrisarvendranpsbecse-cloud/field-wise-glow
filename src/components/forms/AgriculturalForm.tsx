import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sprout, Clock, Mountain, Leaf, Droplets, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AgriculturalForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    crop: "",
    sowingTime: "",
    soilType: "",
    compost: "",
    irrigation: "",
    fieldSize: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Plan Created Successfully!",
      description: "Your personalized agricultural plan has been generated.",
    });
  };

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Agricultural Planning Form
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized recommendations for your crop management
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-tech">
          <CardHeader className="bg-gradient-tech text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              Create Your Custom Farm Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Crop Selection */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Sprout className="h-5 w-5 text-primary" />
                  <Label htmlFor="crop" className="text-lg font-semibold">
                    🌱 What crop are you growing now?
                  </Label>
                </div>
                <Select value={formData.crop} onValueChange={(value) => setFormData({...formData, crop: value})}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="potato">Potato</SelectItem>
                    <SelectItem value="corn">Corn</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="soybean">Soybean</SelectItem>
                    <SelectItem value="tomato">Tomato</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sowing Time */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <Label htmlFor="sowingTime" className="text-lg font-semibold">
                    ⏰ How many hours or days does it usually take to finish sowing?
                  </Label>
                </div>
                <Input
                  id="sowingTime"
                  placeholder="e.g., 6 hours, 2 days"
                  value={formData.sowingTime}
                  onChange={(e) => setFormData({...formData, sowingTime: e.target.value})}
                />
              </div>

              {/* Soil Type */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mountain className="h-5 w-5 text-primary" />
                  <Label className="text-lg font-semibold">
                    🏔️ Is your soil heavy like clay, loose like sand, or in between (loam)?
                  </Label>
                </div>
                <RadioGroup 
                  value={formData.soilType} 
                  onValueChange={(value) => setFormData({...formData, soilType: value})}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="clay" id="clay" />
                    <Label htmlFor="clay">Clay (heavy soil)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="loam" id="loam" />
                    <Label htmlFor="loam">Loam (balanced soil)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sandy" id="sandy" />
                    <Label htmlFor="sandy">Sandy (loose soil)</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Compost Usage */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <Label className="text-lg font-semibold">
                    🌿 Do you regularly apply compost or manure to your field?
                  </Label>
                </div>
                <RadioGroup 
                  value={formData.compost} 
                  onValueChange={(value) => setFormData({...formData, compost: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="compost-yes" />
                    <Label htmlFor="compost-yes">Yes, I use compost or manure regularly</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="compost-no" />
                    <Label htmlFor="compost-no">No, I don't use organic amendments</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Irrigation Method */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-5 w-5 text-primary" />
                  <Label htmlFor="irrigation" className="text-lg font-semibold">
                    💧 How do you irrigate your field?
                  </Label>
                </div>
                <Select value={formData.irrigation} onValueChange={(value) => setFormData({...formData, irrigation: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose irrigation method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drip">Drip Irrigation</SelectItem>
                    <SelectItem value="sprinkler">Sprinkler System</SelectItem>
                    <SelectItem value="flood">Flood Irrigation</SelectItem>
                    <SelectItem value="furrow">Furrow Irrigation</SelectItem>
                    <SelectItem value="rainfall">Rain-fed Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Field Size */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <Label htmlFor="fieldSize" className="text-lg font-semibold">
                    📏 Field size (in acres)
                  </Label>
                </div>
                <Input
                  id="fieldSize"
                  type="number"
                  placeholder="e.g., 5"
                  value={formData.fieldSize}
                  onChange={(e) => setFormData({...formData, fieldSize: e.target.value})}
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  type="submit"
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 font-semibold py-3"
                >
                  Get My Location &amp; Create Plan
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1 py-3"
                  onClick={() => toast({
                    title: "Expert Contact Requested",
                    description: "Our agricultural experts will contact you within 24 hours.",
                  })}
                >
                  Get in Touch with Our Experts
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AgriculturalForm;