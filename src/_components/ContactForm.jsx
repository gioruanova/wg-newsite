import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const Titles = styled.h1`
  color: white;
  font-size: ${(props) => props.theme.sizeMaintTitles};
  font-family: ${(props) => props.theme.generalFont};
  background-color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  transition: 1s;
  width: 100%;
  border-radius: 0.2rem;
`;
const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalTextFont};
    font-weight: 400;
    transition: 1s;
    line-height: 1.5rem;
    word-break: break-word;
    word-spacing: 0.1rem;
    text-align:center;
    padding:0;
`;

const InputName = styled.label`
  color: ${(props) => props.theme.generalTextColor};
  width: 100%;
  text-align: ${isMobile ? "center" : "center"};
  transition: 0.5s;
`;

const MainContent = styled.div`
  width: auto;
  transition: 1s;
  align-items: center;
  text-align: center;
  align-content: center;
  margin: ${isMobile ? "0 1rem 0 rem;" : "0 20rem 0 20rem;"};
`;

const FormText = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalTextFont};
  margin: 0 0 0 0;
  font-weight: 400;
    transition: 1s;
    line-height: 1.5rem;
    word-break: break-word;
    word-spacing: 0.1rem;
    text-align:center;
    padding:0;
`;

const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 0 4rem 0;
`;

const InputContact = styled.input`
  width: 100%;
  margin: 0.5rem 0;
  border: none;
  border-radius: 7px;
  padding-left: 0.5rem;
  height: 35px;
  transition: 1s;
  ::placeholder {
    color: grey;
  }
`;

const Checkbox = styled.input`
  margin: 0 0.5rem;
  border: none;
  border-radius: 7px;
  padding-left: 0.5rem;
  transition: 1s;
`;

const InputContactdrill = styled.select`
  background-color: white !important;
  width: 100%;
  height: 35px;
  margin: 0.5rem 0;
  border: none;
  border-radius: 7px;
  padding-left: 0.5rem;
  font-family: "Cairo", sans-serif;
  -webkit-transition: all 0.2s;
  transition: 1s;
  ::placeholder {
    color: grey;
  }
`;

const InputContact2 = styled.textarea`
  width: ${isMobile ? "100%" : "20rem"};
  margin: 0.5rem 0 0 0;
  border: none;
  border-radius: 7px;
  padding-left: 0.5rem;
`;

const InputContactMessage = styled(InputContact2)`
  resize: none;
  height: 16rem;
  margin-bottom: 1rem;
  transition: 1s;
  ::placeholder {
    color: grey;
  }
`;
const OptionField = styled.option`
  height: 10rem;
  ::placeholder {
    color: grey;
  }
`;

const ButtonContact = styled.button`
  width: 100%;
  height: auto;
  margin: 1rem 0;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.backgroundButtons};
  font-family: ${(props) => props.theme.generalTextFont};
  color: ${(props) => props.theme.textButtonsColor};
  border: none;
  border-radius: 7px;
  text-transform: uppercase;
  transition: 400ms;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colorLines};
  }
  &:active {
    background-color: white;
  }
`;

const GridForm = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  gap: ${isMobile ? "" : "1rem"};
  margin-top: 1rem;
`;

AOS.init();

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g2q042e", //*aca va el service id (en email services) emailjs  - old >  service_s5ifb5k
        "template_acc12fo", //*aca va el template(en email templates) id emailjs template_acc12fo - old > template_8em7vxc
        e.target,
        "83AbtDKdOqoZPDZVt" //*aca va el User ID del API KEY (dentro de integration) id emailjs - old > VTH5mH3vXrPPAKkdB
      )
      .then((result) => {
        e.target.reset();
        alert("Mensaje enviado exitosamente!");
      })
      .catch((error) => alert("Error en el envio"));
  }
  return (
    <>
      <Titles>Contacto</Titles>
      <MainContent>
        <FormContact id="form-contacto" onSubmit={sendEmail}>
          <Paragraphs>
            Realiza tu consulta cotización, reserva de turnos, compra de obras,
            clases de música, y suscribite al newsletter para participar de
            sorteos y recibir novedades sobre exposiciones, eventos y más.
          </Paragraphs>
          <GridForm>
            <div>
              <div>
                <InputName>Nombre</InputName>
                <InputContact
                  type="text"
                  name="name"
                  id="namecontact"
                  placeholder="Nombre*"
                  required
                ></InputContact>
              </div>

              <div>
                <InputName>Email</InputName>
                <InputContact
                  type="email"
                  name="email"
                  placeholder="E-Mail*"
                  id="email"
                  required
                ></InputContact>
              </div>
              <div>
                <InputName>Whatsapp</InputName>
                <InputContact
                  type="tel"
                  name="whatsapp"
                  placeholder="Whatsapp"
                  id="phoneField"
                ></InputContact>
              </div>

              <div>
                <InputName>Tipo de consulta</InputName>
                <InputContactdrill
                  type="text"
                  name="subject"
                  id="subject"
                  required
                >
                  <OptionField className="Special">
                    Walter Gandini en vivo | 13/05 | Sorteo
                  </OptionField>
                  <OptionField className="Special">
                    Turnos Semana Sailor | 13/05 - 20/05 |{" "}
                  </OptionField>
                  <OptionField>Clases de armónica</OptionField>
                  <OptionField>Turnos Tattoo</OptionField>
                  <OptionField>Musica</OptionField>
                  <OptionField>Pintura</OptionField>
                  <OptionField>Plastica</OptionField>
                  <OptionField>Otros</OptionField>
                </InputContactdrill>
              </div>
            </div>

            <div>
              <div>
                <InputName>Mensaje</InputName>
                <InputContactMessage
                  rows="6"
                  placeholder="Mensaje (recorda ingresar el código si se trata de alguna promo o evento)*"
                  id="message"
                  name="message"
                  required
                ></InputContactMessage>
              </div>
            </div>
          </GridForm>
          <CheckboxContainer>
            <Checkbox
              name="checkbox"
              type="checkbox"
              value="se ha solicitado la suscripcion al newsletter y"
            ></Checkbox>
            <FormText>Suscripción al newsletter </FormText>
          </CheckboxContainer>
          <div>
            <ButtonContact type="submit" value="Submit Form">
              Enviar
            </ButtonContact>
            <FormText>* campos mandatorios</FormText>
          </div>
        </FormContact>
      </MainContent>
    </>
  );
};

export default ContactForm;
