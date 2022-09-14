//Scene
const scene = new THREE.Scene();
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagenes/cafe.jpg')

var loader = new THREE.TextureLoader()
loader.load('../imagenes/capsula.jpg', function(texture){
	scene.background = texture;
})

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer
const renderer = new THREE.WebGLRenderer

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometry
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const capsule = new THREE.Mesh( geometry, material );
scene.add ( capsule );

camera.position.z = 5;
camera.position.y = 0;
camera.position.x = 0.2;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

//animation
function animate() {
    requestAnimationFrame(animate);
    capsule.rotation.y +=0.01
    capsule.rotation.x +=0.01
    capsule.rotation.z +=0.01
    renderer.render(scene, camera);

    line.rotation.y +=0.01;
	line.rotation.x +=0.01;
    line.rotation.z +=0.01
	renderer.render(scene, camera);
}
animate()