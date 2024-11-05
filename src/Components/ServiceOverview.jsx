import React from "react";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

function ServiceOverview() {
  return (
    <section className="min-h-[calc(100vh-70px)] m-auto pb-16 bg-gradient-to-r from-[#e4e6e9] to-[#d8dbde]">
      <div className="max-w-[1280px] m-auto">
        <Testimonials />
        {/* <HowItWorks /> */}
      </div>
    </section>
  );
}

export default ServiceOverview;
