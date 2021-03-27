import { connect, styled, css } from "frontity";
import React, {useState} from "react";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";
import ContactForm from "../../form";
import FormHS from "../../form-hs";


const Contact = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const { home_contact_form, page_form_id } = page.meta_box
    
    return (
        <>
            <Section>
                <Container>
                    {/* <Row>
                        <Col size={12} sizeSM={10} sizeMD={8} mxAuto>
                            <Row>
                                <Form formID ={home_contact_form} />
                            </Row>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col>
                            <FormHS formID={page_form_id}/>    
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default connect(Contact);



const Form = styled(ContactForm)`
    border-radius: 2rem;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    background-color: white;
    padding: 4rem 2rem;
    margin: 0;
    ${mq.sm}{
        padding: 4rem;
    }
    ${mq.lg}{
        padding: 8rem;
        border-radius: 4rem;
    }
`;