import {
  HeadingH1,
  Section,
  SectionFlex,
  SectionImg,
  SectionText,
  Text,
} from "components/shared";
import useAnimateOnScroll from "hooks/useAnimateOnScroll";
import useCounter from "hooks/useCounter";
import React, { useRef } from "react";

import images from "res/images";
import styled from "styled-components";
import stats from "./stats";

export default function AboutUs() {
  const targetRef = useRef(0);
  const isVisible = useAnimateOnScroll(targetRef, { threshold: 1 }); //target element to watch + optionts {root, rootMargin, threshold}
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
        <StatCompnt justifyContent="space-between" ref={targetRef}>
          <Stats stats={stats} isVisible={isVisible} />
        </StatCompnt>
      </AboutUsCtr>
    </Section>
  );
}
//===============Img + text section================//
const AboutUsCtr = styled.div`
  display: grid;
  position: relative;
  height: 100%;

  //colapsing the sections to lay stats' div on top
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
//========================================//

//================Stats component=================//
const StatCompnt = styled(SectionFlex)`
  position: relative;
  background-color: white;

  /* width: max-content; */
  max-width: 46vw;
  height: 10vw;
  top: 13vw;
  left: 12vw;
  box-shadow: 0 23px 40px -15px #34251f82;
`;

function Stats({ stats = [], ...rest }) {
  return (
    <>
      {stats.map((item) => (
        <CounterOnFocus key={item.id} {...item} {...rest} />
      ))}
    </>
  );
}

export function CounterOnFocus({ countTo, text = {}, isVisible }) {
  const counter = useCounter(isVisible, countTo); //isVisible = false, end, increment = 100
  return (
    <SectionText center>
      <HeadingH1 size="2.5vw">
        <span>{`${text.before}${counter}${text.after}`}</span>
      </HeadingH1>
      <Text>{text.name}</Text>
    </SectionText>
  );
}
//==============================================//
