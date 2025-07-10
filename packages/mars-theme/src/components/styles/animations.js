import {styled, keyframes} from "frontity";

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const slideDown = keyframes`
    from{
        transform: translateY(-100px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;