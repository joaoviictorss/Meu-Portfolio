import "../styles/ProjectsSection.css";
import Project from "./Project";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      urlImg: "./img-projects/flappy-bird.png",
      title: "Flappy Bird",
      description:
        "Projeto criado no curso de Web Moderno de JavaScript, junto com o professor Leonardo Leitão, utilizando HTML, CSS e JavaScript",
      link: "https://joaoviictorss.github.io/Flappy-Bird/",
    },
    {
      id: 2,
      urlImg: "./img-projects/calc.png",
      title: "Calculadora utilizando React",
      description:
        "Projeto criado no curso de Web Moderno de JavaScript, junto com o professor Leonardo Leitão, utilizando React",
      link: "https://joaoviictorss.github.io/Calculadora-React/",
    },
  ];

  return (
    <section className="projects-section" id="ProjectsSection">
      <h2 className="title-section">Meus Projetos</h2>
      <div className="projects-container container">
        {projects.map((project, index) => (
          <Project
            key={index}
            urlImg={project.urlImg}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
        <Project title="EM BREVE..." description="EM BREVE..." />
      </div>
    </section>
  );
};

export default ProjectsSection;
