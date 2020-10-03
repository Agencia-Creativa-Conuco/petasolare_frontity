import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import Button from "../../button";

const Contact = ({state, actions, libraries}) => {

    return (
        <>
            <Section>
                <Container>
                    <Row>
                        <Col size={12} sizeSM={10} sizeMD={8} mxAuto>
                            <Form>
                                <Col size="12" >
                                    <Input type="text" id="name" name="name" placeholder="Nombre" />
                                </Col>
                                <Col size="12" >
                                    <Input type="tel" id="tel" name="tel" placeholder="Teléfono" />
                                </Col>
                                <Col size="12" >
                                    <Input type="email" id="email" name="email" placeholder="Email" />
                                </Col>
                                <ButtonBox>
                                    <Button type="submit">Contáctanos</Button>
                                </ButtonBox>
                            </Form>
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

const Form = styled.form`
    ${Rows}
    border-radius: 2rem;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    background-color: white;
    padding: 2rem;
    margin: 0;
    ${mq.sm}{
        padding: 4rem;
    }
    ${mq.lg}{
        padding: 8rem;
        border-radius: 4rem;
    }
`;

const Input = styled.input`
    ${({color="#F5F5F5"})=>css`
        display: block;
        width: 100%;
        margin-bottom: 2rem;
        padding: 2rem;
        border-radius: 2rem;
        background-color: ${color};
        border: initial;
        outline: initial;
    `}
`;

const ButtonBox = styled.div`
    text-align: center;
    margin-top: 4rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0, 50%);
    width: 100%;
`;