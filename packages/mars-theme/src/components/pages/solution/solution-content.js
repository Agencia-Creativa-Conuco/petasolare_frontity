import { connect, styled, css } from "frontity";
import React from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import Button from "../../button";

const Contact = ({state, actions, libraries}) => {

    const Html2React = libraries.html2react.Component;

    return (
        <>
            <Section>
                <Wrapper decoColor={state.theme.colors.primary.dark}>

                </Wrapper>
                <Container>
                    <Row>
                        <Col size={12} sizeSM={10} sizeMD={8} mxAuto>
                        <Html2React html={"Sin importar lo grande o pequeño que sea el proyecto en el que nos envolvemos, nuestro mayor deseo es brindar a cada cliente un servicio personalizado, donde la calidad, la funcionalidad y la belleza de cada trabajo esté garantizado."} />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default connect(Contact);

const Wrapper = styled.div`
    ${({decoColor})=>css`
        position: relative;
        &:before{
            content: '';
            position: absolute;
            left: 0%;
            top: 0%;
            width: 20%;
            padding-bottom: 20%;
            height: 0;
            background-color: ${decoColor};
            border-radius: 50%;
            transform: translate(-75%, 0%);
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
