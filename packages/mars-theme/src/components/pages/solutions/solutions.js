import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";
import {h3} from "../../styles/tipography";

const Solutions = ({state, actions, libraries}) => {

    return (
        <>
            <Section spaceTopNone>
                <Wrapper>
                    <Container fluid>
                        <Row>
                            <Col size={12} sizeMD={6}>
                                <Solution>
                                    <Media>
                                        <FeaturedMedia media={14} height="75%"/>
                                    </Media>
                                    <StyledLink 
                                        link="/" 
                                        cta 
                                        color={state.theme.colors.primary.base} 
                                        bgColor="white"
                                    >Soluciones hogar</StyledLink>
                                    <SolutionDescription>Somos un equipo de ingenieros que disfruta de innovar día a día, encontrando un equilibrio entre la creatividad y la razón. Petasolare nace del deseo enorme de encontrar nuevas soluciones a los reto</SolutionDescription>
                                </Solution>
                            </Col>
                            <Col size={12} sizeMD={6}>
                                <Solution>
                                    <Media>
                                        <FeaturedMedia media={14} height="75%"/>
                                    </Media>
                                    <StyledLink 
                                        link="/" 
                                        cta 
                                        color={state.theme.colors.primary.base} 
                                        bgColor="white"
                                    >Soluciones empresa</StyledLink>
                                    <SolutionDescription>Somos un equipo de ingenieros que disfruta de innovar día a día, encontrando un equilibrio entre la creatividad y la razón. Petasolare nace del deseo enorme de encontrar nuevas soluciones a los reto</SolutionDescription>
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