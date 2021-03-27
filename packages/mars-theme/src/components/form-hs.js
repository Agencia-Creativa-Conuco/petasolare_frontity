import { connect, styled, css } from "frontity";
import React, {useState} from "react";
import {Container, Row, Col, mq} from "@osirispp/frontity-layout";
import HubspotForm from 'react-hubspot-form';
import Loading from "./loading";

const ContactForm = ({state, formID}) => {

    return formID?(
      <Form>
        <Container>
            <Row>
                <Col>
                    <HubspotForm
                        portalId={state.theme.settings.hubspot.id}
                        formId={formID}
                        loading={<Loading height="200px"/>}
                    />
                </Col>
            </Row>
        </Container>
      </Form>
    ):null
}

export default connect(ContactForm);

const Form = styled.div`
    border-radius: 2rem;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    background-color: white;
    padding: 2rem 2rem 0rem 2rem;
    margin: 0;
    max-width: 75rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    ${mq.md}{
        padding: 4rem 4rem 0rem 4rem;
        border-radius: 4rem;
    }
    &:before{
        content: 'Cree su propio formulario libre con Hubstpor';
        position: absolute;
        top: 100%;
        left: 0;
        transform: translate(0,-155%);
        padding: inherit;
        background-color: white;
        color: transparent;
        z-index: 1;
        ${mq.md}{
            transform: translate(0,-140%);
        }
    }
    iframe{
        width: 100% !important;
    }
`;