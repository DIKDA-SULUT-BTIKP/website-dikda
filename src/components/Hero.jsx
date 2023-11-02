import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hidden min-h-screen xl:block hero">
        <div className="hero-overlay bg-opacity-10"></div>
      </div>
      <div className="bg-[#cf2300] text-white font-semibold text-right px-8 py-2"></div>
      <div className="min-h-screen md:hero-tablet xl:hidden">
        <div className="hero-overlay bg-opacity-10"></div>
      </div>
      <div className="bg-[#cf2300] text-white font-semibold text-right px-8 py-2"></div>
      <div className="min-h-screen hero-mobile md:hidden">
        <div className="hero-overlay bg-opacity-10"></div>
      </div>
      <div className="bg-[#cf2300] text-white font-semibold text-right px-8 py-2"></div>
    </>
  );
};

export default Hero;
