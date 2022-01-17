const canvas = document.querySelector('.webgl')
// scene
const scene = new THREE.Scene()

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width:800,
  height: 600
}

// camera - fov (field of view)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.width)
camera.position.z = 3 // z representa a posiçao de voce ate o objeto
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
