import { Search, MapPin, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
              <span className="text-sm font-bold text-primary-foreground">LH</span>
            </div>
            <span className="text-xl font-bold text-foreground">LocalHub</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden flex-1 max-w-md mx-8 md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for services..."
                className="pl-10 pr-4 h-10 bg-muted/50 border-0 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Location */}
          <div className="hidden items-center space-x-1 text-sm text-muted-foreground lg:flex">
            <MapPin className="h-4 w-4" />
            <span>New York, NY</span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            <Button variant="ghost" size="sm">
              Browse Services
            </Button>
            <Button variant="ghost" size="sm">
              Become a Provider
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4" />
              Sign In
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;