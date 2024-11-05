import React, { Suspense, useEffect } from "react";
const AboutImgs = React.lazy(() => import("./AboutImgs"));

function About() {
  return (
    <section className="w-full min-h-[90vh] grid items-center pt-32 bg-gradient-to-r from-[#f7f6f3] to-[#e9e8e4]">
      <div className="max-w-[1280px] m-auto flex items-start justify-start gap-16">
        {/* left */}
        <div className="w-[45%]">
          <h2 className="text-4xl font-semibold">About us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ipsum
            non minima enim praesentium facilis, recusandae quos laborum cum
            quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Velit, est distinctio adipisci tenetur fuga saepe nisi dolorem odio
          </p>
        </div>

        {/* right */}
        <Suspense fallback={<div className="bg-white">Loading...</div>}>
          <AboutImgs />
        </Suspense>
      </div>
    </section>
  );
}

export default About;
