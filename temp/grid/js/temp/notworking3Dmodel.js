
	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2(), INTERSECTED;
	var container, scene, camera, renderer, controls, stats;
	var clock = new THREE.Clock();
	
	var globalrecipe;

	// custom global variables
	var result;
	var parameters;
	var gui;
	var pallet;

// function initThreeJs () {
// 	scene = new THREE.Scene();
// 	// CAMERA
// 	var SCREEN_WIDTH = 500;//window.innerWidth, 
// 	var SCREEN_HEIGHT = 400; //window.innerHeight;

// 	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 2000;

// 	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
// 	scene.add(camera);
// 	camera.position.set(0,150,400);
// 	camera.lookAt(scene.position);	
// 	// RENDERER
// 	if ( Detector.webgl )
//       renderer = new THREE.WebGLRenderer({antialias:true,
//   	});
// 	else
//     renderer = new THREE.CanvasRenderer(); 
			
// 	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

// 	container = document.getElementById( 'ThreeJS' );

// 	console.log(container)

// 	container.appendChild( renderer.domElement );

// 	controls = new THREE.OrbitControls( camera, renderer.domElement );
	
// 	// LIGHTS
// 	var light = new THREE.DirectionalLight(0xffd0d0);
// 	light.position.set(-100,50,100);
// 	scene.add(light);

// 	var seclight = new THREE.DirectionalLight(0xe0e0ff);
// 	seclight.position.set(100,50,-100);	
// 	scene.add(seclight);

// 	var ambientlight = new THREE.AmbientLight();
// 	scene.add(ambientlight);

// 	pallet = initMeshes();
// 	pallet.mesh.scale.set(.09, .09, .09);

// 	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 	var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// 	var cube = new THREE.Mesh( geometry, material );

// 	//summaryTable.js
// 	// overalTable(result);
//   	// pallet = result[0].mesh;
// 	scene.add(cube); //pallet.mesh

// 	var canvastest = document.querySelector('canvas');	

// 	canvastest.addEventListener( 'mousedown', onDocumentMouseDown, false );		
// }

// function onDocumentMouseDown( event ) {    
// 	event.preventDefault();    	

// 	mouse.x = ((event.clientX -renderer.domElement.offsetLeft) / renderer.domElement.width) * 2 - 1;
// 	mouse.y = -((event.clientY - renderer.domElement.offsetTop) / renderer.domElement.height) * 2 + 1;
// 	getMeshInfo();
// }
	
// function getMeshInfo(obj) {
// 	raycaster.setFromCamera( mouse, camera );
// 	var intersects = raycaster.intersectObjects(pallet.children, true );


// 	if (obj !== undefined && intersects !== undefined) {
// 		for (i=0; i<obj.length; i++) {				
// 			obj[i].node.material.color.setHex( obj[i].color );	

// 		} 
// 	}
// 	else {
// 		if ( intersects.length > 0) {
// 			if ( INTERSECTED != intersects[ 0 ].object ) {
// 				if ( INTERSECTED ) 
// 					INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );	
// 				if (intersects[ 0 ].object.userData.productcode !== undefined) {	
// 					INTERSECTED = intersects[ 0 ].object;
// 					INTERSECTED.material = INTERSECTED.material.clone();

// 					console.log(intersects[ 0 ].object)

// 					INTERSECTED.material.emissive.setHex( 0x2BD80D );		
												
// 				}
// 			//mark groups
// 			// INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();			
// 			// INTERSECTED.material.emissive.setHex( 0x2BD80D );
// 			}			
// 			//mark groups
// 			// INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();			
// 			// INTERSECTED.material.emissive.setHex( 0x2BD80D );
// 			// intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );        
// 		}
// 		else {
// 			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
// 				INTERSECTED = null;
// 			}		
// 	}	
// }
// function animate() {		
// requestAnimationFrame( animate );
// 	render();		
// 	update();
// }
// function update() {
// 	controls.update();
// }
// function render() {
// 	renderer.render( scene, camera );
// }function initThreeJs () {
// 	scene = new THREE.Scene();
// 	// CAMERA
// 	var SCREEN_WIDTH = 500;//window.innerWidth, 
// 	var SCREEN_HEIGHT = 400; //window.innerHeight;

// 	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 2000;

// 	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
// 	scene.add(camera);
// 	camera.position.set(0,150,400);
// 	camera.lookAt(scene.position);	
// 	// RENDERER
// 	if ( Detector.webgl )
//       renderer = new THREE.WebGLRenderer({antialias:true,
//   	});
// 	else
//     renderer = new THREE.CanvasRenderer(); 
			
// 	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

// 	container = document.getElementById( 'ThreeJS' );

// 	console.log(container)

// 	container.appendChild( renderer.domElement );

// 	controls = new THREE.OrbitControls( camera, renderer.domElement );
	
// 	// LIGHTS
// 	var light = new THREE.DirectionalLight(0xffd0d0);
// 	light.position.set(-100,50,100);
// 	scene.add(light);

// 	var seclight = new THREE.DirectionalLight(0xe0e0ff);
// 	seclight.position.set(100,50,-100);	
// 	scene.add(seclight);

// 	var ambientlight = new THREE.AmbientLight();
// 	scene.add(ambientlight);

// 	pallet = initMeshes();
// 	pallet.mesh.scale.set(.09, .09, .09);

// 	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 	var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// 	var cube = new THREE.Mesh( geometry, material );

// 	//summaryTable.js
// 	// overalTable(result);
//   	// pallet = result[0].mesh;
// 	scene.add(cube); //pallet.mesh

// 	var canvastest = document.querySelector('canvas');	

// 	canvastest.addEventListener( 'mousedown', onDocumentMouseDown, false );		
// }

// function onDocumentMouseDown( event ) {    
// 	event.preventDefault();    	

// 	mouse.x = ((event.clientX -renderer.domElement.offsetLeft) / renderer.domElement.width) * 2 - 1;
// 	mouse.y = -((event.clientY - renderer.domElement.offsetTop) / renderer.domElement.height) * 2 + 1;
// 	getMeshInfo();
// }
	
// function getMeshInfo(obj) {
// 	raycaster.setFromCamera( mouse, camera );
// 	var intersects = raycaster.intersectObjects(pallet.children, true );


// 	if (obj !== undefined && intersects !== undefined) {
// 		for (i=0; i<obj.length; i++) {				
// 			obj[i].node.material.color.setHex( obj[i].color );	

// 		} 
// 	}
// 	else {
// 		if ( intersects.length > 0) {
// 			if ( INTERSECTED != intersects[ 0 ].object ) {
// 				if ( INTERSECTED ) 
// 					INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );	
// 				if (intersects[ 0 ].object.userData.productcode !== undefined) {	
// 					INTERSECTED = intersects[ 0 ].object;
// 					INTERSECTED.material = INTERSECTED.material.clone();

// 					console.log(intersects[ 0 ].object)

// 					INTERSECTED.material.emissive.setHex( 0x2BD80D );		
												
// 				}
// 			//mark groups
// 			// INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();			
// 			// INTERSECTED.material.emissive.setHex( 0x2BD80D );
// 			}			
// 			//mark groups
// 			// INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();			
// 			// INTERSECTED.material.emissive.setHex( 0x2BD80D );
// 			// intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );        
// 		}
// 		else {
// 			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
// 				INTERSECTED = null;
// 			}		
// 	}	
// }
// function animate() {		
// requestAnimationFrame( animate );
// 	render();		
// 	update();
// }
// function update() {
// 	controls.update();
// }
// function render() {
// 	renderer.render( scene, camera );
// }