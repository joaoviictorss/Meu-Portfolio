import "../styles/ProjectsSection.css";
import Project from "./Project";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      urlImg: "./img-projects/pet-web-app-img.png",
      title: "Pet Web App",
      description:
        " - Um sistema de adoção de animais criado com Next.js e integração ao Firebase, consulta e exibi os dados dos animais cadastrados. ",
      link: "https://pet-web-app-two.vercel.app/",
    },
    {
      id: 2,
      urlImg:
        "https://raw.githubusercontent.com/joaoviictorss/NLW-pass-in-web/main/public/image-project.png",
      title: "NLW - Pass in Web",
      description:
        " - A aplicação Nlw é um projeto desenvolvido durante a Next Level Week, um evento da Rocketseat, onde o objetivo é criar uma aplicação de verificação de convidados para eventos.. ",
      link: "https://github.com/joaoviictorss/NLW-pass-in-web",
    },
    {
      id: 3,
      urlImg: "./img-projects/flappy-bird.png",
      title: "Flappy Bird",
      description:
        "- O bom e velho Flappy Bird criado totalmente com Javascript",
      link: "https://joaoviictorss.github.io/Flappy-Bird/.",
    },
    {
      id: 4,
      urlImg:
        "https://camo.githubusercontent.com/809ab3c38fee1b3885353e3ef4d1efadbe63f808b746c839a060b56e8fbbc47f/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313237313032382f73637265656e73686f74732f31353635383137332f6d656469612f31363861306261313965303137613864313533623562386535373234356133352e706e67",
      title: "Jogo da velha com Pokemon",
      description:
        "O bom jogo da velha com a temática de pokemon, com os icones de Magby e Elekid para os fanaticos de pokemon!",
      link: "https://tic-tac-toe-pokemon.vercel.app/",
    },
    {
      id: 5,
      urlImg: "./img-projects/form-with-progress.png",
      title: "Formulario com progressão",
      description:
        "- Projeto criado com React.JS e Tailwindcss simulando o funcionamento de um formulario de login e de criação de conta.",
      link: "https://form-with-progress.vercel.app/",
    },
    {
      id: 6,
      urlImg: "./img-projects/calc.png",
      title: "Calculadora utilizando React",
      description:
        "- Projeto criado no curso de Web Moderno de JavaScript, junto com o professor Leonardo Leitão, utilizando React.",
      link: "https://joaoviictorss.github.io/Calculadora-React/",
    },
  ];

  return (
    <section className="projects-section" id="ProjectsSection">
      <h2 className="title-section">Meus Projetos</h2>
      <div className="projects-container container">
        {projects.map((project, index) => (
          <Project
            key={project.id}
            urlImg={project.urlImg}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
