import React from "react";
import { BoxCard, WrapperCard } from "../stylesComponents/CardStyle";

function Card(props) {
   
    return (
        <BoxCard onClick={()=> window.open(props.movie.url)}>
        <img src={props.movie.image} alt="" height="300"/>        
        <WrapperCard>
            {props.movie.title}
        </WrapperCard>
      </BoxCard>
    );
  }
  
  export default Card;
  