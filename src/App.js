import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground, Player, Camera } from './components/'

//import { useController } from './hooks/useController'

function App() {
  return (
    <Canvas shadows colorManagement camera={[0, 1, 0]}>
      <Camera fov={50} />
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics>
        <Ground />
        <Player />
      </Physics>
    </Canvas>
  )
}

export default App
