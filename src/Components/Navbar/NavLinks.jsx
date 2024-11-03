import React from "react";

function NavLinks() {
  const data = [
    { id: 1, linkName: "Home", path: "#" },
    { id: 2, linkName: "Services", path: "#services" },
    { id: 3, linkName: "Pricing", path: "#pricing" },
    { id: 4, linkName: "contact", path: "#contact" },
  ];

  return (
    <ul className="text-lg flex gap-7 capitalize">
      {data?.map((item) => {
        const { id, linkName, path } = item;
        return (
          <li key={id}>
            <a href={path}>{linkName}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
