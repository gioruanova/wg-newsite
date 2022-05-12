import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactForm from "../_components/ContactForm";

AOS.init();

const Contacto = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <ContactForm />
    </div>
  );
};

export default Contacto;
