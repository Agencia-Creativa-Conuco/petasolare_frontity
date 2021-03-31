import {css, styled} from "frontity";
import {Container, mq} from "@osirispp/frontity-layout";

const container = {
    name: "container",
    priority: 20,
    test: ({ node }) =>
      node.type === "element" &&
      node.props?.className?.split(" ").includes("container"),
    processor: ({ node }) => {
      //Change styles

      // Add a new children
      // node.children.unshift(Logo);
   
      //Substitute it for a React Component
      node.component = ContainerComponent;
   
      return node;
    },
};

export default container;

const ContainerComponent = styled(Container)`
  margin-bottom: 4.8rem;
  margin-top: 4.8rem;
  ${mq.md}{
      margin-bottom: 6rem;
      margin-top: 6rem;
  }
`;