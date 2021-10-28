import styled from "styled-components";

let colorBlack = `#0F0E0E`;
let colorWhite = `#FFFFFF`;

export const BoxMain = styled.div`
  padding: 2rem;
  background: ${colorBlack};
  width: 100%;
`;

export const WrapperMain = styled.div`
  padding: 1rem;
  margin: auto;
  background: ${colorBlack};
  width: 100vw;
  heigth: 50vw;

  h1 {
    color: ${colorWhite};
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 80vw;
  padding: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.4vh;
`;
