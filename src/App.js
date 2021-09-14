import { Canvas } from '@react-three/fiber'
import { Sky, PointerLockControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground, Player, Cube } from './components/'

function App() {
  return (
    <Canvas shadows colorManagement camera={{ fov: 45 }}>
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={2.8} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Cube position={[0, 1, -10]} />
        <Ground />
        <Player />
      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}

export default App
