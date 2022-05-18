import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import ContactForm from "../../_components/ContactForm";
import { MainContent } from "../../_components/Styles";

// ------------------------------------------------------------

AOS.init();
const ContactNavigation = () => {
  return (
    <MainContent
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <ContactForm />
    </MainContent>
  );
};

export default ContactNavigation;
