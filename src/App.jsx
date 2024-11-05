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

function App() {
  return (
    <div className="bg-gradient-to-r from-[#f7f6f3] to-[#e9e8e4]">
      <BigNavbar />
      <Hero />
      <LogoSection />
      {/* <Stats /> */}
      <About />
      <ServiceOverview />
    </div>
  );
}

export default App;
