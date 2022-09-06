import styled from "styled-components";
import colors from "res/colors";
import fonts from "res/fonts";
import images from "res/images";
import {
  Button,
  HeadingH1,
  Section,
  SectionFlex,
  Text,
} from "components/shared";

export default function HeroSection() {
  return (
    <Section height="900px">
      <HeaderCtr>
        <SectionFlex>
          <HeroText>
            <HeadingH1 size="5vw">
              Find the Best Fashion Style for You
            </HeadingH1>
            <Text size="1.4vw">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper congue eros, eget tincidunt ipsum eleifend ut.{" "}
            </Text>
            <Button primary padding="1.2vw 2.5vw">
              shop now
            </Button>
          </HeroText>
          <HeroImg>
            <img src={images.womanBlazer} alt="" />
          </HeroImg>
        </SectionFlex>
      </HeaderCtr>
    </Section>
  );
}

export const HeaderCtr = styled.div`
  background-color: ${colors.lightSecondary};
  background-image: url(${images.waves}), url(${images.gradiantRec}),
    url(${images.gradiantRec});
  background-size: contain, 30%, 20%;
  background-position: bottom, top right, bottom left;
  background-repeat: no-repeat;
  height: 100%;
`;

//================ text section ==================/

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 1rem;
  width: 50%;

  h1 {
    max-width: 80%;

    margin-bottom: 2rem;
  }

  p {
    align-self: flex-start;
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

//===================================//

//================= Image section ============//

export const HeroImg = styled.div`
  display: flex;
  justify-content: center;

  width: 50%;

  img {
    border-radius: 0 0 0 14vw;
  }
`;
