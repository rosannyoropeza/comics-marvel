import React from "react";
import { Button } from "../stylesComponents/FormularioStyle";
import {
  BoxModal,
  WrapperModal,
  ModalHeader,
  CloseModalButton,
  ModalBody,
  ModalImg,
  ModalDiv,
  ModalFooter,
} from "../stylesComponents/ModalStyle";

const Modal = ({ setShowModal, changeComics, addFavorites }) => {
//FUNCION PARA DETENER EL EVENTO DE CERRAR EL MODAL
const handleWrapperModal = (e) => e.stopPropagation(); 

  return (
      <BoxModal onClick={() => setShowModal(false)}>
      <WrapperModal onClick = {handleWrapperModal}>
        <ModalHeader>
          <h1>Detalles del Comics</h1>
          <CloseModalButton onClick={() => setShowModal(false)}> X </CloseModalButton>
        </ModalHeader>
        <ModalBody>
          <ModalImg>
            <img src={`${changeComics.thumbnail.path}.${changeComics.thumbnail.extension}`} alt="" />
          </ModalImg>
          <ModalDiv>
            <h3> {changeComics.title} </h3>
            <p> {changeComics.description} </p>
          </ModalDiv>
        </ModalBody>
        <ModalFooter>
          <Button modal onClick={() => addFavorites(changeComics)}>Agregar a favoritos</Button>
        </ModalFooter>
      </WrapperModal>
    </BoxModal>
  );
};

export default Modal;
