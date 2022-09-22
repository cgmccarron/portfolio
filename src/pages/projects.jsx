import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Spheres from "../components/projects/spheres";
import Card from "../components/projects/card";

const Projects = () => {
  return (
    <div className="canvas-container">
      <Canvas className="canvas">
        <Spheres color="#ffffff" x={0} z={0} speed={0.01} />
        <Html className="projects-container" fullscreen>
          <Card>This is Card 1</Card>
          <Card>card 2</Card>
          <Card>card 3</Card>
        </Html>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 2]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default Projects;
