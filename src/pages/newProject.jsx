import { useState } from "react";
import Modal from "../components/modal/modal";
import Spheres from "../components/projects/spheres";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Card from "../components/projects/card";
import { AnimatePresence } from "framer-motion";

const NewProjects = () => {
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
    tictactoe:
      "This is a project from the Odid Project curriculum that requried me to build a simple tic tac toe game using javascript and objects.",
    project3:
      "this is a place holder for porject 3. I am not sure what I'm going to build yet but I hope it will be useful and cool.",
    project4:
      "This will have a link to the odin project and show off a few of my projects from the curriuclum",
  };

  return (
    <div
      className="projects-container"
      style={{ background: "var(--bg-accent)" }}
      id="projects"
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
        description="A game of tic tac toe"
        handleModal={() => toggleModal("tictactoe")}
      />
      <Card
        imgSource="src\assets\purple-background.jpg"
        title="Purple"
        description="this is a cool purple picture"
        handleModal={() => toggleModal("project3")}
      />

      <Card
        imgSource="src\assets\purple-background.jpg"
        title="Purple Background"
        description="this is a placeholder for a project"
        handleModal={() => toggleModal("project4")}
      />

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

export default NewProjects;
