import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import {h5} from "../../styles/tipography";
import Link from "../../link";
import FeaturedMedia from "../../featured-media";

const Services = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];
   
    const {services} = page;

    return (
        <>
            <Section thin>
                <Wrapper decoColor={state.theme.colors.secondary.light}>
                    <Deco colors={state.theme.colors} />
                    <Container>
                        <Row>
                            <Col>
                                <List>
                                {
                                    services.map((service,index)=>{
                                        const {
                                            title,
                                            excerpt,
                                            icon,
                                            link
                                        } = service;

                                        return (
                                            <Item key={index} size="12" sizeSM={6} mxAuto>
                                                <Card>
                                                    <StyledLink link={link}>
                                                        <CardHeader>
                                                            <CardMedia>
                                                                <FeaturedMedia media={icon} size="100%" bgColor="transparent" fit="initial"/>
                                                            </CardMedia>
                                                            <CardTitle color={state.theme.colors.primary.base}>{title}</CardTitle>
                                                        </CardHeader>
                                                        {/* <CardBody>
                                                            <CardDescription color={state.theme.colors.secondary.base}>{excerpt}</CardDescription>
                                                        </CardBody> */}
                                                    </StyledLink>
                                                </Card>
                                            </Item>
                                        )
                                    })
                                }
                                </List>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
            </Section>
        </>
    )
}

export default connect(Services);

const Wrapper = styled.div`
    position: relative;
    ${({decoColor})=>css`
        position: relative;
        &:before{
            content: '';
            position: absolute;
            left: 0%;
            top: 0%;
            width: 150%;
            padding-bottom: 150%;
            height: 0;
            background-color: ${decoColor};
            border-radius: 50%;
            transform: translate(2%, 0%);
        }
    `}
`;

const Deco = styled.div`
    ${({colors})=>css`
        position: absolute;
        right: 0;
        bottom: 0;
        width: 30%;
        padding-bottom: 30%;
        background-color: ${colors.primary.base};
        border-radius: 50%;
        transform: translate(70%, 50%);
        &:before{
            content: '';
            position: absolute;
            left: 50%;
            top: 0%;
            width: 75%;
            padding-bottom: 75%;
            height: 0;
            background-color: ${colors.primary.light};
            border-radius: 50%;
            transform: translate(-50%, 0);
        }
        &:after{
            content: '';
            position: absolute;
            left: 50%;
            top: 0%;
            width: 70%;
            padding-bottom: 70%;
            height: 0;
            background-color: ${colors.primary.dark};
            border-radius: 50%;
            transform: translate(-50%, 0);
        }
    `}
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

const List = styled.ul`
    ${Rows}
    padding: 0;
    margin: 0;
`;

const Item = styled.li`
    ${Cols}
    list-style: none;
    margin-bottom: 4rem;
    z-index: 1;
`;


const Card = styled.div`
    display: block;
    width: 100%;
    max-width: 30rem;
    margin: 0 auto;
    cursor: pointer;
    height: 100%;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    border-radius: 5rem;
    background-color: white;
    &:hover{
        transform: scale(1.05);
    }
    ${mq.sm}{

    }
`;

const CardHeader = styled.div`
    margin-bottom: 4rem;
    background-color: white;
`;

const CardMedia = styled.div`
    ${({bgColor="#FAFAFA"})=>css`
        max-width: 10rem;
        margin: 4rem auto;
        border-radius: 50%;
        overflow: hidden;
        padding: 1.5rem;
        background-color: ${bgColor};
    `}
`;

const CardTitle = styled.p`
    ${h5}
    ${({color})=>css`
        color: ${color};
        text-align: center;
    `}
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding: 2rem;
`;
