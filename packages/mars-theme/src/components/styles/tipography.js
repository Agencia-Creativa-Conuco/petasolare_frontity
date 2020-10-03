import {css} from "frontity";
import mq from "../layout/mq";

export const h1 = `
    font-size: 26px;
    ${mq.sm}{
        font-size: 28px;
    }
    ${mq.md}{
        font-size: 30px;
    }
    ${mq.lg}{
        font-size: 35px;
    }
    ${mq.xl}{
        font-size: 45px;
    }
`;

export const h2 = `
    font-size: 22px;
    ${mq.sm}{
        font-size: 24px;
    }
    ${mq.md}{
        font-size: 26px;
    }
    ${mq.lg}{
        font-size: 30px;
    }
    ${mq.xl}{
        font-size: 35px;
    }   
`;

export const h3 = `
    font-size: 20px;
    ${mq.sm}{
        font-size: 20px;
    }
    ${mq.md}{
        font-size: 22px;
    }
    ${mq.lg}{
        font-size: 24px;
    }
    ${mq.xl}{
        font-size: 28px;
    }
`;

export const h4 = `
    font-size: 18px;
    ${mq.sm}{
        font-size: 18px;
    }
    ${mq.md}{
        font-size: 20px;
    }
    ${mq.lg}{
        font-size: 22px;
    }
    ${mq.xl}{
        font-size: 24px;
    }
`;

export const h5 = `
    font-size: 18px;
    ${mq.sm}{
        font-size: 18px;
    }
    ${mq.md}{
        font-size: 18px;
    }
    ${mq.lg}{
        font-size: 18px;
    }
    ${mq.xl}{
        font-size: 18px;
    }
`;

export const h6 = `
    font-size: 16px;
    ${mq.sm}{
        font-size: 16px;
    }
    ${mq.md}{
        font-size: 16px;
    }
    ${mq.lg}{
        font-size: 16px;
    }
    ${mq.xl}{
        font-size: 16px;
    }
`;

const tipography = (colors) => css`
    h1,h2,h3,h4,h5,h6{
        margin-bottom: 1rem;
        margin-top: 2rem;
        color: ${ colors.heading || "blue" };
        text-transform: uppercase;
    }
    h1{
        ${h1}
        font-weight: 900;
    }
    h2{
        ${h2}
    }
    h3{
        ${h3}
    }
    h4{
        ${h4}
    }
    h5{
        ${h5}
    }
    h6{
        ${h6}
    }
    p{
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`;

export default tipography;