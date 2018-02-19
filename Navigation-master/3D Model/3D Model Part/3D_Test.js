	var camera, scene, renderer, light, light1, material;
	
	var instance, group, triangleMesh, squareMesh;
	var testModel = null;
	
	function init() {

		// Check browser supports WebGL.
		// If its not supported, 
		//instantiate the canvas renderer to support all non WebGL browsers
		if(Detector.webgl){
					renderer = new THREE.WebGLRenderer({antialias:true});		
		} else {
			renderer = new THREE.CanvasRenderer();
		}
		
		//RENDERER
        renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
        // document.getElementById("myCanvas").appendChild(renderer.domElement);
		
		renderer.setClearColor(0xb0ffb0, 1);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

		
		
        //CAMERA
        camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);		
		camera.position.z = 50;
		camera.position.y = 50;	
		
        //SCENE
        scene = new THREE.Scene();

        //LIGHTS
        light = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(light);
        
        light1 = new THREE.PointLight(0xffffff, 0.5);
		light1.position.y = 1000;
		
        scene.add(light1); 
		
		  var loader = new THREE.ColladaLoader();
		  loader.options.convertUpAxis = true;	
		
			var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
		
			var triangleGeometry = new THREE.Geometry();
				triangleGeometry.vertices.push(new THREE.Vector3( 0.0,  1.0, 0.0));
				triangleGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
				triangleGeometry.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));
				triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
		
		
			
			var triangleMaterial = new THREE.MeshBasicMaterial({
					color:0xFFFFFF,
					side:THREE.DoubleSide
				});
		
			triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
				triangleMesh.position.set(-1.5, 0.0, 4.0);
				scene.add(triangleMesh);
		
			var squareGeometry = new THREE.Geometry();
				squareGeometry.vertices.push(new THREE.Vector3(-1.0,  1.0, 0.0));
				squareGeometry.vertices.push(new THREE.Vector3( 1.0,  1.0, 0.0));
				squareGeometry.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));
				squareGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
				squareGeometry.faces.push(new THREE.Face3(0, 1, 2));
				squareGeometry.faces.push(new THREE.Face3(0, 2, 3));

				// Create a white basic material and activate the 'doubleSided' attribute.
				var squareMaterial = new THREE.MeshBasicMaterial({
					color:0xFFFFFF,
					side:THREE.DoubleSide
				});
		
			squareMesh = new THREE.Mesh(squareGeometry, squareMaterial);
				squareMesh.position.set(1.5, 0.0, 4.0);
				scene.add(squareMesh);						
		
			var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
						
			var cubeA = new THREE.Mesh( geometry, material );
			cubeA.position.set( 10, 10, 0 );
			var cubeB = new THREE.Mesh( geometry, material );
			cubeB.position.set( -10, -10, 0 );
			
			var group = new THREE.Object3D;
		
		
			for ( i = 0; i < 5; i += 3 ) {
			  for ( j = 0; j < 5; j += 3 ) {
				
				var mesh = new THREE.Mesh( geometry, material );
				
				instance = mesh.clone();
				instance.position.set( i, 0, j );				
				group.add( instance );
				
			  }	
			}
			
			
			group.add(cubeA);
			group.add(cubeB);
			
			scene.add( group );
		
		
		var controls = new THREE.OrbitControls(camera, renderer.domElement);	
		
        //RENDER LOOP
        requestAnimationFrame(render);
		
	}
        function render() {
			
			requestAnimationFrame(render);			
		
			if (testModel != null)
			{
				testModel.rotation.y += 0.01;
			}
		
			renderer.render(scene, camera);
		
			triangleMesh.rotation.y += 0.1;
			squareMesh.rotation.x -= 0.075;
		
			//var timer = Date.now() * 0.0005;
			//camera.position.x = Math.cos( timer ) * 15;
            //camera.position.y = 2;
            // camera positie op z
            //camera.position.z = Math.sin( timer ) * 10;		
		
			//model.
            //model.rotation.y += 0.01;            
        }
