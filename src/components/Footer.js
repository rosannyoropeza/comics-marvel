import React from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import gorjeo from "../assets/images/gorjeo.png";
import {
  BoxFooter,
  Container,
  Column,
  Paragraph,
} from "../stylesComponents/FooterStyle";

function Footer() {
  return (
    <BoxFooter>
      <Container>
        <Paragraph> Visita la página oficial de Marvel</Paragraph>
        <Column>
          <img src={facebook} alt="" width="50" height="50" />
          <img src={instagram} alt="" width="50" height="50" />
          <img src={gorjeo} alt="" width="50" height="50" />
        </Column>
        <Paragraph> © 2021 Rosanny Oropeza. All rights reserved</Paragraph>
      </Container>
    </BoxFooter>
  );
}

export default Footer;
