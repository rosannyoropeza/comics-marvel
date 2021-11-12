import React from "react";
import { Link } from "react-router-dom";
import marvel from "../assets/images/Marvel_Logo.png";
import { logout } from "../firebase/Firebase";
import {
    NavbarWrapper,
    MenuButtonWrapper,
    WrapperLink,
    BoxUser,
    wraperUser
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
                    <BoxUser>
                        <span>
                            <Link to="/"> Mis favoritos </Link>
                        </span>
                        <hr width="1" size="50"/>
                        <span>{user.name}</span>
                        <wraperUser>
                            <img
                                src={user.photo}
                                // width="50"
                                // height="50"
                                alt=""
                            />
                        </wraperUser>
                        <button onClick={logout}>Cerrar Sesión </button>
                    </BoxUser>
                ) : (
                    <>
                        <MenuButtonWrapper>
                            <Link to="/Login">Login</Link>
                        </MenuButtonWrapper>

                        <MenuButtonWrapper>
                            <Link to="/Registrate">Registrate</Link>
                        </MenuButtonWrapper>
                    </>
                )}
            </WrapperLink>
        </NavbarWrapper>
    );
}

export default Nav;
