import styled from "styled-components";

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 20px 11px #03a9f4;
  height: 500px;
  width: 100%;
  transition: 0.3s;
  border-radius: 30px;
  margin: 50px;
  background-color: #0000008c;

  @media only screen and (max-width: 572px) {
    margin-top: 0px;
  }
`;

export const TitleCard = styled.h1`
  font-size: 2em;
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

export const Card = styled.div`
  width: 85%;
  height: 372px;
  background-color: #000000;
  border-radius: 30px;
  box-shadow: 0px 0 7px 2px #4c4c4c;
  margin: 10px;
  color: #fff;
  font-size: 30px;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  :hover {
    .title {
      display: flex;
      position: absolute;
      cursor: pointer;
    }

    .description {
      display: block;
      cursor: pointer;
    }

    .imageFundo {
      opacity: 0.2;
    }

    .saibaMais {
      display: block;
      text-decoration: none;
      color: #46ff4e;
      font-size: 16px;
      display: block;
      font-family: "Roboto", sans-serif;
      margin: 10px;
      font-weight: 100;
    }
  }

  .title {
    display: none;
    top: 50%;
    text-align: center;
    justify-content: center;

    font-size: 30px;
    height: 40px;
    overflow: hidden;
    width: inherit;

    @media only screen and (max-width: 800px) {
      font-size: 16px;
      top: 119px;
      width: 240px;
    }
  }

  .saibaMais {
    text-decoration: underline;
    color: #00f;
    font-size: 10px;
    display: none;
  }

  .description {
    font-size: 25px;
    text-align: center;
    top: 73%;
    overflow: hidden;
    display: none;
    height: 60px;

    max-width: 38ch;
    overflow: hidden;
    width: 542px;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media only screen and (max-width: 800px) {
      font-size: 13px;
      top: 188px;
    }

    @media only screen and (max-width: 489px) {
      max-width: 25ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: break-spaces;
    }
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.img});
  height: 100%;
  width: 100%;
  border-radius: 30px;
  cursor: pointer;
  background-repeat: round;
  background-size: cover;

  :hover {
    opacity: 0.2;
  }
`;

export const Portifolio = styled.div`
  width: 358px;
  height: 100%;
  background: blue;
  border-radius: 25px 0 0 25px;
`;

export const ContainerDesc = styled.div`
  display: flex;
  position: absolute;
  width: 656px;
  flex-direction: row;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  align-items: baseline;
  bottom: 15px;

  @media only screen and (max-width: 489px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 80%;
  }
`;
