import { connect } from "frontity";
import React from "react";
import Cover from "./front-cover";
import Services from "./front-services"
import About from "./front-about";
import Contact from "./front-contact";

const FrontPage = ({state, actions, libraries}) => {

    return (
        <>
            <Cover />
            <Services />
            <About />
            <Contact />
        </>
    )
}

export default connect(FrontPage);