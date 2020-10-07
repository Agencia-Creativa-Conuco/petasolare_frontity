import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section} from "../../layout";
import TeamCard from "../../team-card";

const About = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];
   
    const {persons} = page;

    const { home_about_title, home_about_description } = page.meta_box

    const Html2React = libraries.html2react.Component;

    return (
        <>
            <Section>
                <Container decoColor={state.theme.colors.secondary.light}>
                    <Row>
                        <Col>
                            <Title color={state.theme.colors.primary.base}>{home_about_title || "Nosotros"}</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Description>
                                <Html2React html={home_about_description} />
                            </Description>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TeamList>
                                {
                                    persons.map((person, index)=>{
                                        const {
                                            title,
                                            featured_media,
                                            jobtitle,
                                        } = person;
                                        
                                        return (
                                            <Item key={index} size="auto" mxAuto>
                                                <TeamCard 
                                                    name={title} 
                                                    jobTitle={jobtitle} 
                                                    description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                                    media={featured_media}
                                                    link="/"
                                                /> 
                                            </Item>
                                        )
                                    })
                                }
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

const Description = styled.p`
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