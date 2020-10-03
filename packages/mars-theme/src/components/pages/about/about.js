import { connect } from "frontity";
import React from "react";
import Cover from "./about-cover";
import Body from "./front-body"

const About = ({state, actions, libraries}) => {

    return (
        <>
            <Cover />
            <Body />
        </>
    )
}

export default connect(About);