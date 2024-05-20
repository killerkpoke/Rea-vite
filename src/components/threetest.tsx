// import * as THREE from 'three'
// import { useRef, useState } from 'react'
// import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

// function Box(props: ThreeElements['mesh']) {
//   const meshRef = useRef<THREE.Mesh>(null!)
//   const [hovered, setHover] = useState(false)
//   // const [active, setActive] = useState(false)
//   // useFrame((_state, delta) => (meshRef.current.rotation.y -= delta * 0.5))
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       // scale={active ? 3 : 2}
//       // onClick={(_event) => setActive(!active)}
//       onPointerOver={(_event) => setHover(true)}
//       onPointerOut={(_event) => setHover(false)}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color={hovered ? 'red' : 'blue'} />
//     </mesh>
//   )
// }
// export function Threetest(): JSX.Element {
//     return (
//       <Canvas>
//         <>
//         <ambientLight intensity={Math.PI / 2} />
//         <spotLight
//             position={[10, 10, 10]}
//             angle={0.15}
//             penumbra={1}
//             decay={0}
//             intensity={Math.PI} />
//         <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
//         <Box position={[-5, 0, 0]} />
//         <Box position={[5, 0, 0]} /></>
//       </Canvas>
//     );

// }

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

const Logo: React.FC<{ position: [number, number, number] }> = ({
  position,
}) => {
  const ref = useRef<THREE.Mesh | null>(null);
  const color = "#020817";
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref}>
      <Text position={position} color={new THREE.Color(color)}>
        balazs.david.kohalmi@gmail.com
      </Text>
    </mesh>
  );
};

export function Threetest(): JSX.Element {
  return (
    <Canvas
      style={{ height: "600px" }}
      className="w-full border border-gray-100 rounded-xl bg-gray-300"
      camera={{
        position: [0, 0, 10],
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Logo position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
}
