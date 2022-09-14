//escenario
const scene = new THREE.Scene();
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagenes/ladrillos.jpg')

var loader = new THREE.TextureLoader()
loader.load('../imagenes/ring.jpg', function(texture){
	scene.background = texture;
})
//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias
const geometry = new THREE.RingGeometry( 1, 5, 32 );
const material = new THREE.MeshMatcapMaterial({side: THREE.DoubleSide });

material.matcap = matcap;
material.flatShading = true;
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
/* this.scene_.fog = new THREE.Fog(0xDFE9F3, 3, 1000.) */


/* camera.position.x = 2;
camera.position.y = 2; */
camera.position.z = 10;


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

//animacion
function animate() {
	requestAnimationFrame(animate);
	mesh.rotation.y += 0.01;
	mesh.rotation.x += 0.01;
	renderer.render(scene, camera);

	line.rotation.y +=0.01;
	line.rotation.x +=0.01;
	renderer.render(scene, camera);

}
animate();