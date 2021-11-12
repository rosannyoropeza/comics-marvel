import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import FavoriteComics from "./FavoriteComics";
import { BoxMain, WrapperMain, Wrapper } from "../stylesComponents/MainStyle";

function AllComics(props) {
    const arrComics = props.comics;
    const [showModal, setShowModal] = useState(false);
    const [currentComics, setCurrentComics] = useState();

    //FUNCION PARA ABRIR EL MODAL
    const openModal = (comics) => {
        setCurrentComics(comics);
        setShowModal((prev) => !prev);
    };
    const add = () =>{
      props.addFavorites(currentComics)
      setShowModal(false);
    }
    return (
        <>
            <BoxMain>
                <button>All comics</button>
                <button>Personajes</button>
                <WrapperMain>
                    <h1>ALL COMICS</h1>
                </WrapperMain>
                <Wrapper>
                    {arrComics.map((comics, i) => (
                        <Card
                            comics={comics}
                            key={i}
                            openModal={openModal}
                            changeComics={setCurrentComics}
                        />
                    ))}
                </Wrapper>
            </BoxMain>
            <FavoriteComics favoriteComics={props.favoriteComics} />
            {showModal && (
                <Modal
                    setShowModal={setShowModal}
                    changeComics={currentComics}
                    addFavorites={add}
                />
            )}
        </>
    );
}

export default AllComics;
