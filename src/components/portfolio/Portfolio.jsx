import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Breif ",
    img: "https://i0.wp.com/makezine.com/wp-content/uploads/2022/10/JB9701038-by-Jon-C-R-Bennet-%EF%80%A2-JCRBPhoto-scaled.jpg?fit=2560%2C1707&ssl=1",
    desc: "ACTER COMPLETING REGISTRATION FOR THE EVENT A TEAM WILL GET 1 BOT AND TEAM HAVE TO MODIFY THE BOT USING CUSTOMIZED CHASIS THEN AFTER MATCH MAKING THEAM HAVE TO ENTER INTO SUMO RING USING BOT AFTER COMPLETING MATCH TEAM WILL  GET TIME TO REPAIR THEN AFTER COMPLETING ALL MATCHES THE TEAM WHICH IS MAINTAINING STREAK CONSIDER AS WINNER . WINNER GOT CERTIFICATE AND MEDAL WITH PRIZE WORTH OF 5000",
  },
  {
    id: 2,
    title: "Rules and Regulataions",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "THE BOT WHICH CROSES THE WHITE LINE CONSIDER AS LOOSER AND THE PLAYERS SHOULD HAVETO PUSH THE BOTS EACH OTHER AND STAYING QUIETLY FOR LONG TIME CONSIDER AS LOOSER",
  },
  {
    id: 3,
    title: "Prices",
    img: "https://i0.wp.com/makezine.com/wp-content/uploads/2022/04/10-rules-robo-combat__JB62062_3-Jon-C-R-Bennett.jpg?fit=1200%2C800&ssl=1",
    desc: "TOTAL PRICE MONEY WORTH 4000 INR",
  },
  {
    id: 4,
    title: "JUDGING CRITERIA",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLxzs-d-pcewiVuVLSzbTWhFuH9DVgXwKCQeZKluNZIs04fTSFGS6bYe_ls6wZ9x2YmI",
    desc: "THE LAST BOT STANDING IN BATTLE FIELD WILL BE WINNER ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Description</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
