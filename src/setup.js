import './style.css'
import * as THREE from 'three'
import OrbitControlsModule from 'three-orbit-controls'
import { EffectComposer, RenderPass } from 'postprocessing'
import Stats from 'stats.js'

const OrbitControls = OrbitControlsModule(THREE)

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

window.addEventListener('resize', resize)

document.body.appendChild(renderer.domElement)
document.body.appendChild(stats.dom)

// eslint-disable-next-line no-new
new OrbitControls(camera)
