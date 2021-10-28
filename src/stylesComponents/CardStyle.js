import styled from "styled-components";

let colorBlack = `#0F0E0E`;
let colorWhite = `#FFFFFF`;

export const BoxCard = styled.div`
  width: 18rem;
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${colorWhite};
  background-clip: border-box;
  border: 1px solid ${colorBlack};
  border-radius: 1.25rem;
`;

export const WrapperCard = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;

  img {
    width: 100%;
    heigth: 100%;
  }
`;
