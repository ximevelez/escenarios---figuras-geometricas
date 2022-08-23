//Scene
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x00008B)

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer
const renderer = new THREE.WebGLRenderer

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometry
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0xADD8E6} );
const capsule = new THREE.Mesh( geometry, material );
scene.add ( capsule );

camera.position.z = 5;
camera.position.y = 0.5;
camera.position.x = 0.2;

//animation
function animate() {
    requestAnimationFrame(animate);
    capsule.rotation.y +=0.02
    capsule.rotation.x +=0.01
    capsule.rotation.z +=0.04
    renderer.render(scene, camera);
}
animate()