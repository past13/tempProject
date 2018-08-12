var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2(), INTERSECTED;
var scene, thumbnailscene;
var container, camera, controls;
var newContainer;
var renderer, renderer1;
var mesh;

var parameters;
var pallet;

var containers = [];
var scenes = [];

var snapflag = true;
var strDownloadMime = "image/octet-stream";



function initThreeJs () {
	scene = new THREE.Scene();

	// CAMERA
	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 2000;

	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	
	camera.position.set(0,150,400);
	camera.lookAt(scene.position);	

	container = document.getElementById( 'ThreeJS' );	
	newContainer = document.getElementById('3dList');

	// RENDERER
	// if ( Detector.webgl )
    renderer = new THREE.WebGLRenderer({ antialias: true }); //antialias: true, 
	// else
	// 	renderer = new THREE.CanvasRenderer(); 
		
	rendererNew = new THREE.WebGLRenderer({ preserveDrawingBuffer: true}); //antialias: true, 
	rendererNew.setSize(400, 300);


	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	container.appendChild( renderer.domElement );

	
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	
	// LIGHTS
	var light = new THREE.DirectionalLight(0xffd0d0);
	light.position.set(-100,50,100);
	scene.add(light);
	var seclight = new THREE.DirectionalLight(0xe0e0ff);
	seclight.position.set(100,50,-100);	
	scene.add(seclight);
	var ambientlight = new THREE.AmbientLight();
	scene.add(ambientlight);

	var contianerlist = globalrecipe.containerlist;
	var order = globalrecipe.order;

	//add containers to list
	for (i=0; i<contianerlist.length; i++) {
		var pallet = prepareContainer(contianerlist[i], order);
		pallet.mesh.scale.set(.09, .09, .09);
		scenes.push(pallet.mesh);		
	}

	// var currentModel = 1;
	// if (currentModel === 1) {
	// 	scenes.push(scene.add(pallet.mesh));		
	// }

	//summaryTable.js
	// overalTable(resultresult);
	
	var canvastest = document.querySelector('canvas');	
	canvastest.addEventListener( 'mousedown', onDocumentMouseDown, false );	
}
function onDocumentMouseDown( event ) {    
	event.preventDefault();    
	mouse.x = ((event.clientX -renderer.domElement.offsetLeft) / renderer.domElement.width) * 2 - 1;
	mouse.y = -((event.clientY - renderer.domElement.offsetTop) / renderer.domElement.height) * 2 + 1;
	getMeshInfo();
}	
function getMeshInfo(obj) {
	raycaster.setFromCamera( mouse, camera );
	
	var intersects = raycaster.intersectObjects(containers[0].mesh.children, true );
	if (obj !== undefined && intersects !== undefined) {
		for (i=0; i<obj.length; i++) {	
			obj[i].node.material.color.setHex( obj[i].color );	
		} 
	}
	else {				
		if ( intersects.length > 0) {
			if ( INTERSECTED != intersects[ 0 ].object ) {
				if ( INTERSECTED ) 
					INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );	
				if (intersects[ 0 ].object.userData.productcode !== undefined) {	
					INTERSECTED = intersects[ 0 ].object;
					INTERSECTED.material = INTERSECTED.material.clone();

					INTERSECTED.material.emissive.setHex( 0x2BD80D );		
												
				}
			//mark groups
			// INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();			
			// INTERSECTED.material.emissive.setHex( 0x2BD80D );
			}			
			//mark groups
			// INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();			
			// INTERSECTED.material.emissive.setHex( 0x2BD80D );
			// intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );        
		}
		else {
			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
				INTERSECTED = null;
			}		
	}	
}
function animate() {		
	requestAnimationFrame( animate );
	update();
	renderer.render( scene, camera );
}
function update() {	
	controls.update();
}
function newThingsToDo(newItem) {

	rendererNew.render( newItem, camera );
}
function saveAsImage() {	
	// renderer1.render( scene, camera );

	var imgData, imgNode;
	try {
		var strMime = "image/npg";		
		var panel2 = document.getElementById('panel2');
		
		var currentModel = 1;

		for (i=0; i<scenes.length; i++) {
			
			if (currentModel === i) {
				scene.add(scenes[i]);
			}
						
			
			var img = document.createElement("img");
			
			
			console.log(rendererNew.domElement.toDataURL("image/npg"));
			// panel2.appendChild(img);
			console.log(img.src)
		}
		// saveFile(imgData.replace(strMime, strDownloadMime), "test.jpg");
	} catch (e) {
		// console.log(e);
		return;
	}
}
var saveFile = function (strData, filename) {
	
	var link = document.createElement('a');
	if (typeof link.download === 'string') {
		document.body.appendChild(link); //Firefox requires the link to be in the body
		link.download = filename;
		link.href = strData;
		link.click();
		document.body.removeChild(link); //remove the link when done
	} else {
		location.replace(uri);
	}
}

