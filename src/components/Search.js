import React, { useState } from "react";
import {
  BoxSearch,
  WrapperInputSearch,
  InputSearch,
} from "../stylesComponents/SearchStyle";
import imgComics from "../assets/images/comics.png";

function Search(props) {
  return (
    <BoxSearch>
      <img src={imgComics} alt="" width="432" height="131" />
      <WrapperInputSearch>
        <InputSearch
          onChange = {props.search}
          type="search"
          placeholder="Buscar comics"
        />
      </WrapperInputSearch>
    </BoxSearch>
  );
}

export default Search;
