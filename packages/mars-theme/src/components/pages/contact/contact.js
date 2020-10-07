import { connect, styled, css } from "frontity";
import React, {useState} from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import FeaturedMedia from "../../featured-media";
import Button from "../../button";
import Link from "../../link";
import {h3, h4} from "../../styles/tipography";

const About = ({state, actions, libraries}) => {

    const settings = state.source.settings;

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const {
        featured_media,
    } = page;

    const {
        contact_email,
        contact_phone,
        contact_address,
        contact_form
    } = page.meta_box;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isFormSubmiting, setFormSubmiting] = useState(false);
    const [hasSubmited, setSubmited] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const sendForm = async (e) =>{
        e.preventDefault();

        setFormSubmiting(true);

        const form = new FormData();
            form.append("your-name", name);
            form.append("email", email);
            form.append("tel", phone);
            form.append("message", message);

        const response = await fetch(`${state.source.api}/contact-form-7/v1/contact-forms/${contact_form}/feedback`, {
            "method": "POST",
            "body" : form
        });

        if (response.ok){
            const data = await response.json();
            // console.log(response, data);

            if(data.status == "mail_sent"){
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                setErrorMessages([]);
                setSubmited(true);
            }
            else{
                setErrorMessages(data.invalid_fields);
            }
            setFormSubmiting(false);
        }
        else{
            // console.log(response.status);
            setFormSubmiting(false);
        }
    }

    const handleChange = (e, setValue) => {
        setValue(e.target.value);
    }

    return (
        <>
            <Section spaceTopNone>
                <Wrapper>
                    <MediaContainer>
                        <FeaturedMedia media={featured_media} size="100%" sizeSM="56.25%" heightMD="100%" position="35% 50%"/>
                    </MediaContainer>
                    <Container fluid>
                        <Row>
                            <InfoContainer size={12} sizeLG={6} mlAuto>
                                <Row>
                                    <InfoWrapper size={12} sizeSM={10} sizeSM={10} sizeLG={10} sizeXL={8} mxAuto>
                                        <Row>
                                            <Col>
                                                <Title color={state.theme.colors.primary.base}>Contáctanos</Title>
                                            </Col>
                                            {
                                                settings.emails?(
                                                    <Col size={12}>
                                                        <Info>
                                                            <InfoLabel>Email</InfoLabel>
                                                            <InfoDescription>
                                                                {
                                                                    settings.emails.map(([email], index)=>{
                                                                        return (
                                                                            <EmailLink index={index} link={`mailto:${email}`}>{email}</EmailLink>
                                                                        )
                                                                    })
                                                                }
                                                            </InfoDescription>
                                                        </Info>
                                                    </Col>
                                                ):null
                                            }
                                            {
                                                settings.phone?(
                                                    <Col size={12}>
                                                        <Info>
                                                            <InfoLabel>Teléfono</InfoLabel>
                                                            <InfoDescription>
                                                                <Link link={`tel:+${settings.phone}`}>{settings.phone}</Link>
                                                            </InfoDescription>
                                                        </Info>
                                                    </Col>
                                                ):null
                                            }
                                            {
                                                settings.address?(
                                                    <Col size={12}>
                                                        <Info>
                                                            <InfoLabel>Dirección</InfoLabel>
                                                            <InfoAddress>
                                                                <Link link={settings.location || state.router.link}>{settings.address}</Link>
                                                            </InfoAddress>
                                                        </Info>
                                                    </Col>
                                                ):null
                                            }
                                        </Row>
                                        <Row>
                                            <Col size={12}>
                                            {
                                                !hasSubmited? (
                                                    
                                                    <Form onSubmit={(e)=> sendForm(e)}>
                                                        <Col size="12" >
                                                            <Input 
                                                                type="text" 
                                                                id="name" 
                                                                name="your-name" 
                                                                placeholder="Nombre" 
                                                                required 
                                                                disabled={isFormSubmiting}
                                                                value={name}
                                                                onChange={(e) => handleChange(e, setName)}/>
                                                        </Col>
                                                        <Col size="12" >
                                                            <Input 
                                                                type="email" 
                                                                id="email" 
                                                                name="email" 
                                                                placeholder="Email" 
                                                                required 
                                                                disabled={isFormSubmiting}
                                                                value={email}
                                                                onChange={(e) => handleChange(e, setEmail)}/>
                                                        </Col>
                                                        <Col size="12" >
                                                            <Input 
                                                                type="tel" 
                                                                id="tel" 
                                                                name="tel" 
                                                                placeholder="Teléfono" 
                                                                disabled={isFormSubmiting}
                                                                value={phone}
                                                                onChange={(e) => handleChange(e, setPhone)} 
                                                            />
                                                        </Col>
                                                        <Col size="12" >
                                                            <Message 
                                                                id="message" 
                                                                name="message" 
                                                                placeholder="Mensaje" 
                                                                disabled={isFormSubmiting}
                                                                value={message}
                                                                onChange={(e) => handleChange(e, setMessage)} />
                                                        </Col>
                                                        {
                                                            errorMessages.length > 0 && (
                                                                <Col size="12">
                                                                    <ErrorMessages>
                                                                        {
                                                                            errorMessages.map((item,index)=>{
                                                                                return (
                                                                                    <ErrorMessage key={index}>{item.message}</ErrorMessage>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ErrorMessages>
                                                                </Col>
                                                            )
                                                        }
                                                        <ButtonBox>
                                                            <Button 
                                                                type="submit" 
                                                                disabled={isFormSubmiting}
                                                            >
                                                            {
                                                                isFormSubmiting? "Enviando..." : "Contáctanos"
                                                            }    
                                                            </Button>
                                                        </ButtonBox>
                                                    </Form>
                                                ) : (
                                                    <MessageBox>
                                                        <MessageTitle color={state.theme.colors.primary.base}>Mensaje enviado</MessageTitle>
                                                        <MessageText color={state.theme.colors.primary.base}>Gracias por contactarnos. Tratamos de responder lo más rápido posible.</MessageText>
                                                    </MessageBox>
                                                )
                                            }
                                            </Col>
                                        </Row>
                                    </InfoWrapper>
                                </Row>
                            </InfoContainer>
                        </Row>
                    </Container>
                </Wrapper>
            </Section>
        </>
    )
}

export default connect(About);

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

const MediaContainer = styled.div`
    ${mq.lg}{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;

const InfoContainer = styled.div`
    ${Cols}
    background-color: white;
    padding-bottom: 15vw;
    padding-top: 5vw;
    box-shadow: 0 0 2rem rgba(0,0,0,0.15);
    ${mq.lg}{
        padding-bottom: 10vw;
        padding-top: 10vw;
        clip-path: ellipse(60% 100% at 60% 50%);
        padding-top: 10vw;
    }
`;

const InfoWrapper = styled.div`
    ${Cols}
`;

const Title = styled.h1`
    ${({color=""})=>`
        color: ${color};
        margin-bottom: 4rem;
    `}
`;

const Info = styled.div`
    margin-bottom: 4rem;
`;

const InfoLabel = styled.p`
    ${h3}
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

const InfoDescription = styled.p`
    ${h4}
    a{
        text-decoration: none;
    }
`;

const EmailLink = styled(Link)`
    display: block;
`;

const InfoAddress = styled.address`
    ${h4}
    font-style: initial;
    white-space: pre;
    a{
        text-decoration: none;
    }
`;

const Form = styled.form`
    ${Rows}
    border-radius: 2rem;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    background-color: white;
    padding: 4rem 2rem;
    margin: 0;
`;

const Input = styled.input`
    ${({color="#F5F5F5"})=>css`
        display: block;
        width: 100%;
        margin-bottom: 2rem;
        padding: 2rem;
        border-radius: 2rem;
        background-color: ${color};
        border: initial;
        outline: initial;
    `}
`;

const Message = styled.textarea`
    ${({color="#F5F5F5"})=>css`
        display: block;
        width: 100%;
        height: 12.5rem;
        margin-bottom: 2rem;
        padding: 2rem;
        border-radius: 2rem;
        background-color: ${color};
        border: initial;
        outline: initial;
    `}
`;

const ButtonBox = styled.div`
    text-align: center;
    margin-top: 4rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0, 50%);
    width: 100%;
`;


const ErrorMessages = styled.div``;

const ErrorMessage = styled.p`
    color: red;
`;

const MessageBox = styled.div`
    ${Rows}
    border-radius: 2rem;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    background-color: white;
    padding: 2rem;
    margin: 0;
    ${mq.sm}{
        padding: 4rem;
    }
    ${mq.lg}{
        padding: 8rem;
        border-radius: 4rem;
    }
`;

const MessageTitle = styled.h3`
    ${({color})=>css`
        color: ${color};
        text-align: center;
        width: 100%;
        margin-bottom: 2rem;
    `}
`;

const MessageText = styled.p``;