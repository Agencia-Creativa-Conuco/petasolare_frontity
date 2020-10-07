import { connect, styled, css } from "frontity";
import React, {useState} from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import ContactForm from "../../form";

const Contact = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const { home_contact_form } = page.meta_box
    
    return (
        <>
            <Section>
                <Container>
                    <Row>
                        <Col size={12} sizeSM={10} sizeMD={8} mxAuto>
                            <Form formID ={home_contact_form} />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
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

const Form = styled(ContactForm)`
    ${Rows}
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