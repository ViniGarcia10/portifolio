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

      <Main>
        <Welcome />
        <About />
        <Projects />
      </Main>

      <Footer />
    </Container>
  );
}
