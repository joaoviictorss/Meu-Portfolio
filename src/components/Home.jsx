import "../styles/Home.css";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <main className="home" id="Home">
        <div className="home-container ">
          <div className="infos content-home">
            <h1>Olá, eu sou João</h1>
            <Typewriter
              words={["Dev Front-end", "Web Developer"]}
              loop={Infinity}
              typeSpeed={70}
              deleteSpeed={80}
              cursor
              cursorStyle="_"
              cursorColor="#127AD8"
            />
            <p>
              Sou um estudante de engenharia da computação e meu foco é atuar na area de desenvolvimento de software como desenvolvedor front-end.
            </p>
            <a
              href="https://github.com/joaoviictorss"
              target="_blank"
              className="social-media"
            >
              <img src="./icons8-github1.svg" alt="Link github" />
            </a>
            <a
              href="https://www.linkedin.com/in/joao-viictor/"
              target="_blank"
              className="social-media"
            >
              <img src="./icons8-linkedin1.svg" alt="Link github" />
            </a>
            <div className="container-btn">
              <a
                href="./JoãoVictor-Curriculo.pdf"
                download
                className="button-download"
              >
                Baixar Currículo
              </a>
            </div>
          </div>
          <motion.div
            initial={{ y : 100 }}
            animate={{ y: 0, transition: { type: "spring" } }}
            exit={{ y: 200, transition: { type: "spring" } }}
            className="svg content-home"
          >
            <img src="./pixeltrue-support-1.svg" alt="" />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Home;
