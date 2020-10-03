import { connect, styled, css } from "frontity";
import React from "react";
import Link from "./link";
import {h5} from "./styles/tipography";
import FeaturedMedia from "./featured-media";

const ServiceCard = ({
    state, actions, libraries,
    title, description, link, media
}) => {

    return (
        <>
            <Card>
                <StyledLink link={link}>
                    <CardMedia>
                        <FeaturedMedia media={media} height="100%"/>
                    </CardMedia>
                    <CardBody>
                        <CardTitle color={state.theme.colors.primary.base}>{title}</CardTitle>
                        <CardDescription color={state.theme.colors.secondary.base}>{description}</CardDescription>
                    </CardBody>
                </StyledLink>
            </Card>
        </>
    )
}

export default connect(ServiceCard);

const Card = styled.div`
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    max-width: 30rem;
    background-color: white;
    margin: 0 auto;
`;

const CardMedia = styled.div`
    max-width: 10rem;
    margin: 4rem auto;
`;

const CardBody = styled.div``;

const CardTitle = styled.p`
    ${h5}
    ${({color})=>css`
        color: ${color};
        text-align: center;
    `}
`;

const CardDescription = styled.p`
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
