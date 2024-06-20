

'use client';


import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
// import Model from './Model';
import { Environment, Float } from '@react-three/drei'
//import { useMotionValue, useSpring } from "framer-motion"
//import Cube from "./cube.js"
import dynamic from "next/dynamic"
import { ScrollControls } from "@react-three/drei";


const Cube = dynamic(() => import ("components/explosion/Model4.js"), {
    ssr: false,
})

export default function Explosion() {

 


  return (
  //  <div>
  //     What the fuck you are talking way
  //  </div>
    
    <Canvas  orthographic camera={{position: [0, 0, 200], zoom: 50}}>
        <directionalLight position={[-5, -5, -5]} intensity={2} /> 
       <Suspense fallback={null}>
       <ScrollControls pages={0}>
       <Float floatIntensity={2} speed={2}  rotationIntensity={0}>
          <Cube />
          </Float>
          </ScrollControls>
       </Suspense>
      <Environment preset="studio"/>
    </Canvas>
      )

}


{/* <Canvas gl={{antialias: true}} dpr={[1,1.5]} orthographic camera={{position: [0, 0, 200], zoom: 80}}></Canvas> */}