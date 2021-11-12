// import React from "react";
import styled from "styled-components";

let colorRed = `#EC1D24`;
let colorWhite = `#FFFFFF`;
let colorRed50 = `#EC1D03`;

export const BoxHeader = styled.div`
    background: ${colorRed};
    width: 100vw;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavbarWrapper = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    top: 10vh;
    width: 100vw;
    height: 12vh;
    margin: 2rem;
    padding: 0.5rem 0.8rem;

    a {
        padding: 0.5rem 0.8rem;
        color: ${colorRed};
        text-decoration: none;
    }
`;

export const WrapperLink = styled.div`
    margin-left: auto;
`;

export const MenuButtonWrapper = styled.button`
    background-color: ${colorWhite};
    border: 0.3rem none ${colorRed};
    border-radius: 0.3rem;
    cursor: ponter;
    width: 12vw;
    height: 5vh;
    margin: 2px;

    &:hover {
        background-color: ${colorRed50};
        border: 0.1rem solid ${colorWhite};

        a {
            color: ${colorWhite};
        }
    }
`;

export const BoxUser = styled.div`
    display: flex;
    align-items: center;

    span {
        color: ${colorWhite};
        padding: 0rem 1rem;

        a {
            color: ${colorWhite};
        }
    }
`;

export const wraperUser = styled.img`
    margin: 0 rem 1 rem;
    background: ${colorWhite};
    border-radius: 100%;
    width: 51px;
    height: 51px;

    img {
        border-radius: 100% !important;
        width: 100% !important;
        height: 100%;
    }
`;
