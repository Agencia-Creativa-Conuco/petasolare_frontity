import {css} from "frontity";

const ctas = ({
    bgColor = "#39B449",
    color = "white",
}) => css`
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: ${bgColor};
    font-weight: bold;
    padding: 1.5rem 4rem;
    font-size: 2rem;
    border-radius: 1rem;
    display: inline-block;
    color: ${color};
    outline: initial;
    border: initial;
    cursor: pointer;
    text-decoration: none;
    &:focus{
        box-shadow: 0 0 0 0.32rem rgba(0,123,255,0.25);
    }
`;

export default ctas;