import TextLoop from "../components/intro/TextLoop";
import { Canvas } from "@react-three/fiber";
import { Earth } from "../components/models/earth";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Clock } from "three";
import { Vector3 } from "three";

const Intro = () => {
  let angle = Math.PI / 2;

  const vector = new Vector3(0, 0, 0);
  return (
    <div id="intro">
      <div className="greeting">
        <h1> Hello! My name is Christian</h1> <br />{" "}
        <h2 className="smallText">
          I am a <TextLoop />
        </h2>
      </div>
      <Canvas
        style={{ background: "var(--bg)" }}
        camera={{ position: [0, 0, 10] }}
      >
        <OrbitControls enableZoom={false} />
        <spotLight intensity={0.9} penumbra={1} position={[0, 5, 8]} />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Earth scale={[0.01, 0.01, 0.01]} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Intro;
