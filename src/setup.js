import './style.css'
import * as THREE from 'three'
import OrbitControlsModule from 'three-orbit-controls'
const OrbitControls = OrbitControlsModule(THREE)

export const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)

export const scene = new THREE.Scene()

export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
camera.position.z = 5

const resize = () => {
  console.log(window.innerWidth)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', resize)

document.body.appendChild(renderer.domElement)

// eslint-disable-next-line no-new
new OrbitControls(camera)
