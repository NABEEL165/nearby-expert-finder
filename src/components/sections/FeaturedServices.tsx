import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredServices = [
  {
    id: 1,
    name: "Mike's Plumbing Solutions",
    category: "Plumbing",
    rating: 4.9,
    reviewCount: 127,
    price: "$80-120/hr",
    location: "Manhattan, NY",
    responseTime: "Within 2 hours",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    description: "Emergency repairs, installations, and maintenance for residential and commercial properties.",
    badges: ["Verified", "Emergency Service", "Licensed"]
  },
  {
    id: 2,
    name: "ElectricPro Services",
    category: "Electrical",
    rating: 4.8,
    reviewCount: 89,
    price: "$90-150/hr",
    location: "Brooklyn, NY",
    responseTime: "Same day",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    description: "Certified electricians for wiring, outlets, lighting, and electrical safety inspections.",
    badges: ["Certified", "Insured", "24/7 Available"]
  },
  {
    id: 3,
    name: "Sarah's Math Tutoring",
    category: "Tutoring",
    rating: 5.0,
    reviewCount: 156,
    price: "$40-60/hr",
    location: "Queens, NY",
    responseTime: "Next day",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    description: "Experienced math tutor specializing in algebra, calculus, and test preparation.",
    badges: ["Top Rated", "Background Checked", "PhD"]
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Service Providers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our top-rated professionals who consistently deliver exceptional service 
            to our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {service.category}
                  </Badge>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{service.rating}</span>
                    <span className="text-muted-foreground">({service.reviewCount})</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Service Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{service.location}</span>
                    </div>
                    <span className="font-medium text-foreground">{service.price}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Response time: {service.responseTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="default" size="sm" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Featured Providers
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;