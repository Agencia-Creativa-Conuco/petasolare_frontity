import { connect } from "frontity";
import React from "react";
import Cover from "./solution-cover";
import Services from "./solution-services"
import Calc from "./solution-calc";
import Content from "./solution-content";

const FrontPage = ({state, actions, libraries}) => {

    return (
        <>
            <Cover />
            <Services />
            <Content />
            {/* <Calc /> */}
        </>
    )
}

export default connect(FrontPage);