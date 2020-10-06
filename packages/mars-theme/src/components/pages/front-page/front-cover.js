import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";

const Cover = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const { home_video } = page.meta_box

    return (
        <>
            <Section spaceNone>
                <Container fluid>
                    <Row>
                        <Col  noGutters>
                            <VideoContainer color={state.theme.colors.primary.base}>
                                <Video muted loop autoPlay>
                                    {
                                        Object.values(home_video).map((video,index)=>{
                                            return (
                                                <source key={index} src={video.src} type={video.type} />
                                            )
                                        })
                                    }
                                    Your browser does not support HTML video.
                                </Video>
                            </VideoContainer>
                        </Col>
                    </Row>
                </Container>
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

const VideoContainer = styled.div`
    ${({color})=>css`
        height: auto;
        height: 100vw;
        position: relative;
        overflow: hidden;
        ${mq.sm}{
            height: 100vw;
        }
        ${mq.md}{
            height: 50vw;
        }
        &:before{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-color: ${color};
            opacity: 0.3;
            z-index: 1;
        }
        &:after{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            background-color: white;
            border-radius: 50%;
            transform: scale(4) translate(3%, 60%);
            z-index: 2;
        }
    `}
`;

const Video = styled.video`
    object-fit: cover;
    object-position: 50% 50%;
    height: 100%;
    width: 100%;
`;