import React from "react";
import Navbar from "./Navbar"; //  استيراد الـ Navbar باسمه الصحيح

const Header = () => {
  return (
    <header  >
      <a href="/">logo</a>
      <Navbar /> {/* استدعاء الـ Navbar هنا */}
    </header>
  );
};

export default Header;