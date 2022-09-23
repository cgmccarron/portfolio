import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Spheres from "../components/projects/spheres";
import Card from "../components/projects/card";

const Projects = () => {
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

        <Html className="projects-container" fullscreen>
          <Card
            imgSource="src\assets\images\odin-calculator.PNG"
            title="Odin Calculator"
            description="A calculator made with JS and HTML/Css"
          />
          <Card
            imgSource="src\assets\images\odin-ticTacToe.PNG"
            title="Odin Tic Tac Toe"
            description="A game of tic tac toe made with JS and HTML/Css"
          />
          <Card
            imgSource="src\assets\purple-background.jpg"
            title="Purple"
            description="this is a cool purple picture"
          />
        </Html>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 2]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default Projects;
