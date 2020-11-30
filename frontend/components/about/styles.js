import styled from "styled-components";

export const About = styled.section`
  box-shadow: inset 0 0 20px 11px #03a9f4;
  height: 500px;
  width: 100%;
  transition: 0.3s;
  border-radius: 30px;
  margin: 50px;
  background-color: #0000008c;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1080px) {
    padding: 5%;
    display: flex;
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  height: 50%;
  margin-left: 30px;
  border-radius: 100%;
  border: 2px white solid;
  box-shadow: 0 0 20px 8px #3f51b5;

  @media only screen and (max-width: 1080px) {
    height: 11em;
    margin-left: 0px;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-size: 150%;
  width: 663px;
  margin-left: 50px;
  line-height: 1.5;
  text-shadow: 0px 0px 20px black;
  font-weight: 100;
  font-family: Roboto, sans-serif;

  @media only screen and (max-width: 1080px) {
    font-size: 1em;
    text-shadow: 0 0 20px black;
    line-height: 1.5;
    font-weight: 500;
    margin-left: 0px;
    height: 200px;
    text-indent: 8px;
    text-align: justify;
    width: auto;
  }
`;
