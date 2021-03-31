import { connect, styled, css } from "frontity";
import React from "react";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";

const Info = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const {
        title,
        featured_media
    } = page;
    
    const {
        service_description,
        service_logo
    } = page.meta_box;

    const Html2React = libraries.html2react.Component;

    return service_description || service_logo.length>0?(
        <>
            <Section>
                <Container>
                    <Row alignCenter>
                        <Col size={12} sizeLG={6}>
                            <Content>
                                <Description><Html2React html={service_description}/></Description>
                            </Content>
                        </Col>
                        {
                            service_logo.length>0?(
                                <Col size={12} sizeLG={6}>
                                    <MediaContainer>
                                        <FeaturedMedia media={service_logo[0]} size="100%" bgColor="transparent" fit="initial"/>
                                    </MediaContainer>
                                </Col>
                            ):null
                        }
                    </Row>
                </Container>
            </Section>
        </>
    ):null
}

export default connect(Info);



const MediaContainer = styled.div`
    ${({bgColor="#FFFFFF88", bgColorBefore="#28AAE1", bgColorAfter="#28AAE1"})=>css`
        margin: 0 auto;
        padding: 15%;
        background: ${bgColor};
        border-radius: 50%;
        position: relative;
        z-index: 1;
        &:before{
            content: '';
            position: absolute;
            top: 70%;
            left: 0;
            width: 10%;
            padding-bottom: 10%;
            background-color: ${bgColorBefore};
            border-radius: 50%;
            transform: translate(-80%,0);
            opacity: 0.15;
        }
        &:after{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 20%;
            padding-bottom: 20%;
            background-color: ${bgColorAfter};
            border-radius: 50%;
            opacity: 0.15;
        }
    `}
`;

const Content = styled.div`
    margin-bottom: 4rem;
`;

const Title = styled.h2``;
    
const Description = styled.div``;