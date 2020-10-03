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
                            <Title color={state.theme.colors.primary.base}>Nosotros</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Description>
                                <Html2React html={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id auctor nibh, ac pretium ipsum. Ut a lacinia risus. Aenean venenatis lacus ac pretium ipsum. Ut a lacinia ris ac pretium ipsum. Ut a lacinia ris lacinia ris ac pretium ipsum. Ut a lacinia ris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id auctor nibh, ac pretium ipsum. Ut a lacinia risus. Aenean venenatis lacus ac pretium ipsum. Ut a lacinia ris ac pretium ipsum. Ut a lacinia ris lacinia ris ac pretium ipsum. Ut a lacinia ris"} />
                            </Description>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TeamList>
                                <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                    <TeamCard 
                                        name="Paneles Solares" 
                                        jobTitle="Paneles Solares" 
                                        description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                        media="13"
                                        link="/"
                                    /> 
                                </Item>
                                <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                    <TeamCard 
                                        name="Paneles Solares" 
                                        jobTitle="Paneles Solares" 
                                        description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                        media="13"
                                        link="/"
                                    /> 
                                </Item>
                                <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                    <TeamCard 
                                        name="Paneles Solares" 
                                        jobTitle="Paneles Solares" 
                                        description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                        media="13"
                                        link="/"
                                    /> 
                                </Item>
                                <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                    <TeamCard 
                                        name="Paneles Solares" 
                                        jobTitle="Paneles Solares" 
                                        description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                        media="13"
                                        link="/"
                                    /> 
                                </Item>
                            </TeamList>
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

const Title = styled.h2`
    ${({color})=>css`
        color: ${color};
        text-align: center;
        text-transform: capitalize;
        margin-bottom: 4rem;
    `}
`;

const Description = styled.div`
    text-align: justify;
    max-width: 75rem;
    margin: 0 auto;
    margin-bottom: 8rem;
`;

const TeamList = styled.ul`
    ${Rows}
    padding: 0;
    margin: 0;
`;


const Item = styled.li`
    ${Cols}
    list-style: none;
    margin-bottom: 4rem;
    z-index: 1;
`;