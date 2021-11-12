import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import AllComics from "./AllComics";
import { addFavoriteFirebase, getFavoritesFirebase } from "../firebase/Firebase"; 

//CLAVES  QUE SE USARAN PARA CONECTAR A LA API DE MARVEL
const urlMarvel = "https://gateway.marvel.com/v1/public/comics?&limit=10&";
const apikey = "b7068376d900bcebfd7e95228f6830c7";
const ts = 3000;
const hash = "61dab4049ec3ae40beb72b45e06f608c";
const options = `apikey=${apikey}&ts=${ts}&hash=${hash}`;

function Comics(props) {
    const [comics, setComics] = useState([]);
    const [favoriteComics, setFavoriteComics] = useState([]);

    //PETICION
    const fetchApi = () => {
        fetch(urlMarvel + options)
            .then((response) => response.json())
            .then((data) => {
                let results = data.data.results;
                localStorage.setItem("comics", JSON.stringify(results));
                setComics(results);
            });
    };

    useEffect(() => {
        fetchApi();
        getFavoritesFirebase().then(response =>{
          setFavoriteComics(response);
        });
    }, []);

    //FUNCION PARA AGREGAR FAVORITOS
    const addFavorites = (comic) => {
        favoriteComics.push(comic);
        setFavoriteComics(favoriteComics);
        //ENVIAR COMIC A FIREBASE
        const datacomic = {
            name: comic.title,
            image: comic.thumbnail.path + "." + comic.thumbnail.extension,
        };
        addFavoriteFirebase(datacomic);
    };

    const search = (e) => {
        const allComics = JSON.parse(localStorage.getItem("comics"));
        if (e.target.value) {
            const filterComics = allComics.filter((item) =>
                item.title ? item.title.startsWith(e.target.value) : true
            );
            setComics(filterComics);
        } else {
            setComics(allComics);
        }
    };

    return (
        // <BoxComics>
        <div>
            <Header />
            {/* <WrapperComics> */}
            <div>
                <Search search={search} />
                <AllComics comics={comics} favoriteComics={favoriteComics} addFavorites={addFavorites} />
            </div>
            {/* </WrapperComics> */}
            <Footer />
        </div>
        // </BoxComics>
    );
}

export default Comics;
