import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-96 flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: `url('https://example.com/hero-bg.jpg')` }}
    >
      <h1 className="text-4xl font-extrabold drop-shadow-lg">Find your favorite place here!</h1>
      <p className="mt-4 text-lg drop-shadow-md">The best prices for over 2 million properties worldwide.</p>
    </section>
  );
};

export default HeroSection;
