//Scene
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x56070C)

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer
const renderer = new THREE.WebGLRenderer

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometry
const geometry = new THREE.CylinderGeometry( 2, 2, 7, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0x7C3030} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add ( cylinder );

camera.position.z = 15;
camera.position.y = 1;
camera.position.x = 1;

//animation
function animate() {
    requestAnimationFrame(animate);
    cylinder.rotation.y +=1
    cylinder.rotation.x +=0.02
    renderer.render(scene, camera);
}
animate()