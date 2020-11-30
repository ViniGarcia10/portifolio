import React from "react";
import { About, Avatar, Description } from "./styles";

export default function index() {
  return (
    <About>
      <Avatar src="./avatar.png" alt="Vinícius Garcia Leão" />
      <Description>
        Sou Vinícius Garcia, desenvolvedor de softwares com alta performance,
        sempre buscando aprender novas tecnologias para agregar aos meus
        trabalhos, atualmente estou concluindo o curso de sistema de infomação,
        desenvolvi projetos onde descrevo abaixo.
      </Description>
    </About>
  );
}
