import "../styles/ProjectsSection.css";
import Project from "./Project";

const ProjectsSection = () => {
  const projects = [
    {
      urlImg: "./img-projects/ecommerce-admin.png",
      title: "Ecommerce Admin",
      description:
        "- Ecommerce admin, administra produtos, tamanhos, cores e seções do ecommerce-store. Criado com Next.js, Shadcn-ui, Tailwind e Prisma",
      link: "https://ecommerce-admin-commercecontrol.vercel.app/",
      linkGithub: "https://github.com/joaoviictorss/ecommerce-admin",
    },
    {
      urlImg: "./img-projects/ecommerce-store.png",
      title: "Ecommerce Store",
      description:
        "- Utilizando os dados criados pelo ecommerce-admin, apresenta de maneira intuitiva e responsiva uma loja virtual com sistema de pagamentos. Criado com Next.js, Tailwind, Stripe",
      link: "https://eccomerce-store-commerceshow.vercel.app/",
      linkGithub: "https://github.com/joaoviictorss/ecommerce-store",
    },
    {
      urlImg: "./img-projects/pet-web-app-img.png",
      title: "Pet Web App",
      description:
        "- Um sistema de adoção de animais criado com Next.js e integração ao Firebase, consulta e exibi os dados dos animais cadastrados. ",
      link: "https://pet-web-app-two.vercel.app/",
      linkGithub: "https://github.com/joaoviictorss/pet-web-app",
    },
    {
      urlImg:
        "https://raw.githubusercontent.com/joaoviictorss/NLW-pass-in-web/main/public/image-project.png",
      title: "NLW - Pass in Web",
      description:
        " - A aplicação Nlw é um projeto desenvolvido durante a Next Level Week, um evento da Rocketseat, onde o objetivo é criar uma aplicação de verificação de convidados para eventos.. ",
      link: "https://github.com/joaoviictorss/NLW-pass-in-web",
      linkGithub: "https://github.com/joaoviictorss/NLW-pass-in-web",
    },
    {
      urlImg: "./img-projects/flappy-bird.png",
      title: "Flappy Bird",
      description:
        "- Experimente a diversão e o desafio do clássico Flappy Bird em uma nova versão desenvolvida com JavaScript! Este jogo viciante traz de volta a simplicidade e a emoção do original, com uma jogabilidade que testa suas habilidades e reflexos.",
      link: "https://joaoviictorss.github.io/Flappy-Bird/.",
      linkGithub: "https://github.com/joaoviictorss/Flappy-Bird",
    },
    {
      urlImg:
        "https://camo.githubusercontent.com/809ab3c38fee1b3885353e3ef4d1efadbe63f808b746c839a060b56e8fbbc47f/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313237313032382f73637265656e73686f74732f31353635383137332f6d656469612f31363861306261313965303137613864313533623562386535373234356133352e706e67",
      title: "Jogo da velha com Pokemon",
      description:
        "Jogo da Velha com Tema Pokémon! Este clássico jogo de estratégia ganha um toque especial com os personagens adorados do universo Pokémon. Jogue contra um amigo ou desafie a inteligência artificial enquanto se diverte com os seus Pokémon favoritos.",
      link: "https://tic-tac-toe-pokemon.vercel.app/",
      linkGithub: "https://github.com/joaoviictorss/tic-tac-toe-pokemon",
    },
    {
      urlImg: "./img-projects/calc.png",
      title: "Calculadora utilizando React",
      description:
        "- Projeto criado no curso de Web Moderno de JavaScript, junto com o professor Leonardo Leitão, utilizando React.",
      link: "https://joaoviictorss.github.io/Calculadora-React/",
      linkGithub: "https://github.com/joaoviictorss/Calculadora-React",
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
            linkGithub={project.linkGithub}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
