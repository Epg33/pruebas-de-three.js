//creando una escena
const scene = new THREE.Scene();
//creando la camara y su perspectia
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );

//renderizando todo con WebGL
const renderer = new THREE.WebGLRenderer();
//indicando el tamaño de lo que tiene que renderizar
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//creando un cubo
const geometry = new THREE.BoxGeometry( )
//mnaterial y color
const material = new THREE.MeshBasicMaterial( {color: 0xffffff });
//cubo
const cube = new THREE.Mesh( geometry, material );
//añadiendo el cubo a la escena
scene.add( cube ); 

cube.position.y= 1;
//
camera.position.set ( 0, 0, 10 );
camera.lookAt( 0, 0, 0 )

renderer.render(scene, camera)

function animate (){
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.03;
}

document.getElementById("ani").addEventListener('click', animate, false)

const NewMaterial= new THREE.LineBasicMaterial( { color: 0x0000ff} );