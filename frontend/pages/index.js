import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Welcome from "../components/mainWelcome";
import About from "../components/about";
import styled from "styled-components";
import Projects from "../components/projects";

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Viniix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

<<<<<<< HEAD
      <Main>
        <Welcome />
        <About />
        <Projects />
      </Main>
=======
        <section className={styles.About}>
          <img
            className={styles.avatar}
            src="./avatar.png"
            alt="Vinícius Garcia Leão"
          />
          <p className={styles.descriptionAbout}>
            Sou Vinícius Garcia, desenvolvedor de softwares
            <br /> com alta performance, sempre buscando aprender
            <br /> novas tecnologias para agregar aos meus trabalhos.
          </p>
        </section>
      </main>
>>>>>>> f818ba62074b13bae90d2faa5cd1c26540b1ca7b

      <Footer />
    </Container>
  );
}
