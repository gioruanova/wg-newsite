import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { SponsorArray } from "../_components/DataArray";

// ------------------------------------------------------------

AOS.init();

const Brands = () => {
  const ImgContainer = styled.img`
    height: ${isMobile ? "5rem" : "7rem"};
  `;

  const ImgDivContainer = styled.div`
    height: ${isMobile ? "6rem" : "8rem"};
    margin: 3rem 0 0rem 0;
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
          {SponsorArray.map((SponsorArray) => (
            <Carousel.Item key={SponsorArray.SponsorId}>
              <ImgDivContainer>
                {" "}
                <a
                  target="blank"
                  href={SponsorArray.SponsorUrl && <>SponsorArray.SponsorUrl</>}
                  title={SponsorArray.SponsorTitle}
                  rel="noreferrer"
                >
                  {" "}
                  <ImgContainer
                    src={SponsorArray.SponsorImg}
                    alt={SponsorArray.SponsorTitle}
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

export default Brands;
