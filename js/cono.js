//Scene
const scene = new THREE.Scene();

/* var fogColor = new THREE.Color(0xffffff);
	scene.background = fogColor; // Setting fogColor as the background color also
	scene.fog = new THREE.Fog(fogColor, 1, 1); */

  scene.fog = new THREE.Fog(0xFFFFFF, 10, 50);


var loader = new THREE.TextureLoader()
loader.load('../imagenes/images.jpg', function(texture){
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
const material = new THREE.MeshBasicMaterial( {color: 0xe30052} );
const cone = new THREE.Mesh( geometry, material );
scene.add ( cone );

camera.position.z = 30;
camera.position.y = 1;
camera.position.x = 0;

//animation
function animate() {
    requestAnimationFrame(animate);
    cone.rotation.y +=0.01
    cone.rotation.x +=0.02
    renderer.render(scene, camera);
}
animate()