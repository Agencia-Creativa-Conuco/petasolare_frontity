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
    const [hasFormSendOk, setFormState] = useState(false);

    const sendForm = (e) =>{
        e.preventDefault();
        
        const data = new FormData();
        data.append("your-name", name);
        data.append("email", email);
        data.append("tel", phone);
        data.append("message", message);
         
         const xhr = new XMLHttpRequest();
         xhr.withCredentials = true;
         
         xhr.addEventListener("readystatechange", function () {
           if (this.readyState === this.DONE) {
                console.log(this.responseText);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                setFormState(true);
           }
         });
         
         xhr.open("POST", `${state.source.api}/contact-form-7/v1/contact-forms/${home_contact_form}/feedback`);
         
         xhr.send(data);
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
                                !hasFormSendOk? (
                                    
                                    <Form onSubmit={(e)=> sendForm(e)}>
                                        <Col size="12" >
                                            <Input 
                                                type="text" 
                                                id="name" 
                                                name="your-name" 
                                                placeholder="Nombre" 
                                                required 
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
                                                value={email}
                                                onChange={(e) => handleChange(e, setEmail)}/>
                                        </Col>
                                        <Col size="12" >
                                            <Input 
                                                type="tel" 
                                                id="tel" 
                                                name="tel" 
                                                placeholder="Teléfono" 
                                                value={phone}
                                                onChange={(e) => handleChange(e, setPhone)} 
                                            />
                                        </Col>
                                        <Col size="12" >
                                            <Message 
                                                id="message" 
                                                name="message" 
                                                placeholder="Mensaje" 
                                                value={message}
                                                onChange={(e) => handleChange(e, setMessage)} />
                                        </Col>
                                        <ButtonBox>
                                            <Button type="submit">Contáctanos</Button>
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
    `}
`;

const MessageText = styled.p``;