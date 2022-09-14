//escenario
const scene = new THREE.Scene();
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagenes/madera.jpg')

var loader = new THREE.TextureLoader()
loader.load('../imagenes/lathe.jpg', function(texture){
	scene.background = texture;
})
//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias
const points = [];
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const geometry = new THREE.LatheGeometry( points );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );

/* this.scene_.fog = new THREE.Fog(0xDFE9F3, 3, 1000.) */


/* camera.position.x = 2;
camera.position.y = 2; */
camera.position.z = 30;


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x804000 } ) );
scene.add( line );

//animacion
function animate() {
	requestAnimationFrame(animate);
	lathe.rotation.y += 0.01;
	/* lathe.rotation.x += 0.01; */
	renderer.render(scene, camera);

	line.rotation.y +=0.01;
	/* line.rotation.x +=0.01; */
	renderer.render(scene, camera);

}
animate();