'use client'

import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}
