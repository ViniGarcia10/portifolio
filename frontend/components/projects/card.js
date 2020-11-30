import React, { useState } from "react";
import { Card, Image, ContainerDesc } from "./styles";

function Cards(props) {
  const [SelectProject, setSelectProject] = useState(true);

  return (
    <Card>
      <Image className="imageFundo" img={props.image} alt={props.title}></Image>

      {SelectProject && (
        <>
          <h1 className="title">{props.title}</h1>
          <ContainerDesc>
            <h2 className="description">{props.description} </h2>
            <a className="saibaMais" href={props.link} target="_blank">
              Saiba mais
            </a>
          </ContainerDesc>
        </>
      )}
    </Card>
  );
}

export default Cards;
