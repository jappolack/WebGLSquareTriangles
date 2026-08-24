import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.167.1/examples/jsm/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

// Camera
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(0, 0, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);

// Orbit Controls
const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;

// Geometry consisting of TWO triangles
const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array([
    // Triangle 1 (Red)
    -1, -1, 0,
     1, -1, 0,
     1,  1, 0,

    // Triangle 2 (Blue)
    -1, -1, 0,
     1,  1, 0,
    -1,  1, 0
]);

const colors = new Float32Array([
    // Red Triangle
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,

    // Blue Triangle
    0, 0, 1,
    0, 0, 1,
    0, 0, 1
]);

geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(vertices, 3)
);

geometry.setAttribute(
    'color',
    new THREE.BufferAttribute(colors, 3)
);

// Material using vertex colors
const material = new THREE.MeshBasicMaterial({
    vertexColors: true,
    side: THREE.DoubleSide
});

// Mesh
const square = new THREE.Mesh(
    geometry,
    material
);

scene.add(square);

// White edge lines
const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial({
        color: 0xffffff
    })
);

square.add(edges);

// Animation
function animate() {

    requestAnimationFrame(animate);

    square.rotation.y += 0.01;
    square.rotation.x += 0.005;

    controls.update();

    renderer.render(
        scene,
        camera
    );
}

animate();

// Resize Handling
window.addEventListener('resize', () => {

    camera.aspect =
        window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});