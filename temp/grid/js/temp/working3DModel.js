function initThreeJs () {
	scene = new THREE.Scene();
	// CAMERA
	var SCREEN_WIDTH = 500;//window.innerWidth, 
	var SCREEN_HEIGHT = 400; //window.innerHeight;

	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 2000;

	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0,150,400);
	camera.lookAt(scene.position);	
	// RENDERER
	if ( Detector.webgl )
      renderer = new THREE.WebGLRenderer({antialias:true,
  	});
	else
    renderer = new THREE.CanvasRenderer(); 
			
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	container = document.getElementById( 'ThreeJS' );
	
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


	pallet.mesh.scale.set(.09, .09, .09);

	//summaryTable.js
	// overalTable(result);
  	// pallet = result[0].mesh;
	scene.add(pallet.mesh); 

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
	var intersects = raycaster.intersectObjects(pallet.mesh.children, true );
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

                    console.log(intersects[ 0 ].object.material)

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
	render();		
	update();
}
function update() {
	controls.update();
}
function render() {
	renderer.render( scene, camera );
} 








// function createOrderlines(container) {     
// 	this.container = container;
// 	for (var p in container.physicalresult.package) if (container.physicalresult.package.hasOwnProperty(p)) {
// 		var pack = container.physicalresult.package[p];		
// 		var mesh = new THREE.Mesh(pack.orderline.geometry, pack.orderline.material);                
// 		mesh.castShadow = true;
// 		mesh.receiveShadow = true;								
// 		mesh.userData = Object.assign({}, pack );                
// 		mesh.position.set(pack.x, pack.z, pack.y);
// 		mesh.rotation.set(pack.rotation.x, pack.rotation.z, pack.rotation.y);                
// 		container.mesh.add(mesh);               

// 		var edges = new THREE.EdgesGeometry( pack.orderline.geometry ); //missing sphere parameters
	
// 		//todo: BUG lineWidth is not a property of this material
// 		var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( {  color: 0xF1C232,lineWidth: 3 } ) ); 
// 		line.position.copy(mesh.position);
// 		line.rotation.copy(mesh.rotation);
// 		container.mesh.add( line );   
// 	}	
// }
// function createOrderLines(order) {
// 	console.log('createOrderLines')
// 	for (var key in order.orderlinelist.orderline) if (order.orderlinelist.orderline.hasOwnProperty(key)) {
// 		orderline = order.orderlinelist.orderline[key];

// 		orderline.geometry = new THREE.CubeGeometry( orderline.size.width, orderline.size.height, orderline.size.length );
// 		orderline.material = new THREE.MeshLambertMaterial( { map: getBoxTexture(), transparent: true} ); 
		
// 		getTextureMaping(orderline)
// 	}	
// }
// function createContainer(order) {  
// 	console.log('createContainer')
		  
// 	var containertype;	
// 	for (var key in order.containertypelist) if (order.containertypelist.hasOwnProperty(key)) {
// 		containertype = order.containertypelist[key];
// 		containertype.geometry = new THREE.BoxBufferGeometry( containertype.physicalsize.width, containertype.physicalsize.height, containertype.physicalsize.length );    
		
// 		containertype.material = new THREE.MeshLambertMaterial( { transparent: true });
// 		//todo: check with change xyz parameters
// 		containertype.offset = { x: -containertype.contentoffset.deltax, y: -containertype.contentoffset.deltaz/2, z: -containertype.contentoffset.deltay }; 		
// 		var mesh = new THREE.Mesh( containertype.geometry, new THREE.MeshFaceMaterial());  	
// 	}
// 	return containertype;
// }
// function prepareContainer(containerItem, order) {
// 	console.log('prepareContainer')
// 	this.containerItem = containerItem;
// 	this.order = order;        
// 	var tempresult;
	
// 	var container = createContainer(order);
// 	console.log(container);       
	
// 	// createOrderLines(order);         

// 	for (var key in containerItem.containerlist) if (containerItem.containerlist.hasOwnProperty(key)) {
// 		var container = containerItem.containerlist[key];   
// 		container.mesh = new THREE.Mesh();
// 		var mesh;

// 		mesh = new THREE.Mesh(containerItem.containerlist.geometry, containerItem.containerlist.material);
// 		mesh.position.set(containertype.offset.x, containertype.offset.y, containertype.offset.z);
// 		//todo: BUG move to another place !!!dont change cas and receive shadow!!!
// 		// mesh.castShadow = true;
// 		// mesh.receiveShadow = true;
// 		container.mesh.add( mesh );   

// 		tempresult = createOrderlines(container);
// 	}   
// 	console.log(tempresult)
	
// 	return tempresult;
// }