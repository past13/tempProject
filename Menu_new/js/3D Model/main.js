	
console.log("main")


var test = document.createElement('canvas');
test.id = 'canvasTest';

var trampam = document.getElementById('container');

console.log(document)

document.body.appendChild(test);

const canvas = document.getElementById("canvasTest");

const sceneManager = new SceneManager(canvas);

bindEventListeners();
render();
   
function bindEventListeners() {
	window.onresize = resizeCanvas;
	resizeCanvas();		
}

function resizeCanvas() {
	canvas.style.width = '100%';
	canvas.style.height= '100%';
	
	canvas.width  = canvas.offsetWidth;

	canvas.height = canvas.offsetHeight;
    
    sceneManager.onWindowResize();
}

function render() {
	requestAnimationFrame(render);	
    sceneManager.update();
}

