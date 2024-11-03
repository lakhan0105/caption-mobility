import React from "react";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

function ServiceOverview() {
  return (
    <section className="max-w-[1280px] h-[calc(100vh-70px)] m-auto ">
      <HowItWorks />
      {/* <Testimonials /> */}
    </section>
  );
}

export default ServiceOverview;
