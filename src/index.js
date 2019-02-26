import * as THREE from 'three'

import { scene, camera, composer, clock, stats } from './setup'
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

const animate = () => {
  stats.begin()
  const delta = clock.getDelta()
  const deltaFPS = delta * 60
  window.requestAnimationFrame(animate)

  mesh.rotation.y += 0.01 * deltaFPS

  composer.render(delta)

  stats.end()
}

animate()
