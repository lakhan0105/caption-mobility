import React from "react";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

function ServiceOverview() {
  return (
    <section className="max-w-[1280px] min-h-[calc(100vh-70px)] m-auto pb-16">
      <Testimonials />
      <HowItWorks />
    </section>
  );
}

export default ServiceOverview;
