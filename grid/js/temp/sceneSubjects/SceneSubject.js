'use strict';
function SceneSubject(scene, camera) {	
	var mouse = new THREE.Vector2(), INTERSECTED;
	var raycaster = new THREE.Raycaster();


	const geometry = new THREE.BoxGeometry( 10, 10, 10 );
	const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
	const cube = new THREE.Mesh( geometry, material );
    
	var meshes = initMeshes();
	// var material = initMaterial();
	meshes.mesh.scale.set(.09, .09, .09);	
	camera.position.set(0,150,400);
	scene.add(meshes.mesh);





	// scene.add(box); //container.mesh
	
	this.update = function(time) {
		// container.mesh.rotation.x += 0.001;
		// container.mesh.rotation.y += 0.001;

		// container.mesh.scale.set( .01, .01, .01 );
		// container.mesh.position.set(0, 0, -90);
		
		
		// const scale = Math.sin(time)+2;
		// mesh.scale.set(scale, scale, scale);
	}
}
