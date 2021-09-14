import { usePlane } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import { RepeatWrapping } from 'three'

export default function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))

  const texture = useTexture('../images/grass.jpeg')
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.repeat.set(240, 240)

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={texture} color="green" />
    </mesh>
  )
}
