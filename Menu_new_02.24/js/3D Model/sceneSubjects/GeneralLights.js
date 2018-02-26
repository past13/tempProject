function GeneralLights(scene) {
	console.log("GeneralLights")
	const light = new THREE.AmbientLight( 0xffffff, 1.5 );
    scene.add(light);
	
	this.update = function(time) {
		// light.intensity = (Math.sin(time)+1.5)/1.5;
		// light.color.setHSL( Math.sin(time), 0.5, 0.5 );
		light.color.setHex(0xFF0000 )
	}
}