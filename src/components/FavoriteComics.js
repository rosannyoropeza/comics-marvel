import React from "react";
import { BoxMain, Wrapper, WrapperMain } from "../stylesComponents/MainStyle";
import Card from "./Card";
import Slider from "./Slider";

function FavoriteComics(props) {
    return (
        <BoxMain>
            <WrapperMain>
                <h1>COMICS FAVORITOS</h1>
                <Wrapper>
                    {props.favoriteComics.map((comics, i) => (
                        <Card comics={comics} key={i} />
                    ))}
                </Wrapper>
            </WrapperMain>
        </BoxMain>
    );
}

export default FavoriteComics;
