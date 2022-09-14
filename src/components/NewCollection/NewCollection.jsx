import React, { useState } from "react";
import styled from "styled-components";
import colors from "res/colors";
import images from "res/images";
import collection from "./collection";
import {
  Button,
  HeadingH1,
  Section,
  SectionFlex,
  Text,
} from "components/shared";

export default function NewCollection() {
  return (
    <SectionNewClt height="900px">
      <NewCltFlex direction="column" top="12%" gap="1rem">
        <HeadingH1 size="4vw">New Collection</HeadingH1>
        <Text size="1.2vw">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros
        </Text>
        <CardList collection={collection} />
        <Button
          primary
          padding="0.9vw 3vw"
          txtSize="0.9vw"
          margin="1vw 0 0"
          shadow
        >
          Check-out More...
        </Button>
      </NewCltFlex>
    </SectionNewClt>
  );
}

//=====================================================//
export function CardList({ collection = [] }) {
  return (
    <SectionFlex gap="1.5rem" marginTop="2rem" $wrap>
      {collection.map((item) => (
        <Card key={item._id} {...item} />
      ))}
    </SectionFlex>
  );
}
//=======================================================//

//=======================================================//
export function Card({ img, title }) {
  const [flip, setflip] = useState(false);

  function flipImg() {
    setflip((prev) => !prev);
  }

  const onMouseEnter = {
    onMouseEnter: flipImg,
    onMouseLeave: flipImg,
  };

  return (
    <CardWrap>
      {flip ? (
        <img src={img.dataAltImage} alt={img.dataAltText} {...onMouseEnter} />
      ) : (
        <img src={img.src} alt={img.alt} {...onMouseEnter} />
      )}

      <Button bgColor="white" shadow>
        {title}
      </Button>
    </CardWrap>
  );
}
//============================================================================//

//======Using grid to ovellay the button on the card =======//
export const CardWrap = styled.div`
  display: grid;

  position: relative;
  max-width: 31%;
  transition: all 600ms;

  img {
    grid-area: 1/2;
  }

  Button {
    grid-area: 1/2;

    max-height: 12%;
    min-width: 90%;
    margin: 120% auto 0;
  }
`;
//============================================================================//

//====================This is just for controling the backround color=============================//
export const SectionNewClt = styled(Section)`
  &::before {
    content: "";
    display: block;
    position: absolute;

    top: -227px;
    left: -348px;
    height: 101%;
    width: 59%;

    background: ${colors.lightSecondary};
    opacity: 0.3;
    filter: blur(100px);
    border-radius: 94%;
  }
`;
//==================================================//

//==========Adding decorative shapes in the backgnd of the flex box==========//
export const NewCltFlex = styled(SectionFlex)`
  padding-bottom: 3rem;
  background-image: url(${images.gradiantRec}), url(${images.dotVec});
  background-position: 95% 92%, 92% 89%;
  background-repeat: no-repeat;
`;
//===========================================================================//
