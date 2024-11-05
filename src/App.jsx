import React, { lazy, Suspense } from "react";
import {
  About,
  BigNavbar,
  Hero,
  LogoSection,
  Navbar,
  ServiceOverview,
  Stats,
} from "./Components";
import BikeDetails from "./Components/BikeDetails";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#f7f6f3] to-[#e9e8e4]">
      <BigNavbar />
      <Hero />
      <LogoSection />
      {/* <Stats /> */}
      <About />
      <ServiceOverview />
      <BikeDetails />
    </div>
  );
}

export default App;
