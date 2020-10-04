import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import FeaturedMedia from "../../featured-media";

const Cover = ({state, actions, libraries}) => {

    return (
        <>
            <Section spaceNone>
                <Wrapper>
                    <MediaContainer color={state.theme.colors.primary.base}>
                        <FeaturedMedia media={14} height="100%" heightSM="56.25%" />
                    </MediaContainer>
                    <Container>
                        <Row>
                            <Col size={12} sizeMD={6}>
                                <Content>
                                    <Title>Soluciones Hogar</Title>
                                    <Copy>Somos un equipo de ingenieros que disfruta de innovar día a día, encontrando un equilibrio entre la creatividad y la razón. Petasolare nace del deseo enorme de encontrar nuevas soluciones a los retos cotidianos.</Copy>
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
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const Wrapper = styled.div`
    position: relative;
    ${mq.md}{
        clip-path: ellipse(70% 100% at 45% 0%);
    }
`;

const MediaContainer = styled.div`
    ${({color})=>css`
        height: auto;
        height: 100%;
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `}
`;

const Content = styled.div`
    padding-bottom: 10vw;
    padding-top: 20vw;
`;

const Title = styled.h1`
    color: white;
    text-shadow: 0 0.25rem 0.25rem rgba(0,0,0,0.15);
`;
    
const Copy = styled.p`
    color: white;
    text-shadow: 0 0.25rem 0.25rem rgba(0,0,0,0.15);
`;