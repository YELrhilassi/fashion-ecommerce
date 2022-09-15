import {
  HeadingH1,
  Section,
  SectionFlex,
  SectionImg,
  SectionText,
  Text,
} from "components/shared";
import React, { useState } from "react";
import colors from "res/colors";
import images from "res/images";
import styled from "styled-components";

export default function AboutUs() {
  return (
    <Section height="50vw">
      <AboutUsCtr>
        <SectionFlex>
          <AboutUsImg borderRadius="25% 0 0 0 ">
            <img src={images.aboutUsImg} alt="" />
          </AboutUsImg>
          <AboutUsText>
            <HeadingH1 size="3.5vw">Best Fashion Since 2014</HeadingH1>
            <Text size="1.2vw">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem
              ipsum dolor sit amet consectetur adipiscing elit Sed ullamcorper
              congue eros eleifend ut tincidunt ipsum .
            </Text>
          </AboutUsText>
        </SectionFlex>
        <Stats gap="2vw">
          <StatCompnt />
          <StatCompnt />
          <StatCompnt />
        </Stats>
      </AboutUsCtr>
    </Section>
  );
}

const AboutUsCtr = styled.div`
  display: grid;
  position: relative;
  height: 100%;

  //colapsing the sections
  div {
    grid-area: 1/2;
  }
`;

const AboutUsText = styled(SectionText)`
  position: relative;
  bottom: 6vw;
  padding: 0 3vw;

  h1 {
    max-width: 75%;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
  &::before {
    position: absolute;
    content: url(${images.dotVec});
    transform: scale(0.8);
    left: -8vw;
    top: -5vw;
  }
`;

const AboutUsImg = styled(SectionImg)`
  padding: 3vw;
  img {
    width: 30vw;
  }
`;

//=================================//
function StatCompnt({ stats }) {
  const [isFocus, setisFocus] = useState(false);

  return (
    <SectionText center>
      <HeadingH1 size="2.5vw">2014</HeadingH1>
      <Text>FiFash Founded</Text>
    </SectionText>
  );
}

const Stats = styled(SectionFlex)`
  position: relative;
  background-color: white;

  width: max-content;
  width: 46vw;
  height: 10vw;
  top: 13vw;
  left: 12vw;
  box-shadow: 0 23px 40px -15px #34251f82;
`;
