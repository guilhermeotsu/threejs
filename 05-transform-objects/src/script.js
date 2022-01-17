import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

mesh.position.x = 0.8
mesh.position.y = 1.1
mesh.position.z = -0.1

scene.add(mesh)

// Axes - Representa graficamente x, y e z
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// function animate() {
//   requestAnimationFrame(animate)

//   mesh.rotation.x += 0.02

//   mesh.rotation.y += 0.01

//   mesh.rotation.z += 0.1

//   renderer.render(scene, camera)
// }

// animate()

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
