import { connect, styled } from "frontity";
import React from "react";
import Cover from "./service-cover";
import Content from "./service-content";
import Info from "./service-info";

const Service = ({state, actions, libraries}) => {

    return (
        <Article>
            <Cover />
            <Info />
            <Content />
        </Article>
    )
}

export default connect(Service);

const Article = styled.article``;