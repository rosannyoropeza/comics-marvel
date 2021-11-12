import styled from "styled-components";

export const BoxModal = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperModal = styled.div`
  position: relative;
  padding: 1rem;
  min-width: 320px;
  max-width: 800px;
  min-height: 200px;
  max-height: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: #5a090c 2px solid;
`;

export const ModalHeader = styled.div`
  width: 55vw;    
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;

export const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  font-size: 2rem;
}
`;

export const ModalBody = styled.div`
  display: flex;
  padding: 1rem;
  margin-top: 1rem;
  align-items: center;
`;

export const ModalFooter = styled.div`
  width: 55vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
`;

export const ModalImg = styled.div`
  width: 30%;
  height: 50vh;
  border-radius: 20px;
  background: #000;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 50vh;
    border-radius: 20px;
  }
`;

export const ModalDiv = styled.div`
  width: 70%;
  height: 50vh;
  position: relative;
  padding: 0rem 2rem 0rem 2rem;

  p {
    padding: 2rem 0rem 2rem 0rem;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  position: absolute;

  button {
    padding: 10px 24px;
    background: #ec1d24;
    color: #fff;
    border: #5a090c 0.1rem solid;
    border-radius: 5px;
  }
`;
