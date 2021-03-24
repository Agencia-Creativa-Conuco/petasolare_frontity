import React from "react";
import {connect, styled, css} from "frontity";
import {Section, Containers, Rows, Cols, mq} from "../../layout";
import YouTube from "react-youtube";

const Video = ({state, actions, libraries})=>{
    const data = state.source.get(state.router.link);

    const service = state.source[data.type][data.id];

    const metabox = service.meta_box;

    const {colors} = state.theme;

    const video = metabox["service_video"]
    console.log(video)
    return video?(
       <Section>
           <Container>
               <Row>
                    <Col mxAuto>
                        <Media decoBgColor={colors.primary.base}>
                            <StyledYouTube 
                                videoId={video}
                                width="100%"
                            />
                        </Media>
                    </Col>
               </Row>
           </Container>
       </Section>
    ):null
}

export default connect(Video);


const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;


const Media = styled.div`
    ${({decoBgColor="green"})=>css`
        border-radius: 2rem;
        border: 2rem solid transparent;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.15);
        padding-bottom: 56.25%;
        position: relative;
        background-color: white;
        ${mq.md}{
            border: 4rem solid transparent;
        }
        &:before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translate(-100%, -50%);
            width: 10%;
            padding-bottom: 10%;
            background-color: ${decoBgColor};
            border-radius: 50%;
            z-index: -1;
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
        }
        &:after{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(90%, 50%);
            width: 15%;
            padding-bottom: 15%;
            background-color: ${decoBgColor};
            border-radius: 50%;
            z-index: 2;
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
        }
    `}
`;

const StyledYouTube = styled(YouTube)`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
`;