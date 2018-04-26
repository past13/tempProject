'use strict';
function GeneralLights(scene) {
	console.log("GeneralLights")
	
	const light = new THREE.DirectionalLight(0xffd0d0);
	light.position.set(-100,50,100);
	scene.add(light);

	const seclight = new THREE.DirectionalLight(0xe0e0ff);
	seclight.position.set(100,50,-100);	
	scene.add(seclight);
	
	const ambientlight = new THREE.AmbientLight( 0xffffff, 1.5 );
    scene.add(ambientlight);
	
	this.update = function(time) {
		// light.intensity = (Math.sin(time)+1.5)/1.5;
		// light.color.setHSL( Math.sin(time), 0.5, 0.5 );
		// ambientlight.color.setHex(0xFF0000 )
	}
}