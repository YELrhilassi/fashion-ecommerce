import React, { useState, useEffect } from "react";
import { Button, HeaderMenu, HeaderNav, Logo, MenuItem } from "./HeaderNav";
import HeaderSection from "./Hero";
import images from "res/images";

export default function Header() {
  const [navScroll, setNavScroll] = useState(false);

  const changeNav = () => {
    window.scrollY >= 50 ? setNavScroll(true) : setNavScroll(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", changeNav);
  }, []);
  console.log(navScroll);
  return (
    <header>
      <HeaderNav isScrolled={navScroll}>
        <Logo src={images.logo} />

        <HeaderMenu>
          <MenuItem item="Men" />
          <MenuItem item="Women" />
          <MenuItem item="Kids" />
          <MenuItem item="Collection" />
          <MenuItem item="trends" />
        </HeaderMenu>

        <Button>login</Button>
      </HeaderNav>
      <HeaderSection />
    </header>
  );
}
