import React from "react";

function Navbar() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav >
      <ul>
        {Links.map((link) => (
          <li key={link.name}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
