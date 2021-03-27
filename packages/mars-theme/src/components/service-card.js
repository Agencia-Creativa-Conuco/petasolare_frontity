import { connect, styled, css } from "frontity";
import React from "react";
import Link from "./link";
import {h5} from "./styles/tipography";
import FeaturedMedia from "./featured-media";
import {mq} from "@osirispp/frontity-layout";

const ServiceCard = ({
    state, actions, libraries,
    title, description, link, media
}) => {

    const Html2React = libraries.html2react.Component;

    return (
        <>
            <Card>
                <StyledLink link={link}>
                    <CardMedia>
                        <FeaturedMedia media={media} size="100%" fit="initial"/>
                    </CardMedia>
                    <CardBody>
                        <CardTitle color={state.theme.colors.primary.base}>{title}</CardTitle>
                        <CardDescription color={state.theme.colors.secondary.base}><Html2React html={description}/></CardDescription>
                    </CardBody>
                </StyledLink>
            </Card>
        </>
    )
}

export default connect(ServiceCard);

const Card = styled.div`
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    background-color: white;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 35rem;
    display: block;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.05);
    }
`;

const CardMedia = styled.div`
    ${({bgColor="#FAFAFA"})=>css`
        max-width: 10rem;
        margin: 4rem auto;
        border-radius: 50%;
        overflow: hidden;
        padding: 2rem;
        background-color: ${bgColor};
    `}
`;

const CardBody = styled.div``;

const CardTitle = styled.p`
    ${h5}
    ${({color})=>css`
        color: ${color};
        text-align: center;
    `}
`;

const CardDescription = styled.div`
    ${({color})=>css`
        color: ${color};
        text-align: justify;
        margin-bottom: 0;
    `}
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding: 2rem;
`;
