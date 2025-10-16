"use client"
import { CameraControls, OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import styles from "./scene.module.css";
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { div } from "three/tsl";
import { Object3D } from "three";



export default function Scene() {

  const gltf = useLoader(GLTFLoader, '/models/rocket_test.glb')
  console.log(gltf)
  return (
      <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
        <group>
          <mesh scale={[5, 5, 5]}>  
            <primitive object={gltf.scene} />
            <orthographicCamera>
              <OrbitControls/>
            </orthographicCamera>
          </mesh>
        </group>
      </Canvas>
  )
}
