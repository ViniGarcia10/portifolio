import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  height: 50px;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 670px) {
    background-color: blue;
  }
`;

export const LogoBar = styled.img`
  position: absolute;
  left: 20px;
  top: 10px;
  height: 2em;

  /* :hover {
    height: 2.5em;
    opacity: 100%;
    animation: opening 0.5s;
  }

  @keyframes opening {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  } */

  @media only screen and (max-width: 670px) {
    position: relative;
    left: 0px;
    top: 0px;
    height: 3em;
    padding: 5px;
  }
`;

export const ContainOption = styled.div`
  margin-left: 15px;
  height: 30px;
  cursor: pointer;
  transition: ease 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 65%;
  animation-name: initalContain;
  animation-duration: 4s;

  @keyframes initalContain {
    0% {
      opacity: 0%;
    }
    50% {
      opacity: 30%;
    }
    75% {
      opacity: 80%;
    }
    100% {
      opacity: 60%;
    }
  }

  :hover {
    opacity: 100%;
    border-bottom: #00cefc 2px solid;
  }
`;

export const ContainOptionText = styled.p`
  font-size: 1.3em;
  font-weight: 400;
  overflow: hidden;
  color: black;
  height: 100%;
  width: 100%;

  :hover {
    color: white;
  }

  @media only screen and (max-width: 670px) {
    display: none;
  }
`;

export const ContainPhone = styled.div`
  position: absolute;
  right: 15px;
  top: -2px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 670px) {
    opacity: 0;
  }
`;

export const ContainPhoneLogo = styled.img`
  height: 1.3em;
  margin-right: 9px;
`;

export const ContainPhoneNumber = styled.p`
  font-size: 1em;
  font-weight: 400;
  color: #fff;
  opacity: 90%;
`;
