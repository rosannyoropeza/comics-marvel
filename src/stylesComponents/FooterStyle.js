// import React from "react";
import styled from "styled-components";

let colorBlack = `#0F0E0E`;
let colorWhite = `#FFFFFF`;


export const BoxFooter = styled.div`
  padding: 3rem 3rem;
  background: ${colorWhite};
  bottom: 0;
  width: 100vw;
  height: 24vh;
  position: absoluta;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  text-align: center;
  
  img{
    margin: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2em;
  color: ${colorBlack};
  font-weight: bold;
`;
