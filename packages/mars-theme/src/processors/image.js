import React from "react";
import {css, styled} from "frontity";
import Image, { Props as ImageProps } from "../components/image";


const ContentImage = (props) => {
    if (props.width && props.height) {
      return (
        <Container height={props.height} width={props.width}>
          <Image {...props} />
        </Container>
      );
    } else {
      return <Image {...props} height={props.height} width={props.width}/>;
    }
};

const RegularImage = (props) => {
    return <Image {...props} />;
};

const image = {
    name: "image",
    priority: 20,
    test: ({ node }) => node.component === "img",
    processor: ({ node }) => {

        if (node.parent?.component === "noscript") return null;
    
        if (node.props["data-src"]) {
          node.props.src = node.props["data-src"];
        }
    
        if (node.props["data-srcset"]) {
          node.props.srcSet = node.props["data-srcset"];
        }
        
        if (node.parent?.props?.className?.split(" ").includes("wp-block-image")){
            node.component = ContentImage;
        }
        else{
            node.component = RegularImage;
        }
    
        return node;
    },
};

export default image;

const Container = styled.span`
  display: block;
  position: relative;
  padding-bottom: ${({ height, width }) =>
    (parseInt(height, 10) / parseInt(width, 10)) * 100}%;

  noscript > img,
  img {
    position: absolute;
    height: 100%;
  }
`;