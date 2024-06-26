import { useGLTF, Text, MeshTransmissionMaterial, Float } from '@react-three/drei'
import React, { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

export default function Model() {
    
    const mesh = useRef()
    const { nodes } = useGLTF("./headerrock1.glb")
    const { viewport } = useThree();


   useFrame( () => {
      mesh.current.rotation.x += 0.003
      mesh.current.rotation.y += 0.003
   })


   const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: {value: 1, min: 0, max: 1, step: 0.1},
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1},
    backside: { value: true},
})

    return(
        <group scale={viewport.width / 9}>
             <Text color={"#6e6b6b"}  fontSize={1.6} font='fonts/PPNeueMontreal-Bold.otf' position={[0, 0, -.5]}>
                PREPAD
             </Text>
             <Float speed={4} rotationIntensity={2} floatIntensity={2} floatingRange={[-0.3, 0.3]}>
             <mesh ref={mesh}  {...nodes.rock}>
                      <MeshTransmissionMaterial {...materialProps} />
             </mesh>
             </Float>
        </group>
    )
}