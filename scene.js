import * as THREE from ('./node_modules/three/build/three')

function createScene () {

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()

  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  const gridHelper = new THREE.GridHelper(10, 10)
  scene.add(gridHelper)

  const light = new THREE.PointLight(0xffffff, 1, 100)
  light.position.set(0, 0, 10)
  scene.add(light)

  camera.position.z = 5

  function animate () {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  animate()
}

module.exports = createScene
