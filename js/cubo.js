//escenario
const scene = new THREE.Scene();

/* scene.background = new THREE.Color(0x800080) */
var fogColor = new THREE.Color(0xffffff);
	scene.background = fogColor; // Setting fogColor as the background color also
	scene.fog = new THREE.Fog(fogColor, 0.25, 5);

var loader = new THREE.TextureLoader()
loader.load('../imagenes/background.jpg', function(texture){
	scene.background = texture;
})
//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); //X, Y, Z
const material = new THREE.MeshBasicMaterial( {color: 0x800080} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

/* this.scene_.fog = new THREE.Fog(0xDFE9F3, 3, 1000.) */


/* camera.position.x = 2;
camera.position.y = 2; */
camera.position.z = 3;

//animacion
function animate() {
	requestAnimationFrame(animate);
	cube.rotation.y += 0.1;
	cube.rotation.x += 0.1;
	renderer.render(scene, camera);
}
animate();
