import React from "react";
import {css, styled} from "frontity";
  
const Container = (props) => {
  return (
    <Wrapper {...{props}}>{props.children[0]}</Wrapper>
  )
}
  
const cta = {
    name: "cta",
    priority: 20,
    test: ({ node }) =>
      node.type === "element" &&
      node.props?.className?.split(" ").includes("hs-cta-wrapper"),
    processor: ({ node }) => {

      node.component = Container;

      return node;
    },
};

export default cta;

const Wrapper = styled.div`
`;