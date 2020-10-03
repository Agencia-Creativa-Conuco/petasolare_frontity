import {css} from "frontity";
import mq from "./mq";

const colSize = size => (parseInt(size)>0 && parseInt(size)<=12 ?(100/12*parseInt(size))+"%": `100%`)

const Cols = props => css`
    ${!props.size || props.size == true? `flex-basis: 0;`: ""}
    ${ !props.size || props.size == true? `flex-grow: 1;`: ""}
    ${ props.size == "auto"? `flex: 0 0 ${props.size};` : parseInt(props.size)? `flex: 0 0 ${colSize(props.size)};` : "" }
    max-width: ${ parseInt(props.size) ? colSize(props.size)+";" : '100%;'}
    width: ${ props.size == "auto"? props.size+";" : "100%;"}
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
    ${props.sizeSM ? `
        ${mq.sm}{
            ${props.sizeSM == true? `flex-basis: 0;`: ""}
            ${ props.sizeSM == true? `flex-grow: 1;`: ""}
            ${ props.sizeSM == "auto"? `flex: 0 0 ${props.sizeSM};` : parseInt(props.sizeSM)? `flex: 0 0 ${colSize(props.sizeSM)};` : "" }
            max-width: ${ parseInt(props.sizeSM) ? colSize(props.sizeSM)+";" : '100%;'}
            width: ${ props.sizeSM == "auto"? props.sizeSM+";" : "100%;"}
        }
    `: ""}
    ${props.sizeMD ? `
        ${mq.md}{
            ${props.sizeMD == true? `flex-basis: 0;`: ""}
            ${ props.sizeMD == true? `flex-grow: 1;`: ""}
            ${ props.sizeMD == "auto"? `flex: 0 0 ${props.sizeMD};` : parseInt(props.sizeMD)? `flex: 0 0 ${colSize(props.sizeMD)};` : "" }
            max-width: ${ parseInt(props.sizeMD) ? colSize(props.sizeMD)+";" : '100%;'}
            width: ${ props.sizeMD == "auto"? props.sizeMD+";" : "100%;"}
        }
    `: ""}
    ${props.sizeLG ? `
        ${mq.lg}{
            ${props.sizeLG == true? `flex-basis: 0;`: ""}
            ${ props.sizeLG == true? `flex-grow: 1;`: ""}
            ${ props.sizeLG == "auto"? `flex: 0 0 ${props.sizeLG};` : parseInt(props.sizeLG)? `flex: 0 0 ${colSize(props.sizeLG)};` : "" }
            max-width: ${ parseInt(props.sizeLG) ? colSize(props.sizeLG)+";" : '100%;'}
            width: ${ props.sizeLG == "auto"? props.sizeLG+";" : "100%;"}
        }
    `: ""}
    ${props.sizeXL ? `
        ${mq.xl}{
            ${props.sizeXL == true? `flex-basis: 0;`: ""}
            ${ props.sizeXL == true? `flex-grow: 1;`: ""}
            ${ props.sizeXL == "auto"? `flex: 0 0 ${props.sizeXL};` : parseInt(props.sizeXL)? `flex: 0 0 ${colSize(props.sizeXL)};` : "" }
            max-width: ${ parseInt(props.sizeXL) ? colSize(props.sizeXL)+";" : '100%;'}
            width: ${ props.sizeXL == "auto"? props.sizeXL+";" : "100%;"}
        }
    `: ""}

    ${props.order ? `
        order:${props.order};
    ` : ""}
    ${props.orderSM ? `
        ${mq.sm}{
            order:${props.orderSM};
        }
    ` : ""}
    ${props.orderMD ? `
        ${mq.md}{
            order:${props.orderMD};
        }
    ` : ""}
    ${props.orderLG ? `
        ${mq.lg}{
            order:${props.orderLG};
        }
    ` : ""}
    ${props.orderXL ? `
        ${mq.xl}{
            order:${props.orderXL};
        }
    ` : ""}

    // Gutters
    ${props.noGutters ? `
        padding-left: 0px;
        padding-right: 0px;
    ` : ``}
    ${props.noGuttersSM ? `
        ${mq.sm}{
            padding-left: 0px;
            padding-right: 0px;
        }
    ` : ""}
    ${props.noGuttersMD ? `
        ${mq.md}{
            padding-left: 0px;
            padding-right: 0px;
        }
    ` : ""}
    ${props.noGuttersLG ? `
        ${mq.lg}{
            padding-left: 0px;
            padding-right: 0px;
        }
    ` : ""}
    ${props.noGuttersXL ? `
        ${mq.xl}{
            padding-left: 0px;
            padding-right: 0px;
        }
    ` : ""}

    ${props.gutters ? `
        padding-left: 15px;
        padding-right: 15px;
    ` : ``}
    ${props.guttersSM ? `
        ${mq.sm}{
            padding-left: 15px;
            padding-right: 15px;
        }
    ` : ""}
    ${props.guttersMD ? `
        ${mq.md}{
            padding-left: 15px;
            padding-right: 15px;
        }
    ` : ""}
    ${props.guttersLG ? `
        ${mq.lg}{
            padding-left: 15px;
            padding-right: 15px;
        }
    ` : ""}
    ${props.guttersXL ? `
        ${mq.xl}{
            padding-left: 15px;
            padding-right: 15px;
        }
    ` : ""}

    // Alingment
    ${props.mxAuto ? `
        margin-left: auto;
        margin-right: auto;
    `:""}
    ${props.mxSMAuto ? `
        ${mq.sm}{
            margin-left: auto;
            margin-right: auto;
        }
    `:""}
    ${props.mxMDAuto ? `
        ${mq.md}{
            margin-left: auto;
            margin-right: auto;
        }
    `:""}
    ${props.mxLGAuto ? `
        ${mq.lg}{
            margin-left: auto;
            margin-right: auto;
        }
    `:""}
    ${props.mxXLAuto ? `
        ${mq.xl}{
            margin-left: auto;
            margin-right: auto;
        }
    `:""}

    ${props.mlAuto ? `
        margin: initial;
        margin-left: auto;
    `:""}
    ${props.mlSMAuto ? `
        ${mq.sm}{
            margin: initial;
            margin-left: auto;
        }
    `:""}
    ${props.mlMDAuto ? `
        ${mq.md}{
            margin: initial;
            margin-left: auto;
        }
    `:""}
    ${props.mlLGAuto ? `
        ${mq.lg}{
            margin: initial;
            margin-left: auto;
        }
    `:""}
    ${props.mlXLAuto ? `
        ${mq.xl}{
            margin: initial;
            margin-left: auto;
        }
    `:""}

    ${props.mrAuto ? `
        margin: initial;
        margin-right: auto;
    `:""}
    ${props.mrSMAuto ? `
        ${mq.sm}{
            margin: initial;
            margin-right: auto;
        }
    `:""}
    ${props.mrMDAuto ? `
        ${mq.md}{
            margin: initial;
            margin-right: auto;
        }
    `:""}
    ${props.mrLGAuto ? `
        ${mq.lg}{
            margin: initial;
            margin-right: auto;
        }
    `:""}
    ${props.mrXLAuto ? `
        ${mq.xl}{
            margin: initial;
            margin-right: auto;
        }
    `:""}

    // ${props.hidden ? `
    //     display: none;
    // `:""}
    ${props.hiddenSM ? `
        ${mq.sm}{
            display: none;
        }
    `:""}
    ${props.hiddenMD ? `
        ${mq.md}{
            display: none;
        }
    `:""}
    ${props.hiddenLG ? `
        ${mq.lg}{
            display: none;
        }
    `:""}
    ${props.hiddenXL ? `
        ${mq.xl}{
            display: none;
        }
    `:""}

    ${props.visible ? `
        display: block;
    `:""}
    ${props.visibleSM ? `
        ${mq.sm}{
            display: block;
        }
    `:""}
    ${props.visibleMD ? `
        ${mq.md}{
            display: block;
        }
    `:""}
    ${props.visibleLG ? `
        ${mq.lg}{
            display: block;
        }
    `:""}
    ${props.visibleXL ? `
        ${mq.xl}{
            display: block;
        }
    `:""}

    ${props.alignSelf? `
        align-Self: ${props.alignSelf};
    `: ""}
    ${props.alignSMSelf? `
        ${mq.sm}{
        align-Self: ${props.alignSMSelf};
        }
    `: ""}
    ${props.alignMDSelf? `
        ${mq.md}{
        align-Self: ${props.alignMDSelf};
        }
    `: ""}
    ${props.alignLGSelf? `
        ${mq.lg}{
        align-Self: ${props.alignLGSelf};
        }
    `: ""}
    ${props.alignXLSelf? `
        ${mq.xl}{
        align-Self: ${props.alignXLSelf};
        }
    `: ""}
`;

export default Cols;