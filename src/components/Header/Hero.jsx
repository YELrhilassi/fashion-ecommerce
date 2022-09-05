import styled from "styled-components";
import colors from "res/colors";
import fonts from "res/fonts";
import images from "res/images";
import { Button } from "./HeaderNav";

export const Section = styled.section`
  height: ${(props) => props.height || "100%"};

  background-color: ${colors.lightSecondary};
`;

export const HeaderCtr = styled.div`
  background-image: url(${images.waves}), url(${images.gradiantRec}),
    url(${images.gradiantRec});
  background-size: contain, 30%, 20%;
  background-position: bottom, top right, bottom left;
  background-repeat: no-repeat;
  height: 100%; ;
`;

export const Hero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 20%;
  width: 80%;
  margin: auto;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 1rem;
  width: 50%;

  h1 {
    font-family: ${fonts.heading};
    font-size: 5vw;
    font-weight: 700;
    line-height: 5vw;
    color: ${colors.darkPrimary};
    max-width: 80%;

    margin-bottom: 2rem;
  }

  p {
    align-self: flex-start;
    font-family: ${fonts.text};
    font-size: 1.4vw;
    font-weight: 400;
    line-height: 2.2vw;
    color: ${colors.darkPrimary};
    max-width: 70%;
    margin-left: 4vw;
    margin-bottom: 2rem;
  }
  Button {
    align-self: flex-start;
    margin-left: 4vw;
    box-shadow: 0 23px 40px -15px ${colors.darkPrimary};
  }
`;

export const HeroImg = styled.div`
  display: flex;
  justify-content: center;

  width: 50%;

  img {
    border-radius: 0 0 0 14vw;
  }
`;

export default function HeaderSection() {
  return (
    <Section height="900px">
      <HeaderCtr>
        <Hero>
          <HeroText>
            <h1>Find the Best Fashion Style for You</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper congue eros, eget tincidunt ipsum eleifend ut.{" "}
            </p>
            <Button primary padding="1.2vw 2.5vw">
              shop now
            </Button>
          </HeroText>
          <HeroImg>
            <img src={images.womanBlazer} alt="" />
          </HeroImg>
        </Hero>
      </HeaderCtr>
    </Section>
  );
}
