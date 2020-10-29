import { connect, styled, css } from "frontity";
import React, {useState} from "react";
import {Containers, Rows, Cols, mq} from "./layout";
import Button from "./button";
import { useForm } from "react-hook-form";

const ContactForm = ({state, formID, className}) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = async data => {
        setFormSubmiting(true);

        const form = new FormData();

        Object.entries(data).map(([key, value])=>{
            form.append(key, value);
        })

        const response = await fetch(`${state.source.api}/contact-form-7/v1/contact-forms/${formID}/feedback`, {
            "method": "POST",
            "body" : form
        });

        if (response.ok){
            const res = await response.json();
            // console.log(response, res);

            if(res.status == "mail_sent"){
                setErrorMessages([]);
                setSubmited(true);
            }
            else{
                setErrorMessages(res.invalid_fields);
            }
            setFormSubmiting(false);
        }
        else{
            // console.log(response.status);
            setFormSubmiting(false);
        }
    };

    const [isFormSubmiting, setFormSubmiting] = useState(false);
    const [hasSubmited, setSubmited] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    return !hasSubmited? (
      <Form onSubmit={handleSubmit(onSubmit)} {...{className}}>
        <Row>
          <Col size="12" >
              <Input 
                  type="text" 
                  name="your-name" 
                  placeholder="Nombre" 
                  disabled={isFormSubmiting}
                  ref={register({
                      required : "Este campo es requerido",
                  })}
              />
              {
                  errors["your-name"]? (
                      <InputError>{errors["your-name"].message}</InputError>
                  ):null
              }
          </Col>
          <Col size="12" >
              <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  disabled={isFormSubmiting}
                  ref={register({
                      required : "Este campo es requerido",
                      pattern : {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Por favor introduzca una dirección de correo válida"
                      }
                  })}
              />
              {
                  errors["email"]? (
                      <InputError>{errors["email"].message}</InputError>
                  ):null
              }
          </Col>
          <Col size="12" >
              <Input 
                  type="tel" 
                  name="tel" 
                  placeholder="Teléfono (XXX-XXX-XXXX)" 
                  disabled={isFormSubmiting}
                  ref={register({
                      pattern : {
                          value : /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                          message : "Por favor introduzca un número de teléfono válido"
                      }
                  })}
              />
              {
                  errors["tel"]? (
                      <InputError>{errors["tel"].message}</InputError>
                  ):null
              }
          </Col>
          <Col size="12" >
              <Message 
                  name="message" 
                  placeholder="Mensaje" 
                  disabled={isFormSubmiting}
                  ref={register({
                      required : "Este campo es requerido"
                  })}
              />
              {
                  errors["message"]? (
                      <InputError>{errors["message"].message}</InputError>
                  ):null
              }
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
        </Row>
      </Form>
    ) : (
      <MessageBox>
          <MessageTitle color={state.theme.colors.primary.base}>Mensaje enviado</MessageTitle>
          <MessageText color={state.theme.colors.primary.base}>Gracias por contactarnos. Tratamos de responder lo más rápido posible.</MessageText>
      </MessageBox>
    )
}

export default connect(ContactForm);

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const Form = styled.form`
  ${Containers}
  border-radius: 2rem;
  box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
  background-color: white;
  padding: 4rem 4rem;
  margin: 0;
  ${mq.md}{
    padding: 4rem 4rem;
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

const InputError = styled.p`
    color: red;
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