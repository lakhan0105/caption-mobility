import React from "react";
import NavLinks from "./NavLinks";

function BigNavbar() {
  return (
    <header className={`fixed top-2 left-0 right-0 px-5 z-50`}>
      <nav className="h-[60px] flex justify-between px-7 bg-neutral-50 rounded-3xl items-center gap-24 w-[700px] m-auto max-w-[1280px] shadow-lg">
        <h2 className="text-xl">Caption Mobility</h2>
        <NavLinks />
      </nav>
    </header>
  );
}

export default BigNavbar;
