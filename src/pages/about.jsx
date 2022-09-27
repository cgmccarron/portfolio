import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "100vw" });
    }
    console.log("use in view = ", inView);
  }, [inView]);

  return (
    <div id="about">
      <h1 className="about-me-h1">who i am</h1>
      <div className="skills-div">
        <h2>skills</h2>
        <ul>
          <li>javascript</li>
          <li>html and css</li>
          <li>python</li>
          <li>java</li>
          <li>React.js</li>
          <li>A great attitude</li>
        </ul>
      </div>
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
