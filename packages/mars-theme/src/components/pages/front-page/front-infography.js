import { connect, styled, css } from "frontity";
import React from "react";
import {Container, Row, Col, Section} from "@osirispp/frontity-layout";
import TeamCard from "../../team-card";
import FeaturedMedia from "../../featured-media";

const Infography = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];
   
    const {persons} = page;

    const { home_about_title, home_about_description } = page.meta_box

    const Html2React = libraries.html2react.Component;
    
    const {colors} = state.theme;

    const openPersonModal = (title, jobtitle, featured_media, content) => {
        const {openModal} = actions.theme;
        state.theme.modalTitle = "Contáctanos";
        state.theme.modal.modalContent = () => () => (
            <ModalBody>
                <PersonAvatar>
                    <FeaturedMedia media={featured_media} size="100%"/>
                </PersonAvatar>
                <PersonTitle color={colors.primary.base}>{title}</PersonTitle>
                <PersonJobTitle>{jobtitle}</PersonJobTitle>
                <PersonBio><Html2React html={content}/></PersonBio>
            </ModalBody>
        ); 
        openModal();
    };

    return (
        <>
            <Section>
                <Container decoColor={state.theme.colors.secondary.light} css={containerStyles}>
                    <Row>
                        <Col>
                            <Title color={state.theme.colors.primary.base}>{home_about_title || "Nosotros"}</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Description>
                                <Html2React html={home_about_description} />
                            </Description>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TeamList as="ul">
                                {
                                    persons.map((person, index)=>{
                                        const {
                                            title,
                                            featured_media,
                                            jobtitle,
                                            content,
                                        } = person;
                                        
                                        return (
                                            <Item as="li"
                                                key={index} 
                                                size="auto" 
                                                mxAuto
                                                onClick={(e)=>{openPersonModal(title, jobtitle, featured_media, content)}}
                                            >
                                                <TeamCard 
                                                    name={title} 
                                                    jobTitle={jobtitle} 
                                                    description="Esto es lo que te espera para que entiendas que esto si es asi y no solo asi como lo es todo" 
                                                    media={featured_media}
                                                    link="/"
                                                /> 
                                            </Item>
                                        )
                                    })
                                }
                            </TeamList>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default connect(Infography);

const containerStyles = ({decoColor})=>css`
    position: relative;
    &:before{
        content: '';
        position: absolute;
        left: 50%;
        top: 25%;
        width: 70%;
        padding-bottom: 70%;
        height: 0;
        background-color: ${decoColor};
        border-radius: 50%;
    }
`;

const Title = styled.h2`
    ${({color})=>css`
        color: ${color};
        text-align: center;
        text-transform: capitalize;
        margin-bottom: 4rem;
    `}
`;

const Description = styled.p`
    text-align: justify;
    max-width: 75rem;
    margin: 0 auto;
    margin-bottom: 8rem;
`;

const TeamList = styled(Row)`
    padding: 0;
    margin: 0;
`;


const Item = styled(Col)`
    list-style: none;
    margin-bottom: 4rem;
    z-index: 1;
`;

const ModalBody = styled.div``;

const PersonTitle = styled.h2`
    ${({color="blue"})=>css`
        color: ${color};
        text-align: center;
    `}
`;

const PersonJobTitle = styled.p`
    text-align:center;
`;

const PersonAvatar = styled.div`
    border-radius: 50%;
    max-width: 25rem;
    margin: 0 auto;
    overflow: hidden;
`;

const PersonBio = styled.div``;
