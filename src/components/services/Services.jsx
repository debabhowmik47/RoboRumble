import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Metal meets mayhem in the electrifying
          <br /> RoboRumble showdown.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="\public\y.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Robo Rumble</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>Event Flow.</h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DAY 1</h2>
          <p>
            • ROBO-RUMBLE is an event that includes participants FIGHTING WITH
            THEIR BOT IN SUMO RACE RING .
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DAY 2</h2>
          <p>
            •IN THIS EVENT PARTICIPANTS SHOULD FIGHT WITH THEIR CUSTOMISED
            CHASIS BOT IN SUMO RING.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DAY 3</h2>
          <p>
            THE BOT WHICH WILL LEAVE THE RING AT FIRST OR DISMANTLED 1ST WILL BE
            DISQUALIFIED.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
