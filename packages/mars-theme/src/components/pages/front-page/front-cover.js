import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import Link from "../../link";

const Cover = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const { home_video, home_cta_text, home_cta_url } = page.meta_box

    const Html2React = libraries.html2react.Component;

    return (
        <>
            <SectionComponent spaceNone>
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
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col size={12} sizeSM={10} sizeMD={8} sizeLG={6} mlAuto>
                                    <InfoContainer color={state.theme.colors.primary.base} >
                                        <Title>{page.title.rendered}</Title>
                                        <Copy><Html2React html={page.content.rendered} /></Copy>
                                        <Link link={home_cta_url} cta bgColor={state.theme.colors.primary.light}>{home_cta_text || "Ver mas"}</Link>
                                    </InfoContainer>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </SectionComponent>
        </>
    )
}

export default connect(Cover);

const SectionComponent = styled(Section)`
    position: relative;
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

const VideoContainer = styled.div`
    ${({color})=>css`
        height: auto;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
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
    `}
`;

const Video = styled.video`
    object-fit: cover;
    object-position: 50% 50%;
    height: 100%;
    width: 100%;
`;

const InfoContainer = styled.div`
    ${({color})=>css`
        position: relative;
        overflow: hidden;
        z-index: 2;
        padding-top: 35vw;
        padding-bottom: 35vw;
        ${mq.sm}{
            padding-top: 20vw;
            padding-bottom: 20vw;
        }
        ${mq.md}{
            padding-top: 20vw;
            padding-bottom: 20vw;
        }
    `}
`;

const Title = styled.h1`
    color: white;
`;
    
const Copy = styled.div`
    color: white;
    text-align: left;
    p{
        text-align: inherit;
    }
`;