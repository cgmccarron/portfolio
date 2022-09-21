import { Canvas } from "@react-three/fiber";
import Spheres from "../components/projects/spheres";

const Projects = () => {
  const checkWindowSize = () => {};

  return (
    <div className="projects-container">
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 2]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default Projects;
