import React, { useState } from "react";
import styled from "styled-components";

const ContactButtons = styled.button`
  width: 10rem;
  height: auto;
  margin: 0 0 1rem 0;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  border-radius: 0.4rem;
  transition: 400ms;
  color: ${(props) => props.theme.navigationLinksColor};
  font-size: ${(props) => props.theme.sizeGeneralText};
  font-family: ${(props) => props.theme.generalFont};
  font-weight: 300;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    color: ${(props) => props.theme.hooverLinks};
  }
`;

export default function Box({ title, content, children, show }) {
  const [collapsed, setCollapsed] = useState(false);
  const Component = content;

  return (
    <div className="animate__animated animate__backInLeft">
      <h1>{title}</h1>
      {(children && children) || (
        <>
          <div>
            <Component show={collapsed}></Component>
          </div>

          <ContactButtons onClick={() => setCollapsed(!collapsed)}>
            {(collapsed && <> Ver menos{" >"} </>) || <> Ver más{" >"} </>}
          </ContactButtons>
        </>
      )}
    </div>
  );
}
