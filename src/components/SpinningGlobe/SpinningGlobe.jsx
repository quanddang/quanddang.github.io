import { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from '@react-three/drei';
import earthTextureSrc from '../../assets/earthTexture.jpg';
import { useRef } from 'react';

const Globe = () => {
  const earthTexture = useTexture(earthTextureSrc);
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.003;
  });

  const vertexShader = `
    varying vec2 vertexUV;
    varying vec3 vertexNormal;

    void main() {
      vertexUV = uv;
      vertexNormal = normalize(normalMatrix * normal);

      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `;
  const fragmentShader = `
    uniform sampler2D globeTexture;
    varying vec2 vertexUV;
    varying vec3 vertexNormal;

    void main() {
      float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
      vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

      gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
    }
  `;

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[5, 50, 50]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          globeTexture: { value: earthTexture },
        }}
      />
    </mesh>
  );
};

const Atmosphere = () => {
  const atmosphereVertexShader = `
    varying vec3 vertexNormal;

    void main() {
      vertexNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  const atmosphereFragmentShader = `
    varying vec3 vertexNormal;

    void main() {
      float intensity = pow(0.8 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
      gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
    }
  `;

  return (
    <mesh scale={[1.1, 1.1, 1.1]}>
      <sphereGeometry args={[5, 50, 50]} />
      <shaderMaterial
        vertexShader={atmosphereVertexShader}
        fragmentShader={atmosphereFragmentShader}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

const SpinningGlobe = () => {
  return (
    <Canvas
      className="canvas"
      style={{
        width: '100%',
        height: '400px',
        margin: '0 0 50px 0 ',
        cursor: 'pointer',
      }}
    >
      <PerspectiveCamera makeDefault pov={75} position={[0, 0, 13]} />
      <Suspense fallback={null}>
        <Globe />
        <Atmosphere />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
      />
    </Canvas>
  );
};

export default SpinningGlobe;
