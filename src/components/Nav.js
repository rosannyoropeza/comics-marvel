import React from "react";
import { Link } from "react-router-dom";
import marvel from "../assets/images/Marvel_Logo.png";
import {
  NavbarWrapper,
  MenuButtonWrapper,
  WrapperLink,
} from "../stylesComponents/HeaderStyle";

function Nav(props) {
  return (
    <NavbarWrapper>
      <Link to="/">
        <img src={marvel} alt="" width="120" height="50" />
      </Link>

      <WrapperLink>
        <MenuButtonWrapper>
          <Link to="/Login">
            <ul>Login</ul>
          </Link>
        </MenuButtonWrapper>

        <MenuButtonWrapper>
          <Link to="/Registrate">
            <ul>Registrate</ul>
          </Link>
        </MenuButtonWrapper>
        
      </WrapperLink>
    </NavbarWrapper>
  );
}

export default Nav;
