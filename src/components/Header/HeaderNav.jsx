import React from "react";
import colors from "res/colors";
import fonts from "res/fonts";
import styled from "styled-components";

// Navigation comp of the header
export const HeaderNav = styled.nav`
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
const LogoDiv = styled.div`
  min-width: max-content;
`;

export function Logo({ src }) {
  return (
    <LogoDiv>
      <a href="">
        <img src={src} alt="" />
      </a>
    </LogoDiv>
  );
}
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

// prymary button
export const Button = styled.button`
  cursor: pointer;
  padding: ${(props) => props.padding || "0.6vw 2vw"};

  font-family: ${fonts.title};
  font-weight: 700;
  font-size: ${(props) => (props.primary && "1.2vw") || "0.9rem"};
  color: ${(props) => (props.primary && "white") || colors.darkPrimary};

  line-height: 1rem;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.bgColor || (props.primary && colors.darkPrimary) || "transparent"};

  border: solid 1px ${(props) => props.border || colors.darkPrimary};

  transition: all 0.4s;

  &:hover {
    background-color: ${colors.lightPrimary};
    color: white;
  }
`;
