import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import FeaturedMedia from "../../featured-media";
import Button from "../../button";
import Link from "../../link";
import {h3} from "../../styles/tipography";

const About = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const {
        featured_media,
    } = page;

    const {
        contact_email,
        contact_phone,
        contact_address
    } = page.meta_box;

    return (
        <>
            <Section spaceTopNone>
                <Wrapper>
                    <MediaContainer>
                        <FeaturedMedia media={featured_media} height="56.25%" position="35% 50%" heightLG="100%"/>
                    </MediaContainer>
                    <Container fluid>
                        <Row>
                            <InfoContainer size={12} sizeLG={6} mlAuto>
                                <Row>
                                    <InfoWrapper size={12} sizeSM={10} sizeSM={10} sizeLG={10} sizeXL={8} mxAuto>
                                        <Row>
                                            <Col>
                                                <Title color={state.theme.colors.primary.base}>Contáctanos</Title>
                                            </Col>
                                            <Col size={12}>
                                                <Info>
                                                    <InfoLabel>Email</InfoLabel>
                                                    <InfoDescription>
                                                        <Link link={"mailto:info@petasolare.com.do"}>{contact_email}</Link>
                                                    </InfoDescription>
                                                </Info>
                                            </Col>
                                            <Col size={12}>
                                                <Info>
                                                    <InfoLabel>Teléfono</InfoLabel>
                                                    <InfoDescription>
                                                        <Link link={`tel:+${contact_phone}`}>{contact_phone}</Link>
                                                    </InfoDescription>
                                                </Info>
                                            </Col>
                                            <Col size={12}>
                                                <Info>
                                                    <InfoLabel>Dirección</InfoLabel>
                                                    <InfoAddress>
                                                        <Link link={"tel:+8099710771"}>{contact_address}</Link>
                                                    </InfoAddress>
                                                </Info>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
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
                                                    <Col size="12" >
                                                        <Message id="message" name="message" placeholder="Mensaje" />
                                                    </Col>
                                                    <ButtonBox>
                                                        <Button type="submit">Contáctanos</Button>
                                                    </ButtonBox>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </InfoWrapper>
                                </Row>
                            </InfoContainer>
                        </Row>
                    </Container>
                </Wrapper>
            </Section>
        </>
    )
}

export default connect(About);

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const MediaContainer = styled.div`
    ${mq.lg}{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;

const InfoContainer = styled.div`
    ${Cols}
    background-color: white;
    padding-bottom: 10vw;
    padding-top: 10vw;
    box-shadow: 0 0 2rem rgba(0,0,0,0.15);
    ${mq.lg}{
        clip-path: ellipse(60% 100% at 60% 50%);
        padding-top: 10vw;
    }
`;

const InfoWrapper = styled.div`
    ${Cols}
`;

const Title = styled.h1`
    ${({color=""})=>`
        color: ${color};
        margin-bottom: 4rem;
    `}
`;

const Info = styled.div`
    margin-bottom: 4rem;
`;

const InfoLabel = styled.p`
    ${h3}
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

const InfoDescription = styled.p``;

const InfoAddress = styled.address`
    font-style: initial;
`;

const Form = styled.form`
    ${Rows}
    border-radius: 2rem;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    background-color: white;
    padding: 4rem 2rem;
    margin: 0;
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

const Message = styled.textarea`
    ${({color="#F5F5F5"})=>css`
        display: block;
        width: 100%;
        height: 12.5rem;
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