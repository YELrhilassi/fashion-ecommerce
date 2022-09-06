import NewCollection from "components/NewCollection/NewCollection";
import React from "react";
import HeaderNav from "./HeaderNav";
import HeroSection from "./Hero";

export default function Header() {
  return (
    <header>
      <HeaderNav />
      <HeroSection />
      <NewCollection />
    </header>
  );
}
