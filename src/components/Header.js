import React from "react";
import { BoxHeader } from "../stylesComponents/HeaderStyle";
import Navegar from "./Nav";

function Header(props) {
    return (
        <BoxHeader>
            <Navegar/>
        </BoxHeader>
    );
}

export default Header;

