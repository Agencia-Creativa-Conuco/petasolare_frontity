import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import FeaturedMedia from "../../featured-media";
import {h4} from "../../styles/tipography";

const Body = ({state, actions, libraries}) => {
    
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
                                    <Html2React html={"Sin importar lo grande o pequeño que sea el proyecto en el que nos envolvemos, nuestro mayor deseo es brindar a cada cliente un servicio personalizado, donde la calidad, la funcionalidad y la belleza de cada trabajo esté garantizado."} />
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
                                    <Item color={state.theme.colors.primary.base}>Sostenible</Item>
                                    <Item color={state.theme.colors.primary.base}>Rápido</Item>
                                    <Item color={state.theme.colors.primary.base}>Funcional</Item>
                                    <Item color={state.theme.colors.primary.base}>Personalizado</Item>
                                    <Item color={state.theme.colors.primary.base}>Eficiente</Item>
                                    <Item color={state.theme.colors.primary.base}>De calidad</Item>
                                    <Item color={state.theme.colors.primary.base}>Con acompañamiento continuo</Item>
                                </List>
                            </Col>
                            <Col size={12} sizeMD={6}>
                                <FeaturedMedia media={14}/>
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
        transform: translate(70%, 50%);
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