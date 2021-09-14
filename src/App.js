import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Sky, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Physics, useSphere, useBox } from '@react-three/cannon'
import { Cube, Ground, Player, Camera } from './components/'

import { useController } from './hooks/useController'

function App() {
  const camera = useRef()

  return (
    <Canvas shadows colorManagement camera={[0, 1, 0]}>
      <Camera fov={50} />
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground position={[0, 0.5, 0]} />
        <Cube position={[0, 1, 0]} type="log" />
        {false && <Player position={[0, 3, 10]} />}
        {false && (
          <PerspectiveCamera ref={camera} makeDefault position={[0, 33, 10]}>
            <mesh />
          </PerspectiveCamera>
        )}
        <OrbitControls camera={camera.current} />
      </Physics>
    </Canvas>
  )
}

export default App
