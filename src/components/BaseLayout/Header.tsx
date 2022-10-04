import React from "react";
import { DesktopNav, MobileNav } from "../../components";

const Header = () => {
  return (
    <header className="lg:py-16 py-8 px-8 lg:pl-0">
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
