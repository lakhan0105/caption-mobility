import React from "react";
import {
  About,
  BigNavbar,
  Hero,
  Navbar,
  ServiceOverview,
  Stats,
} from "./Components";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#f7f6f3] to-[#e9e8e4]">
      <BigNavbar />
      <Hero />
      <Stats />
      <About />
      <ServiceOverview />
    </div>
  );
}

export default App;
