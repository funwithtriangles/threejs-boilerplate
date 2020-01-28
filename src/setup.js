import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer, RenderPass } from 'postprocessing'
import Stats from 'stats.js'

export const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)

export const scene = new THREE.Scene()

export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
camera.position.z = 5

export const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))

export const clock = new THREE.Clock()

export const stats = new Stats()

const resize = () => {
  console.log(window.innerWidth)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

export const startAnimation = (cb) => {
  const animate = () => {
    window.requestAnimationFrame(animate)
    stats.begin()
    const delta = clock.getDelta()
    const deltaFPS = delta * 60

    cb(deltaFPS)

    composer.render(delta)

    stats.end()
  }

  animate()
}

window.addEventListener('resize', resize)

document.body.appendChild(renderer.domElement)
document.body.appendChild(stats.dom)

// eslint-disable-next-line no-new
new OrbitControls(camera, renderer.domElement)
