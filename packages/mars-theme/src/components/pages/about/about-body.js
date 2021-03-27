import { connect, styled, css } from "frontity";
import React from "react";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import {h4} from "../../styles/tipography";
import about from "./about";

const Body = ({state, actions, libraries}) => {
    
    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const {
        about_copy,
        about_values,
        about_values_image
    } = page.meta_box;

    const Html2React = libraries.html2react.Component;

    return (
        <>
            <Section spaceTopNone>
                <Wrapper decoColor={state.theme.colors.secondary.light}>
                    <Deco colors={state.theme.colors} />
                    <Container >
                        <Row>
                            <Col>
                                <Description>
                                    <Html2React html={about_copy} />
                                </Description>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12}>
                                <Title color={state.theme.colors.primary.base}>Creemos en un servicio:</Title>
                            </Col>
                        </Row>
                        <Row alignCenter>
                            <Col size={12} sizeMD={6}>
                                <List>
                                    {
                                        about_values.map( (value, index) =>{
                                            return (
                                                <Item key={index} color={state.theme.colors.primary.base}>{value}</Item>
                                            )
                                        })
                                    }
                                </List>
                            </Col>
                            <Col size={12} sizeMD={6}>
                                <FeaturedMedia media={about_values_image[0]}/>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
            </Section>
        </>
    )
}

export default connect(Body);

const Wrapper = styled.div`
    position: relative;
    ${({decoColor})=>css`
        position: relative;
        &:before{
            content: '';
            position: absolute;
            left: 0%;
            top: 50%;
            width: 30%;
            padding-bottom: 30%;
            height: 0;
            background-color: ${decoColor};
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
    `}
`;

const Deco = styled.div`
    ${({colors})=>css`
        position: absolute;
        right: 0;
        bottom: 0;
        width: 30%;
        padding-bottom: 30%;
        background-color: ${colors.primary.base};
        border-radius: 50%;
        transform: translate(80%, 0%);
        z-index: -1;
        &:before{
            content: '';
            position: absolute;
            left: 50%;
            top: 0%;
            width: 75%;
            padding-bottom: 75%;
            height: 0;
            background-color: ${colors.primary.light};
            border-radius: 50%;
            transform: translate(-50%, 0);
        }
        &:after{
            content: '';
            position: absolute;
            left: 50%;
            top: 0%;
            width: 70%;
            padding-bottom: 70%;
            height: 0;
            background-color: ${colors.primary.dark};
            border-radius: 50%;
            transform: translate(-50%, 0);
        }
    `}
`;



const Title = styled.h2`
    ${({color})=>css`
        color: ${color};
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 4rem;
    `}
`;

const Description = styled.div`
    text-align: center;
    max-width: 75rem;
    margin: 0 auto;
    margin-bottom: 8rem;
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
`;

const Item = styled.li`
    ${h4}
    ${({color})=>css`
        list-style: none;
        position: relative;
        text-transform: uppercase;
        font-weight: normal;
        display: inline-block;
        ${mq.md}{
            display: block;
        }
        &:before{
            content: '●';
            margin-right: 1rem;
            color: ${color};
        }
    `}
`;