import styled, { css } from "styled-components";
import avengers from "../assets/images/avengers.png";

const colores = {
  border: "#5A090C",
  error: "#EC1D24",
  exit: "#08A62C",
  white: "#FFFFFF",
  black: "#0F0E0E",
};

export const BoxSearch = styled.div`
  background-image: url(${avengers});
  width: 100vw;
  height: 80vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    margin: 13rem auto 0rem;
  }
`;

export const WrapperInputSearch = styled.div`
  padding: 1rem;
  margin: 3rem auto 0rem;
  background: ${colores.Black};
  width: 41rem;
  heigth: 41rem;
  display: flex;
  border-radius: 0.2rem;

  img {
    z-index: 100;
    position: absolute;
    left: 0.1vw;
    margin-top: auto;
  }
`;

export const InputSearch = styled.input`
  width: 34rem;
  background: ${colores.white};
  border-radius: 50rem;
  height: 3rem;
  line-height: 2.8rem;
  padding: 0 2.8rem 0 0.6rem;
  transition: 0.3s ease all;
  border: 0.2rem solid ${colores.border};
  outline: none;
  box-shadow: 0.2rem 0px 1.8rem rgba(163, 163, 163, 0.4);
  padding: 1rem;
  font-size: 14px;
`;
