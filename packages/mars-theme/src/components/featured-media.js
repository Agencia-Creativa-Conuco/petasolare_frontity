import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import {mq} from "./layout";


const FeaturedMedia = ({ 
  state, media, position, className, bgColor,
  height, heightSM, heightMD, heightLG, heightXL,
  size, sizeSM, sizeMD, sizeLG, sizeXL
}) => {
  
  const isCustom = typeof media === "object";

  if(!isCustom){
    media = state.source.attachment[media];
  }
  
  const isSized = height || heightSM || heightMD || heightLG || heightXL || size || sizeSM || sizeMD || sizeLG || sizeXL;
  const isSVG = media && (isCustom && media.full_url.endsWith("svg") || !isCustom && media.source_url.endsWith("svg"));

  const {colors} = state.theme;
  
  if (!media) return null;
  const srcset =
    (!isSVG && media.sizes && isCustom) || !isCustom ? Object.values((isCustom? media.sizes : media.media_details.sizes))
      // Get the url and width of each size.
      .map(item => [(isCustom? item.url:item.source_url), item.width])
      .sort((a,b) => {return a[1] - b[1]})
      // Filter the url with width not null
      .filter(item => item[1])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) : null;

  return (
    <Container {...{height, heightSM, heightMD, heightLG, heightXL, size, sizeSM, sizeMD, sizeLG, sizeXL, position, className, bgColor, colors}}>
      <StyledImage
        alt={(isCustom? media.title : media.title.rendered)}
        src={(isCustom? media.full_url : media.source_url)}
        srcSet={!isSVG? `${srcset}, ${(isCustom? media.full_url : media.source_url)} 1920w`:null}
        position={position}
        isSized={isSized}
      />
    </Container>
  );
};

export default connect(FeaturedMedia);

const Container = styled.div`
${({
  height, heightSM, heightMD, heightLG, heightXL,
  size, sizeSM, sizeMD, sizeLG, sizeXL, bgColor, colors
})=> `
    position: relative;
    ${bgColor? `background-color: ${bgColor};`: `background-color: ${colors.gray.light};`}
    ${size && size != true? `padding-bottom: ${size};`: ""}
    ${mq.sm}{
      ${sizeSM && sizeSM != true? `padding-bottom: ${sizeSM};`: ""}
    }
    ${mq.md}{
      ${sizeMD && sizeMD != true? `padding-bottom: ${sizeMD};`: ""}
    }
    ${mq.lg}{
      ${sizeLG && sizeLG != true? `padding-bottom: ${sizeLG};`: ""}
    }
    ${mq.xl}{
      ${sizeXL && sizeXL != true? `padding-bottom: ${sizeXL};`: ""}
    }
    ${height && height != true? `height: ${height};`: ""}
    ${mq.sm}{
      ${heightSM && heightSM != true? `height: ${heightSM};`: ""}
    }
    ${mq.md}{
      ${heightMD && heightMD != true? `height: ${heightMD};`: ""}
    }
    ${mq.lg}{
      ${heightLG && heightLG != true? `height: ${heightLG};`: ""}
    }
    ${mq.xl}{
      ${heightXL && heightXL != true? `height: ${heightXL};`: ""}
    }
  `}
`;

const StyledImage = styled(Image)`
  ${({isSized, position}) => `
    ${ isSized ? `
      position: absolute;
      left: 0;
      top: 0;
    `: ``}
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${position && position !=true? `object-position: ${position};`: ``}
  `}
`;
