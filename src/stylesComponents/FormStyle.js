import styled from "styled-components";
import imgUrl from "../assets/images/spider.png";
import imgUrl2 from "../assets/images/wolverine.png";

let colorBlack = `#0F0E0E`;

export const BoxForm = styled.div`
  padding: 2rem;
  background-image: url(${imgUrl});
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img{
    margin: 2rem;
  }

  ${(props) =>
    props.register &&`
    background-image: url(${imgUrl2});
    `}

`;

export const WrapperForm = styled.div`
  padding: 1rem;
  margin: auto;
  background: ${colorBlack};
  width: 41rem;
  heigth: 41rem;
  display: flex;
  border-radius: 0.2rem;
`;
