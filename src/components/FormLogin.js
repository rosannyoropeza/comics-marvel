import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import InputForm from "./Input";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import {
  BoxFormUser,
  BoxButton,
  Button,
  MessageExit,
  MessageError,
  Divlinea,
  BoxLinea,
  DivO,
} from "../stylesComponents/FormularioStyle";
import { login, registerWithGoogle } from "../firebase/Firebase";
import { useHistory } from "react-router";


function FormUsers() {
  const [email, setEmail] = useState({ campo: "", valid: null });
  const [password, setPassword] = useState({ campo: "", valid: null });
  const [formValid, setFormValid] = useState(null);
  let history = useHistory();

  //PARA VALIDAR LOS INPUTS
  const expresiones = {
    // username: /^[a-zA-Z0-9_-]{4,16}$/, //LETRAS, NÚMEROS, GUION Y GUION BAJO
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, //4 A 12 DIGITOS
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "true" && password === "true") {
      setFormValid(true);
      setEmail({ campo: "", valid: null });
      setPassword({ campo: "", valid: null });
    } else {
      setFormValid(false);
    }

    login(email.campo, password.campo)
    .then(() => {
      history.push("/Comics");
    });
  };

  return (
    <div>
      <BoxFormUser action="" onSubmit={onSubmit}>
        <InputForm
          state={email}
          changeStatus={setEmail}
          type="email"
          placeholder="Ingrese correo electrónico"
          name="email"
          paragraphError="Debe ingresar un correo válido ej: xxxx@xxxx.com"
          expresionRegular={expresiones.email}
        />

        <InputForm
          state={password}
          changeStatus={setPassword}
          type="password"
          placeholder="Contraseña"
          name="password"
          paragraphError="La contraseña tiene que ser de 4 a 12 dígitos."
          expresionRegular={expresiones.password}
        />

        <BoxButton>
          <Button type="submit">Iniciar Sesión</Button>
          {formValid === true && (
            <MessageExit>Formulario enviado exitosamente!</MessageExit>
          )}
        </BoxButton>

        <div>
          {!formValid === false && (
            <MessageError>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </MessageError>
          )}
        </div>
      </BoxFormUser>

      <BoxLinea>
        <Divlinea />
        <DivO>o</DivO>
        <Divlinea />
      </BoxLinea>

      <BoxButton>
        <Button google onClick={registerWithGoogle}>
          <FontAwesomeIcon icon={faGoogle} /> &nbsp;
          Inicia Sesión con Google
        </Button>
      </BoxButton>

      <BoxButton>
        <Link to="/Registrate">
          <Button link>¿No tienes una cuenta? Registrate </Button>
        </Link>
      </BoxButton>
    </div>
  );
}

export default FormUsers;
