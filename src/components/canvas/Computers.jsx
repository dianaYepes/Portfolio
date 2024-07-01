import React from 'react'
import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import Loader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./batman/lego_batman/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={5}
      groundColor="black"/>
      <pointLight intensity={0}/>
      <primitive
        object={computer.scene}
        scale = {.08}
        position={[0,-3.4,0,0]}
        rotation = {[0,1.35,0]}
      />
    </mesh>
  )
}

const ComputerCanvas = ()=>{
  return(
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
    <Suspense fallback={<Loader/>} >
      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers/>
    </Suspense>
    <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas