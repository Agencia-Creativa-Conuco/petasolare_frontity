import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section} from "../../layout";
import ServiceCard from "../../service-card";

const Services = ({state, actions, libraries}) => {

    return (
        <>
            <Section spaceTopNone>
                <Wrapper decoColor={state.theme.colors.secondary.light}>
                    <Container>
                        <Row>
                            <Col>
                                <List>
                                    <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                        <ServiceCard 
                                            title="Paneles Solares" 
                                            description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                            media="13"
                                            link="/"
                                        />
                                    </Item>
                                    <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                        <ServiceCard 
                                            title="Paneles Solares" 
                                            description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                            media="13"
                                            link="/"
                                        />
                                    </Item>
                                    <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                        <ServiceCard 
                                            title="Paneles Solares" 
                                            description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                            media="13"
                                            link="/"
                                        />
                                    </Item>
                                    <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                        <ServiceCard 
                                            title="Paneles Solares" 
                                            description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                            media="13"
                                            link="/"
                                        />
                                    </Item>
                                    <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                        <ServiceCard 
                                            title="Paneles Solares" 
                                            description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                            media="13"
                                            link="/"
                                        />
                                    </Item>
                                    <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                        <ServiceCard 
                                            title="Paneles Solares" 
                                            description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                            media="13"
                                            link="/"
                                        />
                                    </Item>
                                    <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                        <ServiceCard 
                                            title="Paneles Solares" 
                                            description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                            media="13"
                                            link="/"
                                        />
                                    </Item>
                                    <Item size="12" sizeSM="6" sizeMD="4" sizeLG="3" mxAuto>
                                        <ServiceCard 
                                            title="Paneles Solares" 
                                            description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                            media="13"
                                            link="/"
                                        />
                                    </Item>
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