import {css} from "frontity";
import {mq} from "../layout";

const Rows = props => css`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  // Alignment
  ${props.alignCenter? `align-items: center;`: ""}
  ${props.alignSMCenter? `
    ${mq.sm}{
      align-items: center;
    }
  `: ""}
  ${props.alignMDCenter? `
      ${mq.md}{
      align-items: center;
    }
  `: ""}
  ${props.alignLGCenter? `
      ${mq.lg}{
      align-items: center;
    }
  `: ""}
  ${props.alignXLCenter? `
      ${mq.xl}{
      align-items: center;
    }
  `: ""}

  ${props.alignItems? `
    align-items: ${props.alignItems};
  `: ""}
  ${props.alignSMItems? `
    ${mq.sm}{
      align-items: ${props.alignSMItems};
    }
  `: ""}
  ${props.alignMDItems? `
    ${mq.md}{
      align-items: ${props.alignMDItems};
    }
  `: ""}
  ${props.alignLGItems? `
    ${mq.lg}{
      align-items: ${props.alignLGItems};
    }
  `: ""}
  ${props.alignXLItems? `
    ${mq.xl}{
      align-items: ${props.alignXLItems};
    }
  `: ""}

  ${props.alignContent? `
    align-content: ${props.alignContent};
  `: ""}
  ${props.alignSMContent? `
    ${mq.sm}{
      align-content: ${props.alignSMContent};
    }
  `: ""}
  ${props.alignMDContent? `
    ${mq.md}{
      align-content: ${props.alignMDContent};
    }
  `: ""}
  ${props.alignLGContent? `
    ${mq.lg}{
      align-content: ${props.alignLGContent};
    }
  `: ""}
  ${props.alignXLContent? `
    ${mq.xl}{
      align-content: ${props.alignXLContent};
    }
  `: ""}

  ${props.justifyContent? `
    justify-content: ${props.justifyContent};
  `: ""}
  ${props.justifySMContent? `
    ${mq.sm}{
      justify-content: ${props.justifySMContent};
    }
  `: ""}
  ${props.justifyMDContent? `
    ${mq.md}{
      justify-content: ${props.justifyMDContent};
    }
  `: ""}
  ${props.justifyLGContent? `
    ${mq.lg}{
      justify-content: ${props.justifyLGContent};
    }
  `: ""}
  ${props.justifyXLContent? `
    ${mq.xl}{
      justify-content: ${props.justifyXLContent};
    }
  `: ""}
`;

export default Rows;