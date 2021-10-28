import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FormRegistrate from "./FormRegistrate";
import linea from "../assets/images/linea.png";
import google from "../assets/images/google.png";

function Registrate() {
    return (
        <>
           <Header/>
           {/* <div>
                <FormRegistrate/>
                <img src={linea} alt="" width="1000" height="5" />
                <BoxButton>
                    <Button class="submit"> 
                        <img src={google} alt="" width="71" height="64" />
                        Iniciar sesión con Google 
                    </Button>
                </BoxButton>
           </div> */}
           <Footer/>
        </>
    )
}

export default Registrate