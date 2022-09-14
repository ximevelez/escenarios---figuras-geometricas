//Scene
const scene = new THREE.Scene();
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagenes/mar.jpg')

var loader = new THREE.TextureLoader()
loader.load('../imagenes/cilindro2.jpg', function(texture){
	scene.background = texture;
})

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer
const renderer = new THREE.WebGLRenderer

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometry
const geometry = new THREE.CylinderGeometry( 2, 2, 7, 10 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const cylinder = new THREE.Mesh( geometry, material );
scene.add ( cylinder );

camera.position.z = 15;
camera.position.y = 1;
camera.position.x = 1;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

//animation
function animate() {
    requestAnimationFrame(animate);
    cylinder.rotation.y +=0.01;
    cylinder.rotation.x +=0.01;
    renderer.render(scene, camera);

    line.rotation.y +=0.01;
	line.rotation.x +=0.01;
	line.render(scene, camera);
}
animate()