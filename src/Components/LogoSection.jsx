import React from "react";
import { companyLogos } from "../utils/logoLinks";

function LogoSection() {
  return (
    <section className="w-full marquee overflow-hidden bg-neutral-50">
      {/* container */}
      <div className="min-h-[10vh] inline-flex gap-32 items-center justify-center py-3 marquee-content">
        {companyLogos.map((item) => {
          const { id, companyName, logo } = item;

          return (
            <article key={id} className="w-[110px] h-[70px] flex items-center">
              <img
                className="w-full"
                src={logo}
                alt={`${companyName} logo not found!`}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default LogoSection;
