//Scene
const scene = new THREE.Scene();
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagenes/papel.jpg')

/* var fogColor = new THREE.Color(0xffffff);
	scene.background = fogColor; // Setting fogColor as the background color also
	scene.fog = new THREE.Fog(fogColor, 1, 1); */

  scene.fog = new THREE.Fog(0xFFFFFF, 10, 50);


var loader = new THREE.TextureLoader()
loader.load('../imagenes/cono.jpg', function(texture){
	scene.background = texture;
})

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer
const renderer = new THREE.WebGLRenderer

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometry
const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const cone = new THREE.Mesh( geometry, material );
scene.add ( cone );

camera.position.z = 30;
camera.position.y = 0;
camera.position.x = 0;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

//animation
function animate() {
    requestAnimationFrame(animate);
    cone.rotation.y +=0.01
    /* cone.rotation.x +=0.02 */
    renderer.render(scene, camera);

    line.rotation.y +=0.01;
	 /*  line.rotation.x +=0.02; */
	  renderer.render(scene, camera);
}
animate()