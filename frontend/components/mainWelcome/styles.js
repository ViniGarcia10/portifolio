import styled from "styled-components";

export const Main = styled.section`
  box-shadow: inset 0 0 20px 11px #03a9f4;
  margin: 80px auto 0 auto;
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  background-color: #0000008c;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  @media only screen and (max-width: 600px) {
    width: auto;
    padding: 5%;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: white;
  text-align: center;
  text-shadow: 0px 1px 20px black;
  animation-name: moveInitialTitle;
  animation-duration: 4s;

  @keyframes moveInitialTitle {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

export const Description = styled.h2`
  width: 100%;
  font-size: 1em;
  color: white;
  text-align: center;
  text-shadow: 0px 1px 20px black;
  animation-name: moveInitial;
  animation-duration: 2s;

  @keyframes moveInitial {
    0% {
      opacity: 0%;
    }
    50% {
      opacity: 10%;
    }
    75% {
      opacity: 50%;
    }
    100% {
      opacity: 100%;
    }
  }
`;
