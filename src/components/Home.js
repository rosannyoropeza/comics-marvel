import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {BoxHome} from "../stylesComponents/HomeStyles";

function Home() {
  
  return (
    <BoxHome>
      <Header />
      <Main/>
      <Footer/>
    </BoxHome>
  );
}

export default Home;
