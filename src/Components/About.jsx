import React from "react";
import bgImg from "../assets/ather-energy-XjR7GuPcO2o-unsplash.jpg";

function About() {
  return (
    <section className="w-full min-h-[80vh] grid items-center pt-32 ">
      <div className="max-w-[1280px] m-auto flex items-start justify-start gap-14">
        {/* left */}
        <div className="w-[45%]">
          <h2 className="text-4xl font-semibold">About us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ipsum
            non minima enim praesentium facilis, recusandae quos laborum cum
            quasi.
          </p>
        </div>

        {/* right */}
        <div className="w-[45%] relative">
          <div className="w-[600px] h-[300px] rounded-xl overflow-hidden shadow-xl">
            <img
              className="w-full h-full object-cover overflow-hidden"
              src={bgImg}
              alt="ather img not found"
            />

            <img
              className="absolute top-[-30%] left-[68%] w-[250px] h-[250px] rounded-xl object-cover overflow-hidden shadow-lg"
              src={
                "https://images.unsplash.com/photo-1623079400394-f07956928c3f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="ather img not found"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
