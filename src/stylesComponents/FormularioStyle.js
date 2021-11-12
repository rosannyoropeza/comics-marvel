import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  border: "#5A090C",
  error: "#EC1D24",
  exit: "#08A62C",
  white: "#FFFFFF",
  black: "#0F0E0E",
};

export const BoxFormUser = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: ${colores.black};
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-heigth: 40px;
  cursor: pointer;
`;

export const GroupInput = styled.div`
  position: relative;
  z-index: 90;
  margin: 1rem;
`;

export const Input = styled.input`
  width: 34rem;
  background: ${colores.white};
  border-radius: 0.2rem;
  height: 3rem;
  line-height: 2.8rem;
  padding: 0 2.8rem 0 0.6rem;
  transition: 0.3s ease all;
  border: 0.2rem solid transparent;

  &:focus {
    border: 0.2rem solid ${colores.border};
    outline: none;
    box-shadow: 0.2rem 0px 1.8rem rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valid === "true" &&
    css`
      border: 0.2rem solid transparent;
    `}

  ${(props) =>
    props.valid === "false" &&
    css`
      border: 0.2rem solid ${colores.error} !important;
    `}
`;

export const ParagraphError = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${(props) =>
    props.valid === "true" &&
    css`
      display: none;
    `}

  ${(props) =>
    props.valid === "false" &&
    css`
      display: block;
    `}
`;

export const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0.6rem;
  bottom: 0.8rem;
  z-index: 100;
  font-size: 1rem;
  opacity: 0;

  ${(props) =>
    props.valid === "true" &&
    css`
      opacity: 1;
      color: ${colores.exit};
    `}

  ${(props) =>
    props.valid === "false" &&
    css`
      opacity: 1;
      color: ${colores.error};
    `}
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.8rem;
`;

export const Button = styled.button`
  width: 34rem;
  border-radius: 0.2rem;
  height: 3rem;
  line-height: 2.8rem;
  padding: 0 2.8rem 0 0.6rem;
  transition: 0.3s ease all;
  border: none;
  cursor: pointer;
  background-color: ${colores.error};
  color: ${colores.white};
  font-weight: bold;
  border-radius: 0.3rem;
  text-align: center;

  &: hover {
    box-shadow: 0.18rem 0 1.8rem rgba(163, 163, 163, 1);
  }

  ${(props) =>
    props.google &&
    css`
      background-color: ${colores.white};
      color: ${colores.error};
      position: absolute;

      img {
        z-index: 100;
        position: absolute;
        left: 0.1vw;
        margin-top: auto;
      }
    `}

  ${(props) =>
    props.link &&
    css`
      background-color: ${colores.black};
      color: ${colores.white};
      margin-top: 10vh;

      &: hover {
        box-shadow: none;
      }
    `}

    ${(props) =>
    props.modal &&
    css`
      width: 12rem;
      padding: 0;

      &: hover {
        box-shadow: 0.18rem 0 1.8rem rgba(163, 163, 163, 1);
      }
    `}
`;

export const MessageExit = styled.p`
  font-size: 0.87rem;
  color: ${colores.exit};
`;

export const MessageError = styled.div`
  height: 2.8rem;
  line-height: 2.8rem;
  background-color: ${colores.error};
  padding: 0 0.93rem;
  border-radius: 0.3rem;
  grid-column: span 1;

  p {
    margin: 0;
  }

  b {
    margin-left: 0.6rem;
  }
`;

export const BoxLinea = styled.div`
  display: flex;
  flex-direction: row;
  width: 34rem;
  margin: auto;
  margin-bottom: 1rem;
`;

export const Divlinea = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  background-color: ${colores.error};
  height: 0.1vh;
  position: relative;
  top: 0.45em;
`;

export const DivO = styled.div`
  color: ${colores.white};
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 0.9rem;
  margin: 0 1.2rem;
  text-transform: uppercase;
`;
