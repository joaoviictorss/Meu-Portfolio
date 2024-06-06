import { motion } from "framer-motion";
import "../styles/Project.css";

const Project = (props) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="container-card-project"
      >
        <div className="card-img">
          <img src={props.urlImg} />
        </div>
        <div className="content-project">
          <h4 className="tittle-project">{props.title}</h4>
          <p className="text-project">{props.description}</p>
          <div className="btn-container">
            <a href={props.link} className="link-project" target="_blank">
              Projeto no ar
            </a>
            <a href={props.linkGithub} className="link-project" target="_blank">
            Github
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
