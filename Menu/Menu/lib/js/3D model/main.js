
	// if (document.getElementById("dynamicPanels").textContent === 'Visualization' !== null) {
		// if (typeof document.getElementById("includedContent") !== null) 
		// $.loadScript('url_to_someScript.js', function(){	
		// //Stuff to do after someScript has loaded
		// });
		console.log($this) //first time load
		


if (($('#dynamicPanels').innerText === 'Visualization') ) {  //&& filename === 'dynamicPanels'
		console.log('hit')
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
	




