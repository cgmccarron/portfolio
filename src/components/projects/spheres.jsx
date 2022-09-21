import { useRef } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Spheres = (props) => {
  const sphereRef = useRef();

  const heightLimit = (y) => {
    if (y < 5.5) {
      return true;
    } else {
      return false;
    }
  };
  useFrame(() =>
    heightLimit(sphereRef.current.position.y)
      ? (sphereRef.current.position.y += props.speed)
      : (sphereRef.current.position.y = -5)
  );

  return (
    <Sphere
      ref={sphereRef}
      visable
      args={[1, 100, 100]}
      scale={0.5}
      position={[props.x, -4, props.z]}
    >
      <MeshDistortMaterial
        color={props.color}
        attach="material"
        distort={0.5}
        speed={props.speed}
        roughness={0}
      />
    </Sphere>
  );
};

export default Spheres;
