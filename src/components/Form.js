import React, { useState, useEffect } from "react";
import { BoxForm, WrapperForm } from "../stylesComponents/FormStyle";
import bienvenida from "../assets/images/bienvenida.png";
import bienvenida2 from "../assets/images/bienvenida2.png";
import FormLogin from "./FormLogin";
import FormRegister from "../components/FormRegistrate";
import Header from "./Header";
import Footer from "./Footer";

function Form(props) {
  const [isRegister, setIsRegister] = useState(false)

  useEffect(() => {
    setIsRegister(props.isRegister);
    return () => {
      // cleanup
    };
  }, [props.isRegister]);

  return (
    <>
      <Header />
      {isRegister ? (
        <BoxForm register>
          <img src={bienvenida2} alt="" width="1000" height="70" />
          <WrapperForm>
            <FormRegister />
          </WrapperForm>
        </BoxForm>
      ) : (
        <BoxForm>
          <img src={bienvenida} alt="" width="700" height="70" />
          <WrapperForm>
            <FormLogin />
          </WrapperForm>
        </BoxForm>
      )}
      <Footer />
    </>
  );
}

export default Form;
