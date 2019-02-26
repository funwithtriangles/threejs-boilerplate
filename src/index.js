import * as THREE from 'three'

import { scene, camera, renderer } from './setup'

const mat = new THREE.MeshNormalMaterial()
const geom = new THREE.TorusBufferGeometry(1, 0.3, 16, 32)
const mesh = new THREE.Mesh(geom, mat)

scene.add(mesh)

const animate = () => {
  window.requestAnimationFrame(animate)

  mesh.rotation.y += 0.01

  renderer.render(scene, camera)
}

animate()
