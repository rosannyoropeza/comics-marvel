import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {BoxHome} from "../stylesComponents/HomeStyles";

function Home() {
    const urlMarvel="https://gateway.marvel.com/v1/public/comics?&limit=10&";

  //CLAVES  QUE SE USARAN PARA CONECTAR A LA API DE MARVEL
  const apikey = "b7068376d900bcebfd7e95228f6830c7";
  const ts = 3000;
  const hash = "61dab4049ec3ae40beb72b45e06f608c";
  const options = `apikey=${apikey}&ts=${ts}&hash=${hash}`;

  //PETICION 
  fetch(urlMarvel + options)
  .then(response => response.json())
  .then(data => console.log(data));

  return (
    <BoxHome>
      <Header />
      <Main/>
      <Footer/>
    </BoxHome>
  );
}

export default Home;
