import { connect, styled, css } from "frontity";
import React from "react";
import FeaturedMedia from "../../featured-media";
import {Containers, Rows, Cols, Section, mq} from "../../layout";

const Cover = ({state, actions, libraries}) => {

    return (
        <>
            <Section spaceNone>
                <Container fluid>
                    <CoverContainer color={state.theme.colors.primary.base}>
                        <FeaturedMedia media={14} height="100%"/>
                    </CoverContainer>
                    <Row>
                        <Col size={12} sizeSM={10} sizeMD={8} sizeLG={6}>
                            <Content>
                                <Title>Nuestro Proyecto</Title>
                                <Copy>Somos un equipo de ingenieros que disfruta de innovar día a día, encontrando un equilibrio entre la creatividad y la razón. Petasolare nace del deseo enorme de encontrar nuevas soluciones a los retos cotidianos. Desde que entendimos los beneficios ambientales y sociales que proporcionan la energía fotovoltaica, nos pareció más que lógico compartirlo, por lo que estamos comprometidos con la tarea de llevar este sistema a la mayor cantidad de espacios donde sea posible.</Copy>
                            </Content>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default connect(Cover);

const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
    z-index: 2;
`;

const Content = styled.div`
    positiong: relative;
    z-index: 2;
    padding: 40% 0;
    ${mq.sm}{
        padding: 40% 3rem;
    }
    ${mq.md}{
        padding: 40% 4rem;
    }
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Copy = styled.p`
    text-align: justify;
    color: white;
`;

const CoverContainer = styled.div`
    ${({color})=>css`
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        z-index: 1;
        &:before{
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: ${color};
            opacity: 0.3;
            z-index: 1;
            ${mq.lg}{
                right: 50%;
                width: 65%;
                height: 0%;
                padding-bottom: 65%;    border-radius: 50%;
                transform: translate(00%, -50%);
                top: 50%;
            }
        }
        &:after{
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 500%;
            height: 0;
            padding-bottom: 500%;
            background-color: white;
            border-radius: 50%;
            transform-origin: center center;
            transform: translate(-50%, 98%);
            z-index: 2;
        }
    `}
`;