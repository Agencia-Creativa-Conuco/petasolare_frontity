import React from "react";
import {styled, connect} from "frontity";
import {mq} from "../layout";

const Section = ({state, children, className, as, thin, small, medium, large, spaceTopNone, spaceTopNoneMD, spaceBottomNone, spaceNone}) => {

  return (
    <SectionComponent {...{className, as, thin, small, medium, large, spaceTopNone, spaceTopNoneMD, spaceBottomNone, spaceNone}}>{children}</SectionComponent>
  );
}

export default connect(Section);

const SectionComponent = styled.section`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
  ${({thin, small, medium, large, spaceTopNone, spaceTopNoneMD, spaceBottomNone, spaceNone}) => `
    ${thin? `
      margin-bottom: 3.2rem;
      margin-top: 3.2rem;
      ${mq.md}{
          margin-bottom: 6.4rem;
          margin-top: 6.4rem;
      }`:""}
    ${small? `
      margin-bottom: 4.8rem;
      margin-top: 4.8rem;
      ${mq.md}{
          margin-bottom: 9.6rem;
          margin-top: 9.6rem;
      }`:""}
    ${medium || (!thin && !small && !large)? `
      margin-bottom: 6.4rem;
      margin-top: 6.4rem;
      ${mq.md}{
          margin-bottom: 12.8rem;
          margin-top: 12.8rem;
      }`:""}
    ${large? `
      margin-bottom: 8rem;
      margin-top: 8rem;
      ${mq.md}{
          margin-bottom: 16rem;
          margin-top: 16rem;
      }`:""}
    
    ${spaceTopNone? `
      ${mq.xs}{
        margin-top: initial;
      }
    `:""}

    ${spaceTopNoneMD? `
      ${mq.md}{
        margin-top: initial;
      }
    `:""}

    ${spaceBottomNone? `
      ${mq.xs}{
        margin-bottom: initial;
      }
    `:""}

    ${spaceNone? `
      ${mq.xs}{
        margin: initial;
      }
    `:""}
  `}
`;