import { connect, styled, css } from "frontity";
import React, {useState} from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import FormHS from "../../form-hs";


const Contact = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const service = state.source[data.type][data.id];

    const { service_form_id } = service.meta_box
    
    return service_form_id?(
        <>
            <Section>
                <Container>
                    <Row>
                        <Col>
                            <Title>{"Solicitar"}</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormHS formID={service_form_id}/>    
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    ):null
}

export default connect(Contact);

const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 2.5rem;
`;
