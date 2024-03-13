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
      urlImg: "./img-projects/flappy-bird.png",
      title: "Flappy Bird",
      description:
        "- Projeto criado no curso de Web Moderno de JavaScript, junto com o professor Leonardo Leitão, utilizando somente JavaScript",
      link: "https://joaoviictorss.github.io/Flappy-Bird/.",
    },
    {
      id: 3,
      urlImg: "./img-projects/calc.png",
      title: "Calculadora utilizando React",
      description:
        "- Projeto criado no curso de Web Moderno de JavaScript, junto com o professor Leonardo Leitão, utilizando React.",
      link: "https://joaoviictorss.github.io/Calculadora-React/",
    },
    {
      id: 4,
      urlImg: "./img-projects/form-with-progress.png",
      title: "Formulario com progressão",
      description:
        "- Projeto criado com React.JS e Tailwindcss simulando o funcionamento de um formulario de login e de criação de conta.",
      link: "https://form-with-progress.vercel.app/"
    },
    {
      id: 5,
      urlImg: "./img-projects/imc-calc.png",
      title: "Calculadora de IMC utilizando TypeScript",
      description:
        "- Meu primeiro projeto integrando o TypeScript junto do React.",
      link: "https://joaoviictorss.github.io/imc-calculator/"
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
