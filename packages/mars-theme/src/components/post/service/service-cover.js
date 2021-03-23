import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import FeaturedMedia from "../../featured-media";

const Cover = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const colors = state.theme.colors;

    const {
        title,
        featured_media
    } = page;
    
    const {
        service_copy
    } = page.meta_box;
    
    return (
        <>
            <Section spaceNone>
                <Wrapper bgColor={colors.primary.base}>
                    <MediaContainer color={state.theme.colors.primary.base}>
                        <FeaturedMedia media={featured_media} height="100%"/>
                    </MediaContainer>
                    <Container>
                        <Row>
                            <Col size={12} sizeMD={10}>
                                <Content>
                                    <Title>{title.rendered}</Title>
                                    <Copy>{service_copy}</Copy>
                                </Content>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
            </Section>
        </>
    )
}

export default connect(Cover);

const Container = styled.div`
    ${Containers}
    z-index: 4;
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const Wrapper = styled.div`
    ${({bgColor="blue"})=>css`
        position: relative;
        ${mq.md}{
            clip-path: ellipse(70% 100% at 45% 0%);
        }
        &:before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${bgColor};
            z-index: 2;
            opacity: 0.15;
        }
    `}
`;

const MediaContainer = styled.div`
    ${({color})=>css`
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    `}
`;

const Content = styled.div`
    padding-bottom: 20vw;
    padding-top: 30vw;
    ${mq.md}{
        padding-bottom: 10vw;
        padding-top: 20vw;
    }
`;

const Title = styled.h1`
    color: white;
    text-shadow: 0 0.25rem 0.25rem rgba(0,0,0,0.15);
`;
    
const Copy = styled.p`
    color: white;
    text-shadow: 0 0.25rem 0.25rem rgba(0,0,0,0.15);
`;