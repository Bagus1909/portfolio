import "./hero.scss";
import { motion } from "framer-motion";

const pdfUrl = "https://drive.google.com/file/d/1A0XWEmHJ196zh8Y01WRipFNxpEyUeWB5/view?usp=sharing";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: "50%",
  },
  animate: {
    x: "-800%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Bagus Setiawan.</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer and UX Designer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href={pdfUrl} target="blank" variants={textVariants}>
              <motion.button variants={textVariants} whileHover={{ scale: 1.1 }}>
                See my CV
              </motion.button>
            </motion.a>
            <motion.a href="https://api.whatsapp.com/send?phone=6282325482326" target="_blank" variants={textVariants}>
              <motion.button variants={textVariants} whileHover={{ scale: 1.1 }}>
                Contact Me
              </motion.button>
            </motion.a>
          </motion.div>
          <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Web Developer and UX Designer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
