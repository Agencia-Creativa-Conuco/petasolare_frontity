import React, { useEffect } from "react";
import { connect, styled, Global, css } from "frontity";
import {mq} from "./layout";
import Link from "./link";
import FeaturedMedia from "./featured-media";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import {LeftArrowIcon, RightArrowIcon} from "./icons";

import sliderCSS from 'pure-react-carousel/dist/react-carousel.es.css';


const SliderComponent = ({ state, actions, libraries, items, sliderPosition, height, heightSM, heightMD, heightLG, heightXL, position }) => {

    const Html2React = libraries.html2react.Component;

    // Load the post, but only if the data is ready.
    return (
    <>
    <Global styles={globalStyles} />

    <CarouselProvider naturalSlideWidth={16} naturalSlideHeight={9} totalSlides={items.length} isIntrinsicHeight={true} isPlaying={true} interval={4000}>
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
            items.map((item, index) => {
                const slide = state.source[item.type][item.id];
                // if(slide.meta_box["slide-position"] === sliderPosition){
                //     return null;
                // }
                return(
                    <SlideX index={index} key={item.id} tag="li">
                        <SlideInfo>
                            <Title>{slide.title.rendered}</Title>
                            <Copy><Html2React html={slide.content.rendered} /></Copy>
                            <Link link={slide.meta_box["slider-url"]} cta>{slide.meta_box["slider-btn-text"]}</Link>
                        </SlideInfo>
                        {/* <FeaturedMedia id={slide.featured_media} {...{height, heightSM, heightMD, heightLG, heightXL, position}} /> */}
                        <FeaturedMedia  
                            {...{
                                media:slide.meta_box["slider-image"][0],
                                height, 
                                heightSM, 
                                heightMD, 
                                heightLG, 
                                heightXL, 
                                position
                            }} 
                        />
                    </SlideX>
                )
            })
        }
        </Slider>
        <DotGroup css={DotGroupStyles(state.theme)} />
    </CarouselProvider>
    </>
  );
};

export default connect(SliderComponent);

const SlideX = styled(Slide)`
    position: relative !important;
    &:before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
        z-index: 2;
    }
`;

const SlideInfo = styled.div`
    padding: 15px;
    text-align: center;
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translate(-0, -50%);
    width: 100%;
    z-index: 2;
    color: white;
    ${mq.md}{
        text-align: left;
        width: 50%;
        position: absolute;
        left: 5%;
        top: 50%;
        transform: translate(-0, -50%);
    }
    ${mq.lg}{
        left: 10%;
        position: absolute;
        width: 40%;
    }
`;

const Title = styled.h3`
    text-transform: uppercase;
    color: white;
`;

const Copy = styled.div`
    text-align: center;
    ${mq.md}{
        text-align: left;
    }
    p{text-align: inherit;}
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
    }
`;