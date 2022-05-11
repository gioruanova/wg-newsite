import React from "react";
import ContactForm from "../../_components/ContactForm";
import { MainContent } from "../../_components/Styles";

const ContactNavigation = () => {
  return (
    <MainContent className="animate__animated animate__fadeInDown animate__slow">
      <ContactForm />
    </MainContent>
  );
};

export default ContactNavigation;
