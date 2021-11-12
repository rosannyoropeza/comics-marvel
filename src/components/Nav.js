import React from "react";
import { Link } from "react-router-dom";
import marvel from "../assets/images/Marvel_Logo.png";
import { logout } from "../firebase/Firebase";
import {
  NavbarWrapper,
  MenuButtonWrapper,
  WrapperLink,
} from "../stylesComponents/HeaderStyle";


function Nav(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <NavbarWrapper>
      <Link to="/">
        <img src={marvel} alt="" width="120" height="50" />
      </Link>

      <WrapperLink>
        {user ? (
          <>
            <span>{user.name}</span>
            <button onClick={logout}>Cerrar Sesión </button>
          </>
        ) : (
          <>
            <MenuButtonWrapper>
              <Link to="/Login">
                Login
              </Link>
            </MenuButtonWrapper>

            <MenuButtonWrapper>
              <Link to="/Registrate">
                Registrate
              </Link>
            </MenuButtonWrapper>
          </>
        )}
      </WrapperLink>
    </NavbarWrapper>
  );
}

export default Nav;
