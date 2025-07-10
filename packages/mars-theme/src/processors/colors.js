import { css } from "frontity";

const Colors = {
    name: "Colors",
    priority: 20,
    test: ({ node }) =>
        node.type === "element",
    processor: ({ node, state }) => {
        // Change color backgrounds

        if (node.props?.className?.split(" ").includes("has-background")) {
            if (node.props?.className?.split(" ").includes("has-ccp-primary-background-color")) node.props.css = css`background: ${state.theme.colors.primary};`;

            else if (node.props?.className?.split(" ").includes("has-ccp-primary-dark-background-color")) node.props.css = css`background: ${state.theme.colors.primary_dark};`;

            else if (node.props?.className?.split(" ").includes("has-ccp-white-background-color")) node.props.css = css`background: ${state.theme.colors.white};`;
        }

        // Text color
        if (node.props?.className?.split(" ").includes("has-text-color")) {
            if (node.props?.className?.split(" ").includes("has-ccp-white-color")) {
                node.props.css = css`color: ${state.theme.colors.white};`;
            }
        }

        return node;
    },
};

export default Colors;