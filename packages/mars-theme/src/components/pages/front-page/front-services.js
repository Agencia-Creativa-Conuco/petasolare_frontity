import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section} from "../../layout";
import ServiceCard from "../../service-card";

const Services = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];
   
    const { home_services_title, home_services_description } = page.meta_box
    
    const {services} = page;

    const Html2React = libraries.html2react.Component;

    return (
        <>
            <Section thin spaceTopNone>
                <Wrapper decoColor={state.theme.colors.secondary.light}>
                    <Container>
                        {
                            home_services_title?(
                                <Row>
                                    <Col>
                                        <Title color={state.theme.colors.primary.base}>{home_services_title}</Title>
                                    </Col>
                                </Row>
                            ):null
                        }
                        {
                            home_services_description?(
                                <Row>
                                    <Col>
                                        <Description>
                                            <Html2React html={home_services_description} />
                                        </Description>
                                    </Col>
                                </Row>
                            ):null
                        }
                        <Row>
                            <Col>
                                <List>
                                {
                                    services.map((service,index)=>{
                                        const {
                                            title,
                                            excerpt,
                                            icon,
                                            link
                                        } = service;

                                        return (
                                            <Item key={index} size="12" sizeMD={6} mxAuto>
                                                <ServiceCard 
                                                    title={title} 
                                                    description={excerpt}
                                                    media={icon}
                                                    link={link}
                                                />
                                            </Item>
                                        )
                                    })
                                }
                                </List>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
            </Section>
        </>
    )
}

export default connect(Services);

const Wrapper = styled.div`
    position: relative;
    ${({decoColor})=>css`
        position: relative;
        &:before{
            content: '';
            position: absolute;
            left: 0%;
            top: 50%;
            width: 40%;
            padding-bottom: 40%;
            height: 0;
            background-color: ${decoColor};
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
        &:after{
            content: '';
            position: absolute;
            right: 0%;
            top: 50%;
            width: 25%;
            padding-bottom: 25%;
            height: 0;
            background-color: ${decoColor};
            border-radius: 50%;
            transform: translate(50%, -50%);
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

const List = styled.ul`
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