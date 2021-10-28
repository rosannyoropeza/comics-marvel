import React from "react";
import giphy from "../assets/images/giphy.gif";
//import spider_man from "../assets/images/spider_man.png";
// import doctor_Strange2 from "../assets/images/doctor_Strange2.png";
// import eternals from "../assets/images/eternals.png";
import { BoxMain, WrapperMain, Wrapper } from "../stylesComponents/MainStyle";
import Card from "./Card";

function Main() {
  const arrMovies = [
    {
      title: "Spider-man",
      image: "https://www.cinemascomics.com/wp-content/uploads/2021/07/Marvel-Studios-sufrio-mucho-cuando-casi-pierde-a-Spider-Man-960x720.jpg.webp",
      url:"https://www.cinemascomics.com/fue-muy-complicado-llevar-a-spider-man-a-marvel-studios/"
    },
    {
      title: "Doctor Strange 2",
      image: "https://www.cinemascomics.com/wp-content/uploads/2021/10/Doctor-Strange-y-el-multiverso-de-la-locura-marvel-studios-2022-960x720.jpg.webp",
      url: "https://www.cinemascomics.com/problemas-para-doctor-strange-en-el-multiverso-de-la-locura-2022/"
    },
    {
      title: "Eternals",
      image: "https://www.cinemascomics.com/wp-content/uploads/2021/02/eternals-poster.jpg.webp",
      url: "https://www.cinemascomics.com/peliculas/los-eternos/"
    },
    {
      title: "Ghost Rider",
      image: "https://www.cinemascomics.com/wp-content/uploads/2020/05/ghost-rider-pelicula-serie-ucm-960x560.jpg.webp",
      url: "https://www.cinemascomics.com/ghost-rider-no-llegaria-por-ahora-al-ucm-de-acuerdo-a-su-creador/"
    },
  ];

  return (
    <BoxMain>
      <WrapperMain>
        <img src={giphy} alt="loading..." width="100%" height="100%" />
      </WrapperMain>
      <WrapperMain>
        <h1> Noticias de Peliculas de MARVEL</h1>
        <Wrapper>
            {
                arrMovies.map((movie,i) => 
                  <Card movie={movie} key={i}/>
                )
            }
        </Wrapper>
      </WrapperMain>
    </BoxMain>
  );
}

export default Main;
