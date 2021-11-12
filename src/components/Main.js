import React, { useEffect } from "react";
import giphy from "../assets/images/giphy.gif";
//import spider_man from "../assets/images/spider_man.png";
// import doctor_Strange2 from "../assets/images/doctor_Strange2.png";
// import eternals from "../assets/images/eternals.png";
import { BoxMain, WrapperMain, Wrapper } from "../stylesComponents/MainStyle";
import Card from "./Card";

const urlMovies = "https://gateway.marvel.com/v1/public/stories?&limit=10&";

//CLAVES  QUE SE USARAN PARA CONECTAR A LA API DE MARVEL
const apikey = "b7068376d900bcebfd7e95228f6830c7";
const ts = 3000;
const hash = "61dab4049ec3ae40beb72b45e06f608c";
const options = `apikey=${apikey}&ts=${ts}&hash=${hash}`;


function Main() {
  const arrMovies = [];
  // const arrMovies = [
  //   {
  //     title: "Spider-man",
  //     image: "https://www.cinemascomics.com/wp-content/uploads/2021/07/Marvel-Studios-sufrio-mucho-cuando-casi-pierde-a-Spider-Man-960x720.jpg.webp",
  //     url:"https://www.cinemascomics.com/fue-muy-complicado-llevar-a-spider-man-a-marvel-studios/"
  //   },
  //   {
  //     title: "Doctor Strange 2",
  //     image: "https://www.cinemascomics.com/wp-content/uploads/2021/10/Doctor-Strange-y-el-multiverso-de-la-locura-marvel-studios-2022-960x720.jpg.webp",
  //     url: "https://www.cinemascomics.com/problemas-para-doctor-strange-en-el-multiverso-de-la-locura-2022/"
  //   },
  //   {
  //     title: "Eternals",
  //     image: "https://www.cinemascomics.com/wp-content/uploads/2021/02/eternals-poster.jpg.webp",
  //     url: "https://www.cinemascomics.com/peliculas/los-eternos/"
  //   },
  //   {
  //     title: "Ghost Rider",
  //     image: "https://www.cinemascomics.com/wp-content/uploads/2020/05/ghost-rider-pelicula-serie-ucm-960x560.jpg.webp",
  //     url: "https://www.cinemascomics.com/ghost-rider-no-llegaria-por-ahora-al-ucm-de-acuerdo-a-su-creador/"
  //   },
  // ];

  const fetchApi = () => {
    fetch(urlMovies + options)
      .then((response) => response.json())
      .then((data) => arrMovies.push(data.data.results));
  };

  useEffect(() => {
    fetchApi();
  },);


  return (
    <BoxMain>
      <WrapperMain>
        <img src={giphy} alt="loading..." width="100%" height="100%" />
      </WrapperMain>
      <WrapperMain>
        <h1> Noticias de Peliculas de MARVEL</h1>
        <Wrapper>

        {arrMovies.map((comics, i) => (
            // comicMarvel = {
            //     "title":comic.title,
            //     "image": `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
            // }
          <Card comics={comics} key={i} />
        ))}
            {/* {
                arrMovies.map((comics,i) => 
                  <Card movie={comics} key={i}/>
                )
            } */}
        </Wrapper>
      </WrapperMain>
    </BoxMain>
  );
}

export default Main;
