import { 
  Wrench, 
  Zap, 
  PaintBucket, 
  GraduationCap, 
  Car, 
  Home, 
  Scissors, 
  Camera,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Wrench,
    name: "Plumbing",
    description: "Repairs, installations, emergency fixes",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    icon: Zap,
    name: "Electrical",
    description: "Wiring, outlets, lighting installation",
    color: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200",
    iconColor: "text-yellow-600"
  },
  {
    icon: PaintBucket,
    name: "Painting",
    description: "Interior, exterior, residential & commercial",
    color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
    iconColor: "text-purple-600"
  },
  {
    icon: GraduationCap,
    name: "Tutoring",
    description: "Math, science, languages, test prep",
    color: "bg-green-50 hover:bg-green-100 border-green-200",
    iconColor: "text-green-600"
  },
  {
    icon: Car,
    name: "Auto Repair",
    description: "Maintenance, diagnostics, mobile service",
    color: "bg-red-50 hover:bg-red-100 border-red-200",
    iconColor: "text-red-600"
  },
  {
    icon: Home,
    name: "Cleaning",
    description: "House cleaning, deep clean, organizing",
    color: "bg-pink-50 hover:bg-pink-100 border-pink-200",
    iconColor: "text-pink-600"
  },
  {
    icon: Scissors,
    name: "Beauty & Wellness",
    description: "Hair, nails, massage, fitness training",
    color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200",
    iconColor: "text-indigo-600"
  },
  {
    icon: Camera,
    name: "Photography",
    description: "Events, portraits, real estate, product",
    color: "bg-orange-50 hover:bg-orange-100 border-orange-200",
    iconColor: "text-orange-600"
  },
];

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse Popular Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find trusted professionals for all your needs. From home repairs to personal services, 
            we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl border-2 bg-card shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer transform hover:scale-105 ${category.color}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full bg-background mb-4 group-hover:shadow-glow transition-all duration-300`}>
                    <IconComponent className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Categories
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;