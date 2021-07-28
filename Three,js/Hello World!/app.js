/*const scene = new THREE.Scene();

const grados = 75; // Grados
const aspecto = window.innerWidth / window.innerHeight; // Relación de aspecto
const cercania = 0.1; // Si el objeto está más cerca que esta distancia no se renderiza
const distancia = 5; // Si el objeto está más lejos que esta distancia no se renderiza

const camera = new THREE.PerspectiveCamera(grados, aspecto, cercania, distancia);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;

const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

renderer.render(scene, camera);*/





// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

//create a x-Asis
var geometry = new THREE.BoxGeometry(10,0.05,0.05);
var material = new THREE.MeshBasicMaterial( { color : "#00ffbc"});
var x = new THREE.Mesh( geometry,material);

//create a y-Asis
var geometry = new THREE.BoxGeometry(0.05,10,0.05);
var material = new THREE.MeshBasicMaterial( { color : "#00ffbc"});
var y = new THREE.Mesh( geometry,material);

//create a z-Asis
var geometry = new THREE.BoxGeometry(0.05,0.05,10);
var material = new THREE.MeshBasicMaterial( { color : "#00ffbc"});
var z = new THREE.Mesh( geometry,material);

// Add a (xyz)
scene.add(x);
scene.add(y);
scene.add(z);

// Add cube to Scene
scene.add( cube );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};




render();