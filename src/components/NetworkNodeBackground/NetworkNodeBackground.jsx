import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Node({ position, velocity, aspectRatio }) {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.position.x += velocity[0] * delta;
    mesh.current.position.y += velocity[1] * delta;

    if (
      mesh.current.position.x > 10 * aspectRatio ||
      mesh.current.position.x < -10 * aspectRatio
    ) {
      velocity[0] = -velocity[0];
    }

    if (mesh.current.position.y > 10 || mesh.current.position.y < -10) {
      velocity[1] = -velocity[1];
    }
  });

  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <mesh ref={mesh} position={position}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <sphereBufferGeometry attach="geometry" args={[0.1, 16, 16]} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <meshBasicMaterial attach="material" color={0xffffff} />
      </mesh>
    </>
  );
}

function NetworkNodesBackground({ nodeCount = 50 }) {
  const [nodes, setNodes] = useState([]);
  const aspectRatio = window.innerWidth / window.innerHeight;

  useEffect(() => {
    const newNodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const position = new THREE.Vector3(
        (Math.random() * 20 - 10) * aspectRatio,
        Math.random() * 20 - 10,
        0
      );
      const velocity = [
        (Math.random() * 0.5 - 0.25) * aspectRatio,
        Math.random() * 0.5 - 0.25,
      ];
      newNodes.push({ position, velocity });
    }
    setNodes(newNodes);
  }, [nodeCount, aspectRatio]);

  return (
    <Canvas
      className="threejs-canvas"
      style={{ background: '#121316', height: '600px', margin: '0 0 50px 0 ' }}
      camera={{ position: [0, 0, 10], aspect: aspectRatio }}
    >
      {nodes.map((node, i) => (
        <Node
          key={i}
          position={node.position}
          velocity={node.velocity}
          aspectRatio={aspectRatio}
        />
      ))}
    </Canvas>
  );
}

export default NetworkNodesBackground;
