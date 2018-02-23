	
console.log("main")

if (document.getElementById('canvas') !== null) {
	
	console.log("main inside")

var newelement = document.createElement('canvas');
newelement.id = 'canvasTest';

document.body.appendChild(newelement);

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

}