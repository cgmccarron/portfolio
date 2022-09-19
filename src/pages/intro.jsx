import Cube from "../components/intro/cube";
import TextLoop from "../components/intro/TextLoop";

const Intro = () => {
  return (
    <div id="intro">
      <div className="greeting">
        <h1> Hello! My name is Christian</h1> <br />{" "}
        <h2 className="smallText">
          I am a <TextLoop />
        </h2>
      </div>
    </div>
  );
};

export default Intro;
