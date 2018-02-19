const canvas = document.getElementById("canvasTest");
console.log("main")

const sceneManager = new SceneManager(canvas);

bindEventListeners();
render();

     

function bindEventListeners() {
	window.onresize = resizeCanvas;
	resizeCanvas();	

	document.addEventListener( 'mousemove', onDocumentMouseMove, false ); 
	
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

function onDocumentMouseMove( event ) {	
	event.preventDefault();

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;  	
}