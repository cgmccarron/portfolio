import Cube from "../components/cube";
import TextLoop from "../components/TextLoop";

const Intro = () => {
  return (
    <div id="intro">
      <div className="greeting">
        Hello! My name is Christian <br /> I am a <TextLoop />
      </div>
      <Cube className="cube" />
    </div>
  );
};

export default Intro;
