import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

function BigNavbar() {
  const [whiteScrollbar, setWhiteScrollbar] = useState(false);

  // to check the window height and change the nav bg color
  useEffect(() => {
    return document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        console.log(whiteScrollbar);
        setWhiteScrollbar(true);
      } else {
        setWhiteScrollbar(false);
      }
    });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 px-5 z-50`}
      style={{ background: `${whiteScrollbar ? "white" : "transparent"}` }}
    >
      <nav className="h-[70px] flex items-center gap-24 w-full max-w-[1280px] m-auto">
        <h2 className="text-xl">Caption Mobility</h2>
        <NavLinks />
      </nav>
    </header>
  );
}

export default BigNavbar;
