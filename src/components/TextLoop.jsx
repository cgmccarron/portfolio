import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "problem solver",
  "learner",
  "web developer",
  "world explorer",
  "doer",
  "creator",
];

const TextLoop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < phrases.length ? prevIndex + 1 : 0;
      });
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <motion.span
      key={index}
      animate={{ y: [-20, 0], opacity: [0, 1] }}
      className="textLoop"
    >
      {phrases[index]}
    </motion.span>
  );
};

export default TextLoop;
