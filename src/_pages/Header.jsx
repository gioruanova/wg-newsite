import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import AOS from "aos";
import "aos/dist/aos.css";

import { HeaderArray } from "../_components/DataArray";

// ------------------------------------------------------------

const Titles = styled.h1`
  color: ${(props) => props.theme.mainTitlesColor};
  font-family: ${(props) => props.theme.tattooStudioTitle};
  font-size: 4rem;
  line-height: 2.7rem;
  margin: 0;
  transition: 1s;
`;

const SubTitles = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-family: ${(props) => props.theme.generalTextFont};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: ${isMobile ? "2rem" : "1.6rem"};
  letter-spacing: ${isMobile ? "" : "7px"};
  margin: 0;
  transition: 1s;
`;

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  row-gap: 1rem;
`;

const HeaderContainer = styled.div`
  margin: ${isMobile ? "0rem 0 2rem 0;" : "2rem 0 2rem 0;"}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderContainerMobile = styled.div`
  margin: 2rem 0 2rem 0;
`;

AOS.init();
function Item({
  title1,
  title2,
  headerimg,
  headersubTitle1,
  headersubTitle2,
  headersubTitle3,
  headersubTitle4,
}) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${headerimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 14rem;
    height: ${isMobile ? "15rem" : "15rem"};
    border-radius: 5px;
    margin: 1rem;
    filter: sepia(1);
    -webkit-mask-image: linear-gradient(
      75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 4s linear infinite;

    @keyframes shine {
      from {
        -webkit-mask-position: 150%;
      }
      to {
        -webkit-mask-position: -50%;
      }
    }
  `;

  return (
    <>
      {isMobile ? (
        <>
          <HeaderContainerMobile>
            {" "}
            <Titles>{title1}</Titles>
            <Titles>
              <b>{title2}</b>
            </Titles>
          </HeaderContainerMobile>

          <HeaderContainer>
            <TitlesContainer>
              <div>
                <SubTitles>{headersubTitle1}</SubTitles>
                <SubTitles>{headersubTitle2}</SubTitles>
                <SubTitles>{headersubTitle3}</SubTitles>
                <SubTitles>{headersubTitle4}</SubTitles>
              </div>
            </TitlesContainer>
            <ImgContainer src={headerimg} />
          </HeaderContainer>
        </>
      ) : (
        <HeaderContainer>
          <TitlesContainer>
            <div>
              {" "}
              <Titles>{title1}</Titles>
              <Titles>
                <b>{title2}</b>
              </Titles>
            </div>
            <div>
              <SubTitles>{headersubTitle1}</SubTitles>
              <SubTitles>{headersubTitle2}</SubTitles>
              <SubTitles>{headersubTitle3}</SubTitles>
              <SubTitles>{headersubTitle4}</SubTitles>
            </div>
          </TitlesContainer>
          <ImgContainer src={headerimg} />
        </HeaderContainer>
      )}
    </>
  );
}

const Header = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-delay="1300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      {HeaderArray.map((e, HeaderId) => (
        <Item
          key={HeaderId}
          title1={e.HeaderTitle1}
          title2={e.HeaderTitle2}
          headerimg={e.HeaderImg}
          headersubTitle1={e.HeaderSubTitle1}
          headersubTitle2={e.HeaderSubTitle2}
          headersubTitle3={e.HeaderSubTitle3}
          headersubTitle4={e.HeaderSubTitle4}
        />
      ))}
    </div>
  );
};

export default Header;

//------------------------------------------------------------------------------------------------------------------------------------------------
