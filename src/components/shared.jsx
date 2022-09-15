import colors from "res/colors";
import fonts from "res/fonts";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height || "100%"};
`;

//======== primary button ===============//
export const Button = styled.button`
  cursor: pointer;
  padding: ${(props) => props.padding || "0.6vw 2vw"};
  margin: ${(props) => props.margin};
  font-family: ${fonts.title};
  font-weight: 700;
  font-size: ${(props) =>
    props.txtSize || (props.primary && "1.2vw") || "0.9vw"};
  color: ${(props) =>
    props.txtColor || (props.primary && "white") || colors.darkPrimary};

  line-height: 1rem;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.bgColor || (props.primary && colors.darkPrimary) || "transparent"};

  border: solid 1px ${(props) => props.border || colors.darkPrimary};
  box-shadow: ${({ shadow }) =>
    shadow && `0 23px 40px -15px ${colors.darkPrimary}`};

  transition: all 0.4s;

  &:hover {
    background-color: ${colors.lightPrimary};
    color: white;
  }
`;
//=============================================================//

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

//====================Section styled components=====================//

export const SectionFlex = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.$wrap && "wrap"};

  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};

  top: ${(props) => props.top};
  width: 80%;
  margin: auto;
  margin-top: ${(props) => props.marginTop};
`;

export const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => center && "center"};
  align-items: ${({ center }) => center && "center"};

  width: ${({ width }) => width || "50%"};
`;

export const SectionImg = styled.div`
  display: flex;
  justify-content: center;

  width: ${({ width }) => (width ? width : "")};

  img {
    border-radius: ${({ borderRadius }) => borderRadius || 0};
  }
`;

//========================================//
