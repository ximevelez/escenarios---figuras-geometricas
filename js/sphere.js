//escenario
const scene = new THREE.Scene();
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagenes/metalizado.jpg')

/* scene.background = new THREE.Color(0x800080) */
var fogColor = new THREE.Color(0xffffff);
	scene.background = fogColor; // Setting fogColor as the background color also
	scene.fog = new THREE.Fog(fogColor, 0.25, 5);

var loader = new THREE.TextureLoader()
loader.load('../imagenes/sphere2.jpg', function(texture){
	scene.background = texture;
})
//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias
const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshNormalMaterial();
material.flatShading = true;
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

/* this.scene_.fog = new THREE.Fog(0xDFE9F3, 3, 1000.) */


/* camera.position.x = 2;
camera.position.y = 2; */
camera.position.z = 30;


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

//animacion
function animate() {
	requestAnimationFrame(animate);
	sphere.rotation.y += 0.01;
	sphere.rotation.x += 0.01;
	renderer.render(scene, camera);

	line.rotation.y +=0.01;
	line.rotation.x +=0.01;
	renderer.render(scene, camera);

}
animate();