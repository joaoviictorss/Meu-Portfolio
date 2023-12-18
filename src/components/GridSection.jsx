import "../styles/GridSection.css";
import GridItem from "../components/GridItem";
const GridSection = () => {
  const Skills = [
    {
      name: "JavaScript",
      url: "./svg-gridIcons/javascript.svg",
    },
    {
      name: "React",
      url: "./svg-gridIcons/react.svg",
    },
    {
      name: "React Native",
      url: "./svg-gridIcons/react-native.svg",
    },
    {
      name: "HTML 5",
      url: "./svg-gridIcons/html.svg",
    },
    {
      name: "CSS",
      url: "./svg-gridIcons/css.svg",
    },
    {
      name: "Node.js",
      url: "./svg-gridIcons/node-js.svg",
    },
    {
      name: "GIT",
      url: "./svg-gridIcons/git.svg",
    },
    {
      name: "GitHub",
      url: "./svg-gridIcons/github.svg",
    },
    {
      name: "My SQL",
      url: "./svg-gridIcons/mysql.svg",
    },
    {
      name: "TypeScript",
      url: "./svg-gridIcons/typescript.svg",
    },
  ];

  return (
    <>
      <div className="grid-section ">
        <div className="grid-container container">
          {Skills.map((skill, index) => (
            <GridItem key={index} name={skill.name} url={skill.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GridSection;
