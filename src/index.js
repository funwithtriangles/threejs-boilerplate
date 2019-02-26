import * as THREE from 'three'

import { scene, camera, composer, startAnimation } from './setup'
import { BloomEffect, EffectPass } from 'postprocessing'

// Scene
const mat = new THREE.MeshNormalMaterial()
const geom = new THREE.TorusBufferGeometry(1, 0.3, 16, 32)
const mesh = new THREE.Mesh(geom, mat)
scene.add(mesh)

// Post processing
const effectPass = new EffectPass(camera, new BloomEffect())
effectPass.renderToScreen = true
composer.addPass(effectPass)

// Animate
startAnimation((f) => {
  // f value is frames passed
  mesh.rotation.y += 0.01 * f
})
