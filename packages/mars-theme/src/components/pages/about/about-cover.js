import { connect, styled, css } from "frontity";
import React from "react";
import FeaturedMedia from "../../featured-media";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";

const Cover = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const {
        about_position_statement
    } = page.meta_box;

    return (
        <>
            <Section spaceNone>
                <CoverContainer color={state.theme.colors.primary.base}>
                    <FeaturedMedia media={page.featured_media} size="80%" heightMD="100%"/>
                </CoverContainer>
                <Container>
                    <Row>
                        <Col size={12} sizeMD={10} sizeLG={8}>
                            <Content>
                                <Title>{page.title.rendered}</Title>
                                <Copy>{about_position_statement}</Copy>
                            </Content>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default connect(Cover);

const Content = styled.div`
    position: relative;
    z-index: 2;
    /* padding: 40% 0; */
    /* ${mq.sm}{
        padding: 40% 3rem;
    } */
    ${mq.lg}{
        text-shadow: 0.1rem 0.1rem 0.2rem rgba(0,0,0,0.5);
        padding: 80% 4rem;
        padding-bottom: 20%;
    }
`;

const Title = styled.h1`
    margin-bottom: 20px;
    ${mq.lg}{
        color: white;
    }
`;

const Copy = styled.p`
    text-align: justify;
    ${mq.lg}{
        color: white;
        text-align: left;
        font-size: 2rem;
    }
`;

const CoverContainer = styled.div`
    ${({color})=>css`
        position: relative;
        ${mq.lg}{
            overflow: hidden;
            z-index: -1;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        &:before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: ${color};
            opacity: 0.3;
            ${mq.lg}{
                z-index: 1;
            }
        }
        &:after{
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 500%;
            height: 0;
            padding-bottom: 500%;
            background-color: white;
            border-radius: 50%;
            transform-origin: center center;
            transform: translate(-50%, 98%);
            ${mq.lg}{
                z-index: 2;
                transform: translate(-50%, 99%);
            }
        }
    `}
`;