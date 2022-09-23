import { useState } from "react";
import Modal from "../components/modal/modal";
import Spheres from "../components/projects/spheres";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Card from "../components/projects/card";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("unselected");
  const toggleModal = (value) => {
    setModalOpen(!modalOpen);
    if (value) {
      setSelectedProject(value);
    }
  };

  const infoBlurbs = {
    calculator:
      "This is a project from the Odin Project that required me to use html/css and javascript to build a calculator in the browser. I had to focus on learning objects in js to make this project work. At the time it was one of my best looking projects and I even included a light and dark mode",
  };

  return (
    <div className="canvas-container" id="projects">
      <Canvas className="canvas">
        <Spheres color="#48BF91" x={-0.3} z={0} y={-6} speed={0.019} />
        <Spheres color="#4DB4D7" x={-3} z={-1} y={-4} speed={0.021} />
        <Spheres color="#0076BE" x={2.7} z={0} y={-2} speed={0.012} />
        <Spheres color="#48BF91" x={4} z={-1} y={-5} speed={0.03} />
        <Spheres color="#0076BE" x={-4.2} z={-1} y={-4} speed={0.025} />
        <Spheres color="#8BD9C7" x={1} z={0} y={-2} speed={0.013} />
        <Spheres color="#4DB4D7" x={5} z={-1} y={-5} speed={0.023} />

        <Html
          className="projects-container"
          fullscreen
          style={{ visibility: !modalOpen ? "visible" : "hidden" }}
        >
          <Card
            imgSource="src\assets\images\odin-calculator.PNG"
            title="Odin Calculator"
            description="A calculator made with JS and HTML/Css"
            handleModal={() => toggleModal("calculator")}
          />
          <Card
            imgSource="src\assets\images\odin-ticTacToe.PNG"
            title="Odin Tic Tac Toe"
            description="A game of tic tac toe made with JS and HTML/Css"
            handleModal={toggleModal}
          />
          <Card
            imgSource="src\assets\purple-background.jpg"
            title="Purple"
            description="this is a cool purple picture"
            handleModal={toggleModal}
          />

          <Card
            imgSource="src\assets\purple-background.jpg"
            title="Purple Background"
            description="this is a placeholder for a project"
            handleModal={toggleModal}
          />
        </Html>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 2]} intensity={1} />
      </Canvas>
      <AnimatePresence intial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={toggleModal}
            text={infoBlurbs[selectedProject]}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
