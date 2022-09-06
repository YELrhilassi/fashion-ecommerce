import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "res/colors";
import fonts from "res/fonts";
import images from "res/images";
import { Button } from "components/shared";

export default function HeaderNav() {
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
    <StyledNav isScrolled={navScroll}>
      <Logo src={images.logo} />
      <HeaderMenu>
        <MenuItem item="Men" />
        <MenuItem item="Women" />
        <MenuItem item="Kids" />
        <MenuItem item="Collection" />
        <MenuItem item="trends" />
      </HeaderMenu>
      <Button>login</Button>
    </StyledNav>
  );
}

// Navigation comp of the header
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 5%;
  position: fixed;

  padding: 3rem 9.5rem 0.7rem;
  max-width: 1440px;

  left: 0;
  right: 0;
  margin: 0 auto;

  background-color: ${(props) => (props.isScrolled ? "white" : "")};

  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 931px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  z-index: 999;
`;

//=======================

// logo Component
export function Logo({ src }) {
  return (
    <LogoDiv>
      <a href="">
        <img src={src} alt="" />
      </a>
    </LogoDiv>
  );
}

const LogoDiv = styled.div`
  min-width: max-content;
`;

// =================

// menu comp
export const HeaderMenu = styled.ul`
  display: flex;
  gap: 3rem;

  margin: auto;
`;
// ==================

// Menu item comp
export function MenuItem({ item }) {
  return (
    <ItemLi>
      <a href="">{item.toUpperCase()}</a>
    </ItemLi>
  );
}
const ItemLi = styled.li`
  display: block;
  font-family: ${fonts.title};
  font-weight: 900;
  letter-spacing: 1px;
  a {
    text-decoration: none;
    color: ${colors.darkPrimary};
  }
`;

// ===============
