//escenario
const scene = new THREE.Scene();
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagenes/metalizado.jpg')

/* scene.background = new THREE.Color(0x800080) */
var fogColor = new THREE.Color(0xffffff);
	scene.background = fogColor; 
	scene.fog = new THREE.Fog(fogColor, 0.25, 5);

var loader = new THREE.TextureLoader()
loader.load('../imagenes/cubo.jpg', function(texture){
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
const material = new THREE.MeshMatcapMaterial();

material.matcap = matcap;
material.flatShading = true;
const cube1 = new THREE.Mesh( geometry, material );
scene.add( cube1 );
cube1.position.x = 0;

/* this.scene_.fog = new THREE.Fog(0xDFE9F3, 3, 1000.) */
/* camera.position.x = 2; */
/* camera.position.y = 2; */
camera.position.z = 5;


/* const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
 */
/* const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xff0000})
);
cube1.position.set(5, 0, 0); */

const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({color: 0xffffff})
);
cube2.position.x = 3;

const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xffffff})
);
cube3.position.x = -2.8;

const cube4 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xffffff})
);

cube4.position.x = -5.5;

/* const plane1 = new THREE.Mesh(
	new THREE.PlaneGeometry(100,100),
	new THREE.MeshBasicMaterial({ color: "aqua"})
);
plane1.position.set(0, -5, 0);
plane1.rotateX(-Math.PI / 2);
 */
scene.add(cube1, cube2, cube3, cube4);

/* var control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 1
control.maxDistance = 10 */

//pointerLockControls
/* const PointerLockControls = new THREE.PointerLockControls( camera, renderer.domElement );
document.getElementById('btnplay').onclick = () => {
	PointerLockControls.lock();
}; */

let objects = [cube1, cube2, cube3, cube4]

const dcontrols = new THREE.DragControls( objects, camera, renderer.domElement );
dcontrols.deactivate();
dcontrols.activate();

dcontrols.addEventListener("hoveron",function(event){
	event.object.material.wireframe = true;
	event.object.scale.y *=4;
});

dcontrols.addEventListener("hoveroff",function(event){
	event.object.material.wireframe = false;
	event.object.scale.y /=4;
});


/* dcontrols.addEventListener("hoveron", function (event) {
	console.log(event.object);
	event.object.scale.y *= 2;
}) */

/* dcontrols.addEventListener("hoveroff", function (event) {
	event.object.scale.y /= 2;
}) */
// add event listener to highlight dragged objects

dcontrols.addEventListener( "dragstart", function ( event ) {
	console.log(event.object.material);
	event.object.material.transparent = true;
	event.object.material.opacity = 0.5;
	
} );

dcontrols.addEventListener( "dragend", function ( event ) {
	event.object.material.opacity = 1.0;
	/* event.object.material.emissive.set( 0x000000 ); */
	
} );

//flyControls
const flyControls = new THREE.FlyControls(camera, renderer.domElement);
flyControls.movementSpeed =50;
flyControls.rollSpeed =0.01;
flyControls.autoForward =false;
flyControls.dragToLock =false;

//animacion
function animate() {
	requestAnimationFrame(animate);
	cube1.rotation.y += 0.01;
	cube1.rotation.x += 0.01;
	cube2.rotation.y += 0.01;
	cube2.rotation.x += 0.01;
	cube3.rotation.y += 0.01;
	cube3.rotation.x += 0.01;
	cube4.rotation.y += 0.01;
	cube4.rotation.x += 0.01;
	renderer.render(scene, camera);
	
	flyControls.update(0.5);


	line.rotation.y +=0.01;
	line.rotation.x +=0.01;
	renderer.render(scene, camera);

}
animate();
