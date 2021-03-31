import {styled} from "frontity";
import {Containers, mq} from "../components/layout";
import Calculadora from "../components/calculadora"

const container = {
    name: "imc",
    priority: 20,
    test: ({ node }) =>
      node.type === "element" &&
      node.props?.id==="imc",
    processor: ({ node }) => {
      //Change styles
      node.props.css = Containers;

      // Add a new children
      // node.children.unshift(Logo);
  
      //Substitute it for a React Component
      node.component = Calculadora;
  
      return node;
    },
};

export default container;

const Container = styled.div`
  ${Containers}
  margin-bottom: 4.8rem;
  margin-top: 4.8rem;
  ${mq.md}{
      margin-bottom: 9.6rem;
      margin-top: 9.6rem;
  }
`;