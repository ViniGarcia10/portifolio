import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Head>
        <title>Viniix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.homeBanner}>
          <h1 className={styles.title}>Olá, Eu Sou Vinícius</h1>
          <h2 className={styles.descriptionTitle}>
            Desenvolvedor web, trabalho na criação sites e sistemas de alta
            eficiência.
          </h2>
        </section>

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

      <Footer />
    </div>
  );
}
