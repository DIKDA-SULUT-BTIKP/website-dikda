import React from "react";

const Hero = () => {
  return (
    <>
      {/* xl screen */}
      <div className="hidden min-h-screen xl:block hero">
        <div className="hero-overlay bg-opacity-10"></div>
      </div>
      <div className="hidden xl:block bg-[#cf2300] text-white font-semibold text-right px-8 py-2"></div>

      {/* Tablet screen (md) */}
      <div className="hidden min-h-screen md:block xl:hidden hero-tablet">
        <div className="hero-overlay bg-opacity-10"></div>
      </div>
      <div className="hidden md:block xl:hidden bg-[#cf2300] text-white font-semibold text-right px-8 py-2"></div>

      {/* Mobile screen (md:hidden) */}
      <div className="min-h-screen hero-mobile md:hidden">
        <div className="hero-overlay bg-opacity-10"></div>
      </div>
      <div className="bg-[#cf2300] text-white font-semibold text-right px-8 py-2 md:hidden"></div>
    </>
  );
};

export default Hero;
