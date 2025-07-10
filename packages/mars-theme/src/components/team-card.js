import { connect, styled, css } from "frontity";
import React from "react";
import Link from "./link";
import {h5} from "./styles/tipography";
import FeaturedMedia from "./featured-media";

const TeamCard = ({
    state, actions, libraries,
    name, jobTitle, description, media,
    isActive = false
}) => {

    return (
        <>
            <Card>
                <CardMedia>
                    <Media media={media} size="100%"/>
                </CardMedia>
                <CardBody>
                    <CardTitle color={state.theme.colors.primary.base}>{name}</CardTitle>
                    <CardSubtitle color={state.theme.colors.secondary.base}>{jobTitle}</CardSubtitle>
                    <CardDescription {...{isActive}} color={state.theme.colors.secondary.base}>{description}</CardDescription>
                </CardBody>
            </Card>
        </>
    )
}

export default connect(TeamCard);

const Card = styled.div`
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    max-width: 30rem;
    padding: 2rem;
    background-color: white;
    margin: 0 auto;
    height: 100%;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
    }
`;

const CardMedia = styled.div`
    width: 12rem;
    margin: 0rem auto;
    margin-bottom: 2rem;
    border-radius: 50%;
    overflow: hidden;
`;

const Media = styled(FeaturedMedia)`
    overflow: hidden;
    border-radius: 50%;
`;

const CardBody = styled.div``;

const CardTitle = styled.p`
    ${h5}
    ${({color})=>css`
        color: ${color};
        text-align: center;
        margin-bottom: 0;
    `}
`;

const CardSubtitle = styled.p`
    ${({color})=>css`
        color: ${color};
        text-align: center;
    `}
`;

const CardDescription = styled.p`
    ${({color, isActive})=>css`
        ${isActive? "display: block;" : "display: none;"}
        color: ${color};
        text-align: justify;
        margin-bottom: 0;
    `}
`;