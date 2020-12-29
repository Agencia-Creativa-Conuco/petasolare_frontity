import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import FeaturedMedia from "../../featured-media";

const Info = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const {
        title,
        featured_media
    } = page;
    
    const {
        service_description,
        service_logo
    } = page.meta_box;

    const Html2React = libraries.html2react.Component;

    return (
        <>
            <Section>
                <Container>
                    <Row alignCenter>
                        <Col size={12} sizeMD={6}>
                            <Content>
                                <Description><Html2React html={service_description}/></Description>
                            </Content>
                        </Col>
                        <Col size={12} sizeMD={6}>
                            <MediaContainer>
                                <FeaturedMedia media={service_logo[0]} size="100%" bgColor="transparent"/>
                            </MediaContainer>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default connect(Info);

const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const MediaContainer = styled.div``;

const Content = styled.div`
    margin-bottom: 4rem;
`;

const Title = styled.h2``;
    
const Description = styled.div``;