import { HeadingH1, SectionFlex, Text } from "components/shared";
import { Section } from "components/shared";
import React from "react";
import images from "res/images";

export default function NewCollection() {
  return (
    <Section>
      <SectionFlex direction="column" gap="1rem" top="6rem">
        <HeadingH1 size="4vw">New Collection</HeadingH1>
        <Text size="1.2vw">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros
        </Text>
        <SectionFlex gap="1.5rem" top="2rem">
          <Card />
          <Card />
          <Card />
        </SectionFlex>
      </SectionFlex>
    </Section>
  );
}

export function Card() {
  return (
    <div>
      <img src={images.card} alt="" />
    </div>
  );
}
