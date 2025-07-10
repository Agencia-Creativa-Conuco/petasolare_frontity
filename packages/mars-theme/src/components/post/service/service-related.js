import { connect, styled, css } from "frontity";
import React from "react";
import {Container, Row, Col, Section} from "@osirispp/frontity-layout";
import ServiceCard from "../../service-card";

const Services = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const service = state.source[data.type][data.id];

    const services = service.meta_box.service_related.map((id)=>{
        return state.source[service.type][id];
    });

    const {meta_box} = service;

    return services.length > 0?(
        <>
            <Section thin>
                <Wrapper decoColor={state.theme.colors.secondary.light}>
                    <Container>
                        <Row>
                            <Col>
                                <List as="ul">
                                {
                                    services.map((service,index)=>{
                                        const icon = service.meta_box.service_icon[0];

                                        return (
                                            <Item as="li" key={index} size={12} sizeSM={6} mxAuto>
                                                <ServiceCard 
                                                    title={service.title.rendered} 
                                                    description={service.excerpt.rendered}
                                                    media={icon}
                                                    link={service.link}
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
    ):null
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



const List = styled(Row)`
    padding: 0;
    margin: 0;
`;

const Item = styled(Col)`
    list-style: none;
    margin-bottom: 4rem;
    z-index: 1;
    &:before{
        content: initial;
    }
`;