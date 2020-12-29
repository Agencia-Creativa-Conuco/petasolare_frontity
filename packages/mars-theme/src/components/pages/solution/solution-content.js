import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import Button from "../../button";

const Contact = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const {
        content = ""
    } = page;
    
    const Html2React = libraries.html2react.Component;

    return content !== ""?(
        <>
            <Section>
                <Wrapper decoColor={state.theme.colors.primary.dark}>

                </Wrapper>
                <Container>
                    <Row>
                        <Col size={12} sizeSM={10} sizeMD={8} mxAuto>
                        <Html2React html={content.rendered} />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    ):null
}

export default connect(Contact);

const Wrapper = styled.div`
    ${({decoColor})=>css`
        position: relative;
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
