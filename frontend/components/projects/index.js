import React, { Component } from "react";
import { Projects, TitleCard } from "./styles";
import Carousel from "react-elastic-carousel";
import Cards from "./card";

class App extends Component {
  constructor(props) {
    super(props);
    this.goto = this.goto.bind(this);
  }

  goto({ page }) {
    this.carousel.goTo(Number(page));
  }

  state = {
    items: [
      {
        id: 1,
        title: "Projeto Listar Repositórios Github",
        description:
          "Aplicação em react para a listagem de repositórios através da api do github.",
        image:
          "https://figma.imgix.net/5M2puKwSoznulyXdFOeDll/ff8bcf78b377a8af78877483fe8a02ba/Github_Case_Study_Header_New.png?&w=1060&auto=compress%2Cformat&crop=entropy&fit=crop&q=75",
        link: "https://github.com/ViniGarcia10/List-Repositories-GitHub",
      },
      {
        id: 2,
        title: "Projeto Tindev",
        description:
          "Um aplicativo multiplataforma usando NodeJs no backend, ReactJs no frontend e React-native no mobile.",
        image:
          "https://repository-images.githubusercontent.com/201310909/b5997a00-32c2-11ea-983c-f96e90713916",
        link: "https://github.com/ViniGarcia10/TindevOminiStack",
      },
      {
        id: 3,
        title: "Projeto Ecoleta",
        description:
          "Ecoleta é um projeto para a coleta de resíduos, para a preservação do meio ambiente.",
        image:
          "https://raw.githubusercontent.com/ViniGarcia10/next-level-week-1/master/.github/capa.svg",
        link: "https://github.com/ViniGarcia10/next-level-week-1",
      },
    ],
  };

  render() {
    const { items } = this.state;

    return (
      <Projects>
        <TitleCard>Projetos</TitleCard>
        <Carousel
          ref={(ref) => (this.carousel = ref)}
          enableAutoPlay
          pagination={false}
          transitionMs={10000}
          showArrows={false}
          onChange={(nextItemObject, currentPageIndex) => {
            if (currentPageIndex === items.length - 1) {
              this.goto({ page: 0 });
            }
          }}
        >
          {items.map((item) => (
            <Cards
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </Carousel>
      </Projects>
    );
  }
}

export default App;
