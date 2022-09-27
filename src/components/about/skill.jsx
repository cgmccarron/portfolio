import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiPython,
  DiNodejsSmall,
  DiDjango,
} from "react-icons/di";
import { SiRedux, SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const skills = [
    { id: 5, title: "Python", icons: <DiPython /> },
    { id: 7, title: "Django", icons: <DiDjango /> },
    { id: 2, title: "Javascript", icons: <DiJavascript1 /> },
    { id: 3, title: "HTML5", icons: <DiHtml5 /> },
    { id: 4, title: "CSS3", icons: <DiCss3 /> },
    { id: 1, title: "ReactJS", icons: <DiReact /> },
    { id: 6, title: "NodeJS", icons: <DiNodejsSmall /> },
    { id: 8, title: "MongoDB", icons: <SiMongodb /> },
    { id: 10, title: "Express", icons: <SiExpress /> },
    { id: 9, title: "Redux", icons: <SiRedux /> },
  ];

  useEffect(() => {
    if (inView) {
      animation.start((i) => ({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.2,
        },
      }));
    }
    if (!inView) {
      animation.start({
        x: -50,
        y: -50,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div className="skills-container" ref={ref}>
      {skills.map((skill, i) => (
        <motion.div
          key={skill.id}
          className="skills-div"
          custom={i}
          animate={animation}
        >
          <h1>{skill.icons}</h1>
          <h4>{skill.title}</h4>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
