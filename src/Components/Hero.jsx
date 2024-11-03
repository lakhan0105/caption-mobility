import React from "react";

function Hero() {
  return (
    <section className="relative h-[calc(100vh)] m-auto bg-gradient-to-r from-[#f7fef6] to-[#e8f5e9 ] pt-20 overflow-hidden">
      {/* slanted geometry shape */}
      <div
        className="absolute top-0 left-[40%] right-0 h-full bg-[#d7f4dd] z-0"
        style={{
          clipPath: "polygon(35% 0, 100% 0%, 100% 100%, 0 100%)", // Adjusts the slant
        }}
      />

      <div className="max-w-[1280px] m-auto h-full flex justify-between gap-2 items-center translate-y-[-8%]">
        {/* left */}
        <div className="left">
          {/* hero heading */}
          <div>
            <h2 className="text-6xl">
              <span className="text-6xl text-lime-500 font-semibold">
                Electric
              </span>{" "}
              <span className="text-[#4a4a4a] font-semibold">Bike Rentals</span>
            </h2>
            <h3 className="text-[55px] text-[#4a4a4a]">In Bengaluru!</h3>
          </div>

          {/* hero info */}
          <p className="text max-w-[60%] px-1 text-lg mt-2 text-[#4a4a49]/95 tracking-wide">
            Navigate Bengaluru effortlessly. Perfect for commutes, deliveries,
            or exploring, our reliable eco-friendly rides come at minimal cost.
          </p>

          {/* CTA */}
          <div className="rounded bg-lime-500/20 bg-[#b3e6a1] inline-block px-3 py-2 ml-2 mt-7 shadow">
            <p className="text-md font-medium">need help? call us!</p>
            <a href="tel:" className="text-2xl font-semibold hover:underline">
              +91 9785642354
            </a>
          </div>
        </div>

        {/* right */}
        <div className="min-w-[490px] max-w-[500px] h-[350px] border bg-gray-200 rounded-md mt-2">
          <h2>photo</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
