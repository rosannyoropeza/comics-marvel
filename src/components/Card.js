import React from "react";
import { BoxCard, WrapperCard } from "../stylesComponents/CardStyle";

function Card(props) {
  //FUNCION PARA ABRIR EL MODAL
  const handleOpenModal = () => {
   props.openModal(props.comics);
  };
  const name = props.comics.name || props.comics.title;
  const img = props.comics.image || props.comics.thumbnail.path +'.'+ props.comics.thumbnail.extension;
  return (
    <>
      <BoxCard onClick={handleOpenModal} >
        <img
          src={img}
          alt=""
          width="224"
          height="336"
        />
        <WrapperCard>{name}</WrapperCard>
      </BoxCard>
    </>
  );
}

export default Card;
