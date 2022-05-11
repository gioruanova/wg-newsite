import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import AOS from "aos";
import "aos/dist/aos.css";
import { Sponsors } from "../_components/Messages";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

AOS.init();

const Marcas = () => {
  const ImgContainer = styled.img`
    height: ${isMobile ? "5rem" : "8rem"};
  `;

  const ImgDivContainer = styled.div`
    height: ${isMobile ? "5rem" : "8rem"};
    margin: 4rem 0 3rem 0;
  `;
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <div>
        <Carousel indicators={false} controls={false} interval={2500}>
          {Sponsors.map((Sponsors) => (
            <Carousel.Item key={Sponsors.SponsorId}>
              <ImgDivContainer>
                {" "}
                <a
                  target="blank"
                  href={Sponsors.SponsorUrl && <>Sponsors.SponsorUrl</>}
                  title={Sponsors.SponsorTitle}
                  rel="noreferrer"
                >
                  {" "}
                  <ImgContainer
                    src={Sponsors.SponsorImg}
                    alt={Sponsors.SponsorTitle}
                  />
                </a>
              </ImgDivContainer>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Marcas;
