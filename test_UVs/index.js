var camera;
var scene;
var renderer;
var mesh;
var videoTexture;
var video;
var stats;


init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);

  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 1, 1).normalize();
  scene.add(light);

  var geometry = new THREE.CubeGeometry(20, 40, 30);


    var texture = new THREE.ImageUtils.loadTexture('images/texture_5.jpg');

    var material = new THREE.MeshPhongMaterial({ map: texture}); //

    var top = [new THREE.Vector2(0, 0), new THREE.Vector2(.5, 0), new THREE.Vector2(.5, .5), new THREE.Vector2(.0, .5) ];
    var bottom = [new THREE.Vector2(.5, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, .5), new THREE.Vector2(.5, .5) ];
    var front = [new THREE.Vector2(0, .5), new THREE.Vector2(.5, .5), new THREE.Vector2(.5, 1), new THREE.Vector2(0, 1) ];
    var back = [new THREE.Vector2(.5, .5), new THREE.Vector2(1, .5), new THREE.Vector2(1, 1), new THREE.Vector2(.5, 1) ];

    geometry.faceVertexUvs[0] = [];

    geometry.faceVertexUvs[0][0] = [top[0], top[1], top[3]];
    geometry.faceVertexUvs[0][1] = [top[1], top[2], top[3]];

    geometry.faceVertexUvs[0][2] = [bottom[0], bottom[1], bottom[3]];
    geometry.faceVertexUvs[0][3] = [bottom[1], bottom[2], bottom[3]];

    geometry.faceVertexUvs[0][4] = [front[0], front[1], front[3]];
    geometry.faceVertexUvs[0][5] = [front[1], front[2], front[3]];

    geometry.faceVertexUvs[0][6] = [front[0], front[1], front[3]];
    geometry.faceVertexUvs[0][7] = [front[1], front[2], front[3]];

    geometry.faceVertexUvs[0][8] = [back[0], back[1], back[3]];
    geometry.faceVertexUvs[0][9] = [back[1], back[2], back[3]];

    geometry.faceVertexUvs[0][10] = [back[2], back[3], back[1]];
    geometry.faceVertexUvs[0][11] = [back[3], back[0], back[1]];

  mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -50;
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container').appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);

  render();
}

function animate() {
  mesh.rotation.x += 0.0070; // * Math.PI;
   mesh.rotation.y -= 0.004;

  render();
  requestAnimationFrame(animate);
}

function render() {
  renderer.render(scene, camera);
}


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}