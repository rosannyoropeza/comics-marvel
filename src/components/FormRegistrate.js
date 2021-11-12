import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import InputForm from "./Input";
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
import { register, registerWithGoogle} from "../firebase/Firebase";
import firebaseApp from "../firebase/Config";
import { getAuth, updateProfile } from "firebase/auth";
import { useHistory } from "react-router";

function FormUsers(props) {
  const auth = getAuth(firebaseApp);
  const [username, setUsername] = useState({ campo: "", valid: null });
  const [email, setEmail] = useState({ campo: "", valid: null });
  const [password, setPassword] = useState({ campo: "", valid: null });
  const [formValid, setFormValid] = useState(null);
  let history = useHistory();

  const expresiones = {
    username: /^[a-zA-Z0-9_ ]{4,16}$/, //LETRAS y NÚMEROS
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{6,12}$/, //4 A 12 DIGITOS
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (username.valid === "true" && email === "true" && password === "true") {
      setFormValid(true);
      setUsername({ campo: "", valid: null });
      setEmail({ campo: "", valid: null });
      setPassword({ campo: "", valid: null });
    } else {
      setFormValid(false);
    }

    register(email.campo, password.campo, username.campo).then(() => {
      updateProfile(auth.currentUser, {
        displayName: username.campo, photoURL: "https://1000marcas.net/wp-content/uploads/2020/01/Avengers-Logotipo.jpg"
      }).then(() => {
        // Profile updated!
        history.pushState("/Login");
      }).catch((error) => {
        // An error occurred
        // ...
      });
    });
  };

  return (
    <div>
      <BoxFormUser action="" onSubmit={onSubmit}>
        <InputForm
          state={username}
          changeStatus={setUsername}
          type="text"
          placeholder="Username"
          name="username"
          paragraphError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener números y letras."
          expresionRegular={expresiones.username}
        />

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
          paragraphError="La contraseña tiene que ser de 6 a 12 dígitos."
          expresionRegular={expresiones.password}
        />

        <BoxButton>
          <Button type="submit">Registrate</Button>
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
          Registrate con Google
        </Button>
      </BoxButton>

      <BoxButton>
        <Link to="/Login">
          <Button link>¿Tienes una cuenta? Inicia sesión </Button>
        </Link>
      </BoxButton>
    </div>
  );
}

export default FormUsers;
