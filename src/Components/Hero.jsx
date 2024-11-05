import React, { useEffect, useState } from "react";
// import bgImg from "../assets/ather-energy-ZjOQIFXq5Ns-unsplash.jpg";

function Hero() {
  const [heroBgImg, setHeroBgImg] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/src/assets/ather-energy-ZjOQIFXq5Ns-unsplash.jpg";
    img.onload = () => setHeroBgImg(img.src);
    console.log(img.src);
  }, []);

  return (
    <section
      className={`relative h-[calc(88vh)] m-auto mt-[0px] overflow-hidden bg-cover bg-right bg-no-repeat`}
      style={{
        backgroundImage: heroBgImg ? `url(${heroBgImg})` : "none",
      }}
    >
      <div className="max-w-[1280px] m-auto h-full flex justify-between items-start gap-2 ">
        {/* left */}
        <div className="left w-[55%] p-10 py-14 rounded-xl shadow-xl backdrop-blur-md translate-y-[25%] bg-gradient-to-r from-[#f7f6f3] to-[#f9e8e4]">
          {/* hero heading */}
          <div>
            <h2 className="text-6xl leading-tight">
              <span className="text-6xl text-lime-500 font-semibold">
                Electric
              </span>{" "}
              <span className="text-[#4a4a4a] font-semibold">
                bikes for delivery use!
              </span>
            </h2>
            {/* <h3 className="ml-1 mt-4 text-xl font-semibold italic text-[#4a4a4a]/90 tracking-wide">
              Perfect for Delivery executives in Bengaluru!
            </h3> */}
          </div>

          {/* hero info */}
          <p className="mt-5 max-w-[95%] px-1 text-lg mt-2 text-[#4a4a49]/95 tracking-wide">
            Increase your earnings, get around faster, and save on fuel & money.
            The ideal electric bike choice for delivery drivers in Bengaluru!
          </p>

          {/* CTA */}
          <div className="rounded bg-lime-500 bg-[#b3e6a1] inline-block px-3 py-2 ml-2 mt-7 shadow">
            <p className="text-md font-medium">need help? call us!</p>
            <a href="tel:" className="text-2xl font-semibold hover:underline">
              +91 9785642354
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
