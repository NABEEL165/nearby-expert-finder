import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCategories from "@/components/sections/ServiceCategories";
import FeaturedServices from "@/components/sections/FeaturedServices";
import HowItWorks from "@/components/sections/HowItWorks";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
        <FeaturedServices />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
