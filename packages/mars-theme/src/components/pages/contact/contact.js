import { connect, styled, css } from "frontity";
import React from "react";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";
import {h3, h4} from "../../styles/tipography";
import ContactForm from "../../form-hs";

const About = ({state, actions, libraries}) => {

    const settings = state.source.settings;

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const {
        featured_media,
    } = page;

    const {
        page_form_id
    } = page.meta_box;

    return (
    <>
        <Section spaceTopNone>
            <Wrapper>
                <Container fluid>
                    <Row alignCenter>
                        <Col size={12} sizeLG={6}>
                            <MediaContainer>
                                <FeaturedMedia media={featured_media} loading="eager" mxAuto maxWidth="40rem"/>
                            </MediaContainer>
                        </Col>
                        <InfoContainer size={12} sizeLG={6} mlAuto>
                            <Row>
                                <InfoWrapper size={12} sizeSM={10} sizeSM={10} sizeLG={10} sizeXL={8} mxAuto>
                                    <Row>
                                        <Col>
                                            <Title color={state.theme.colors.primary.base}>Contáctanos</Title>
                                        </Col>
                                        {
                                            settings.emails?(
                                                <Col size={12}>
                                                    <Info>
                                                        <InfoLabel>Email</InfoLabel>
                                                        <InfoDescription>
                                                            {
                                                                settings.emails.map(([email], index)=>{
                                                                    return (
                                                                        <EmailLink key={index} link={`mailto:${email}`}>{email}</EmailLink>
                                                                    )
                                                                })
                                                            }
                                                        </InfoDescription>
                                                    </Info>
                                                </Col>
                                            ):null
                                        }
                                        {
                                            settings.phone?(
                                                <Col size={12}>
                                                    <Info>
                                                        <InfoLabel>Teléfono</InfoLabel>
                                                        <InfoDescription>
                                                            <Link link={`tel:+${settings.phone}`}>{settings.phone}</Link>
                                                        </InfoDescription>
                                                    </Info>
                                                </Col>
                                            ):null
                                        }
                                        {
                                            settings.address?(
                                                <Col size={12}>
                                                    <Info>
                                                        <InfoLabel>Dirección</InfoLabel>
                                                        <InfoAddress>
                                                            <Link link={settings.location || state.router.link}>{settings.address}</Link>
                                                        </InfoAddress>
                                                    </Info>
                                                </Col>
                                            ):null
                                        }
                                    </Row>
                                    <Row>
                                        <Col size={12}>
                                            <ContactForm formID={page_form_id} />
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

const MediaContainer = styled.div`
    padding: 20% 0;
`;

const InfoContainer = styled(Col)`
    background-color: white;
    padding-bottom: 15vw;
    padding-top: 5vw;
    box-shadow: 0 0 2rem rgba(0,0,0,0.15);
    ${mq.lg}{
        padding-bottom: 10vw;
        padding-top: 10vw;
        clip-path: ellipse(60% 100% at 60% 50%);
        padding-top: 10vw;
    }
`;

const InfoWrapper = styled(Col)``;

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

const InfoDescription = styled.p`
    ${h4}
    a{
        text-decoration: none;
    }
`;

const EmailLink = styled(Link)`
    display: block;
`;

const InfoAddress = styled.address`
    ${h4}
    font-style: initial;
    white-space: pre;
    a{
        text-decoration: none;
    }
`;