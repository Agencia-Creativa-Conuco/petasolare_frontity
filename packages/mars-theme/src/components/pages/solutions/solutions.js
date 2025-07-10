import { connect, styled, css } from "frontity";
import React from "react";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";
import {h3} from "../../styles/tipography";

const Solutions = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const {
        solutions_home_image,
        solutions_home_url,
        solutions_home_copy,
        solutions_company_image,
        solutions_company_url,
        solutions_company_copy
    } = page.meta_box;

    return (
        <>
            <Section spaceTopNone>
                <Wrapper>
                    <Container fluid>
                        <Row>
                            <Col size={12} sizeMD={6}>
                                <Solution>
                                    <Media>
                                        <FeaturedMedia media={solutions_home_image[0]} size="75%"/>
                                    </Media>
                                    <StyledLink 
                                        link={solutions_home_url} 
                                        cta 
                                        color={state.theme.colors.primary.base} 
                                        bgColor="white"
                                    >Soluciones hogar</StyledLink>
                                    <SolutionDescription>{solutions_home_copy}</SolutionDescription>
                                </Solution>
                            </Col>
                            <Col size={12} sizeMD={6}>
                                <Solution>
                                    <Media>
                                        <FeaturedMedia media={solutions_company_image[0]} size="75%"/>
                                    </Media>
                                    <StyledLink 
                                        link={solutions_company_url} 
                                        cta 
                                        color={state.theme.colors.primary.base} 
                                        bgColor="white"
                                    >Soluciones empresa</StyledLink>
                                    <SolutionDescription>{solutions_company_copy}</SolutionDescription>
                                </Solution>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
            </Section>
        </>
    )
}

export default connect(Solutions);

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
`;



const Media = styled.div`
    margin: 0 -1.5rem;
    margin-bottom: 2rem;
`;

const SolutionDescription = styled.p`
    max-width: 60rem;
    margin: 0 auto;
    margin-top: 2rem;
`;

const Solution = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

const StyledLink = styled(Link)`
    ${h3}
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    text-transform: uppercase;
`;