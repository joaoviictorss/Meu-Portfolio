import { motion } from "framer-motion";
import "../styles/GridItem.css";

const GridItem = (props) => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView={"visible"}
        variants={{
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
            },
          },
          hidden: { opacity: 1, y: 80 },
        }}
        className="grid-item"
      >
        <img src={props.url} alt="" className="svg-gridIcon" />
        <p className="name-gridIcon">{props.name}</p>
      </motion.section>
    </>
  );
};

export default GridItem;
