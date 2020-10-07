import { connect, styled, css } from "frontity";
import React, {useState} from "react";
import {Containers, Rows, Cols, Section, mq} from "../../layout";
import Button from "../../button";

const Contact = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const page = state.source[data.type][data.id];

    const { home_contact_form } = page.meta_box
    
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

        const response = await fetch(`${state.source.api}/contact-form-7/v1/contact-forms/${home_contact_form}/feedback`, {
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
            <Section>
                <Container>
                    <Row>
                        <Col size={12} sizeSM={10} sizeMD={8} mxAuto>
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
                </Container>
            </Section>
        </>
    )
}

export default connect(Contact);

const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const Form = styled.form`
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