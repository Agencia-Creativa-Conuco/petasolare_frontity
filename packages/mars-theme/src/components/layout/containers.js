import {css} from "frontity";
import mq from "./mq";

const Containers = props => css`
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  ${!props.fluid && "margin: 0 auto"};
  ${!props.fluid?`
    ${mq.sm}{
      max-width: 540px;
    }
    ${mq.md}{
        max-width: 720px;
    }
    ${mq.lg}{
        max-width: 960px;
    }
    ${mq.xl}{
        max-width: 1140px;
    }
    `:null
  };
  // Adds container top and bottom space
  ${props.spaceS && "margin-top: 2rem; margin-bottom: 2rem;" }
  ${props.spaceM && "margin-top: 4rem; margin-bottom: 4rem;" }
  ${props.spaceX && "margin-top: 6rem; margin-bottom: 6rem;" }
`;

export default Containers;