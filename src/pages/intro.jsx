import TextLoop from "../components/intro/TextLoop";
import { Canvas } from "@react-three/fiber";
import { Earth } from "../components/models/earth";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { useThree } from "@react-three/fiber";

const Intro = () => {
  return (
    <div id="intro">
      <div className="greeting">
        <h1> Hello! My name is Christian</h1> <br />{" "}
        <h2 className="smallText">
          I am a <TextLoop />
        </h2>
      </div>
      <Canvas frameloop="demand" style={{ background: "var(--bg)" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Earth scale={[0.014, 0.014, 0.014]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Intro;
