import { connect, styled, css } from "frontity";
import React from "react";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";

const Content = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const service = state.source[data.type][data.id];

    const {
        content = ""
    } = service;

    const {service_benefits, service_benefits_title} = service.meta_box;
    
    const Html2React = libraries.html2react.Component;

    return content !== ""?(
        <>
            <Section>
            {
                service_benefits.length > 0?(
                    <Container>
                        <Row>
                            <Col>
                                <Title>{service_benefits_title || "Beneficios"}</Title>
                            </Col>
                        </Row>
                        <Benefits decoColor={state.theme.colors.primary.dark}>
                            <Row>
                                {
                                    service_benefits.map( (benefit, index)=>{
                                        
                                        return(
                                            <Col key={index} size={12} sizeMD={6} sizeLG={4}>
                                                <Item>{benefit}</Item>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Benefits>
                    </Container>
                ):null
            }
            </Section>
            <Section>
                <Html2React html={content.rendered} />
            </Section>
        </>
    ):null
}

export default connect(Content);

const Benefits = styled.ul`
    margin: 0;
    padding: 0;
`;



const Title = styled.h2`
    text-align: center;
    margin-bottom: 2.5rem;
`;

const Item = styled.li``;
