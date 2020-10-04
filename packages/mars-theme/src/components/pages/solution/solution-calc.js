import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section} from "../../layout";
import TeamCard from "../../team-card";

const About = ({state, actions, libraries}) => {

    const Html2React = libraries.html2react.Component;

    return (
        <>
            <Section>
                <Container decoColor={state.theme.colors.secondary.light}>
                    <Row>
                        <Col>
                            <Content>
                                <Title color={state.theme.colors.primary.base}>Calcula tu presupuesto</Title>
                                <Description>Evalúa tu gasto actual y compáralo con la posibilidad de realizar una inversión sostenible. Te ofrecemos asistencia personalizada para acompañarte en tu proyecto.</Description>
                            </Content>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default connect(About);

const Container = styled.div`
    ${Containers}
    ${({decoColor})=>css`
        position: relative;
        &:before{
            content: '';
            position: absolute;
            left: 50%;
            top: 25%;
            width: 70%;
            padding-bottom: 70%;
            height: 0;
            background-color: ${decoColor};
            border-radius: 50%;
        }
    `}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const Content = styled.div`
    max-width: 75rem;
    margin: 0 auto;
`;

const Title = styled.h2`
    ${({color})=>css`
        color: ${color};
        text-align: center;
        text-transform: initial;
        margin-bottom: 4rem;
    `}
`;

const Description = styled.p`
`;