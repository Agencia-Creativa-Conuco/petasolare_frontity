import { connect, styled } from "frontity";
import React from "react";
import Cover from "./service-cover";
import Content from "./service-content";
import Info from "./service-info";
import Services from "./service-related";
import Form  from "./service-form";
import Images from "./service-images";
import Video from "./service-video";

const Service = ({state, actions, libraries}) => {

    return (
        <Article>
            <Cover />
            <Info />
            <Services />
            <Video />
            <Content />
            <Images />
            <Form />
        </Article>
    )
}

export default connect(Service);

const Article = styled.article``;