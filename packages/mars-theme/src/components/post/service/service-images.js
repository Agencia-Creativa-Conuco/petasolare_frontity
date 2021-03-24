import React, { useEffect } from "react";
import { connect, styled, Global, css } from "frontity";
import {mq, Containers, Rows, Cols, Section} from "../../layout";
import Link from "../../link";
import FeaturedMedia from "../../featured-media";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import {LeftArrowIcon, RightArrowIcon} from "../../icons";

import sliderCSS from 'pure-react-carousel/dist/react-carousel.es.css';


const SliderComponent = ({ state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const service = state.source[data.type][data.id];

    const {service_images} = service.meta_box;
    // Load the post, but only if the data is ready.
    return service_images.length?(
    <>
    <Global styles={globalStyles} />

    <Section>
        <Container>
            <Row>
                <Col>
                    <CarouselProvider naturalSlideWidth={16} naturalSlideHeight={9} totalSlides={service_images.length} isIntrinsicHeight={true} isPlaying={true} interval={4000}>
                        <ButtonBox>
                            <ButtonBack css={sliderButtonStyles(state.theme)}>
                                <LeftArrowIcon />
                            </ButtonBack>
                            <ButtonNext css={sliderButtonStyles(state.theme)}>
                                <RightArrowIcon />
                            </ButtonNext>
                        </ButtonBox>
                        <Slider >
                        {
                            service_images.map((media, index) => {
                                return(
                                    <SlideX index={index} key={index} tag="li">
                                        <FeaturedMedia media={media} size="56.25%"/>
                                    </SlideX>
                                )
                            })
                        }
                        </Slider>
                        <DotGroup css={DotGroupStyles(state.theme)} />
                    </CarouselProvider>
                </Col>
            </Row>
        </Container>
    </Section>

    </>
  ):null;
};

export default connect(SliderComponent);

const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const SlideX = styled(Slide)`
    position: relative !important;
`;

const globalStyles = () => css`
    ${sliderCSS}
`;

const DotGroupStyles = ({colors}) => css`
    text-align: center;

    button{
        width: 10px;
        height: 10px;
        margin: 0 5px;
        background-color: ${colors.green.base};
        opacity: 0.3;
        &[disabled]{
            opacity: 1;
        }
    }
`;

const ButtonBox = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    display: none;
    ${mq.md}{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2%;
    }
`;

const sliderButtonStyles = ({colors}) => css`
    border-radius: 50%;
    ${colors? `background-color: ${colors.green.base};`:`background-color: gray`}
    transform: scale(1.5);
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    visibility: visible;
    color: white;
    width: 2.5rem;
    height: 2.5rem;
    outline: initial !important;
    &:hover{
        opacity: 0.8;
    }
    &[disabled]{
        opacity: 0.3;
        &:hover{
            opacity: 0.3;
        }
    }
    svg{
        fill: white;
        width: 50%;
        height: auto;
        margin: 0 auto;
    }
`;