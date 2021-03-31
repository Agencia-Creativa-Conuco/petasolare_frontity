import { connect, styled, css } from "frontity";
import React, {useState} from "react";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";

const QA = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const service = state.source[data.type][data.id];

    const { service_qa, service_qa_title } = service.meta_box

    const Html2React = libraries.html2react.Component;
    
    return service_qa.length > 0?(
        <Section>
            <Container sizeLG="75rem" sizeXL="75rem">
                <Row>
                    <Col>
                        <Title>{service_qa_title || "Preguntas frecuentes"}</Title>
                    </Col>
                </Row>
                <Row>
                {
                    service_qa.map( (item, index)=>{
                        const {service_qa_question, service_qa_answer} = item;
                        return (
                            <Col size={12} key={index}>
                                <Question>{service_qa_question}</Question>
                                <Answer>
                                    <Html2React html={service_qa_answer}/>
                                </Answer>
                            </Col>
                        )
                    } )
                }
                </Row>
            </Container>
        </Section>
    ):null
}

export default connect(QA);

const Title = styled.h2`
    text-align: center;
    margin-bottom: 2.5rem;
`;

const Question = styled.h3`
    text-transform: initial;
    font-weight: normal;
    font-size: 1.8rem;
`;

const Answer = styled.div``;