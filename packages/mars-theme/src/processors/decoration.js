import {css} from 'frontity';

export const squareReverse = {
    name: "squareReverse",
    priority: 20,
    test: ({node}) =>
        node.type === "element" &&
        node.props?.className?.split(" ").includes("deco-img-square-reverse"),
    processor: ({node,state}) =>{
        // Change color

        node.props.css = css`
            &::before{
                content: "";
                display: inline-block;
                position: absolute;
                width: 15%;
                padding-bottom: 70px;
                transform: translate(550%, -20%);
                background: ${state.theme.colors.blue.dark};
            }
        `;

        // Add a new children
        
        // Substitute ot for a React Component

        
        return node;
    },
};
