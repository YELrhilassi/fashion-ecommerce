import colors from "res/colors";
import fonts from "res/fonts";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: ${(props) => props.height || "100%"};
`;

// primary button
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

//======== general text styling ===========//

export const HeadingH1 = styled.h1`
  font-family: ${fonts.heading};
  font-weight: 700;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.size};
  color: ${(props) => props.color || colors.darkPrimary};
`;

export const Text = styled.p`
  font-family: ${fonts.text};
  font-weight: 400;
  font-size: ${(props) => props.size};
  line-height: 2.2vw;
  color: ${(props) => props.color || colors.darkPrimary};
`;
//=========================================//

export const SectionFlex = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: ${(props) => props.gap};
  top: 20%;
  width: 80%;
  margin: auto;
  margin-top: ${(props) => props.top};
`;
