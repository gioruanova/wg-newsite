import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { MusicArray } from "../DataArray";

// ------------------------------------------------------------

const ContainerContent = styled.div`
  margin: 2rem 0;
`;

const Titles = styled.h1`
  color: white;
  transition: 1s;
  font-size: ${isMobile ? "1.5rem" : "1.2rem"};
  font-family: ${(props) => props.theme.generalFont};
  background-color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  width: 100%;
  border-radius: 0.2rem;
  margin: 0 0 0.5rem 0;
  padding: 0.5rem;
`;

const BandMembersName = styled(Titles)`
  border-radius: 0rem;
  margin: 0;
`;

const ExternalLinks = styled.a`
  color: ${(props) => props.theme.textButtonsColor};
  text-decoration: none;
  font-family: ${(props) => props.theme.generalTextFont};
`;

export const ParagraphsCards = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalTextFont};
font-weight: 400;  
margin: 0 1rem 1rem 1rem;
text-align:justify;
transition: 1s;
`;

export const Paragraphs = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalFont};
font-weight: 400;  
transition:1s;
text-align:justify;
`;

function BandMembers({ name, memberimg, instagram, hash }) {
  const MemberCards = styled.div`
    display: flex;
    flex-direction: column;
    width: ${isMobile ? "auto" : "20rem"};
    border: 2px solid ${(props) => props.theme.colorLines};
    border-radius: 0.5rem;
    margin: 1rem;
    height: auto;
    transition: 1s;

    transition: 400ms;
    h2 {
      transition: 40ms;
      visibility: hidden;
    }
    &:hover {
      box-shadow: rgb(57 57 57 / 49%) 13px 12px 9px,
        rgb(48 48 48 / 93%) 2px 2px 9px;
      filter: none;
      h2 {
        visibility: inherit;
      }
    }
  `;

  const ImgContainer = styled.div`
    transition: 400ms;
    background-image: url(${memberimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 15rem;
    border-radius: 5px 5px 0 0;
    filter: sepia(0.9);
    &:hover {
      filter: none;
    }
  `;

  const HashContainer = styled.h2`
  transition: 400ms;
    margin: 0;
    color: ${(props) => props.theme.textButtonsColor};
    font-size: ${isMobile ? "0.8rem;" : "1rem;"}
    font-family: ${(props) => props.theme.generalFont};
    text-align: initial;
    padding-left: 0.5rem;
    background-color: ${(props) => props.theme.colorLines};
    
  `;

  return (
    <>
      <ContainerContent>
        <ExternalLinks
          href={instagram}
          rel="noreferrer"
          target="_blank"
          title="Instagram"
          aria-label="Instagram"
        >
          <MemberCards>
            {ImgContainer && (
              <ImgContainer img={memberimg}>
                <HashContainer>{hash}</HashContainer>
              </ImgContainer>
            )}
            {name && <BandMembersName>{name}</BandMembersName>}
          </MemberCards>
        </ExternalLinks>
      </ContainerContent>
    </>
  );
}

const BandMemberArray = () => {
  return (
    <>
      <>
        {MusicArray.slice(5).map((e, Name) => (
          <BandMembers
            key={Name}
            name={e.Name}
            memberimg={e.MemberImg}
            instagram={e.Instagram}
            hash={e.Hash}
          />
        ))}
      </>
    </>
  );
};

export default BandMemberArray;
