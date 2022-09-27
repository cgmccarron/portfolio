import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Skills from "../components/about/skill";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 2,
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "100vw" });
    }
  }, [inView]);

  return (
    <div id="about">
      <h1 className="about-me-h1">A little bit about me</h1>
      <Skills />
      <div ref={ref} className="about-me-container">
        <motion.div animate={animation} className="about-me-text">
          I have taken college courses for Computer Science. Although I did not
          finish, I have continued to learn and challenge myself to grow as a
          developer. I am passioate about clean and reusable code and creating
          cool stuff. Being mostly self taught as has pushed me to find creative
          solutions and really dig dip into learning new technology. I live in
          Texas, USA. Apart from programming, I enjoy cooking, playing fantasy
          football, and watching Marvel movies
        </motion.div>
      </div>
    </div>
  );
};

export default About;
