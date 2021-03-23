import { connect } from "frontity";
import React from "react";
import Cover from "./front-cover";
import Services from "./front-services"
import About from "./front-about";
import Contact from "./front-contact";
import Infography from "./front-infography";

const FrontPage = ({state, actions, libraries}) => {

    return (
        <>
            <Cover />
            <Services />
            {/* <Infography /> */}
            <About />
            <Contact />
        </>
    )
}

export default connect(FrontPage);