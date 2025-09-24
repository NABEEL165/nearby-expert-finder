import { Search, Users, Calendar, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Compare",
    description: "Find local service providers based on your needs, location, and budget. Compare ratings and reviews.",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Users,
    title: "Connect & Chat",
    description: "Contact providers directly, discuss your project details, and get personalized quotes.",
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: Calendar,
    title: "Book & Schedule",
    description: "Choose your preferred date and time. Secure booking with instant confirmation.",
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: Star,
    title: "Review & Rate",
    description: "After service completion, leave a review to help others in your community make informed decisions.",
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How LocalHub Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting the help you need is simple. Follow these easy steps to connect 
            with trusted local professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative text-center">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 z-0" />
                )}
                
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-4">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${step.color} rounded-2xl mb-6 shadow-card`}>
                    <IconComponent className={`h-8 w-8 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;