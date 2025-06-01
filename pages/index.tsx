import React from "react";
import HeroSection from "@/components/HeroSection"; // Create this component as per step 6 or inline here
import FilterSection from "@/components/FilterSection"; // Step 8
import ListingSection from "@/components/ListingSection"; // Step 9



const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FilterSection />
      <ListingSection />
    </div>
  );
};

export default HomePage;
