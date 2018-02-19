function SceneManager(canvas) {
	console.log("SceneManager")

    const clock = new THREE.Clock();

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    
    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene, camera);


  
    function buildScene() {
	console.log("buildScene")
        
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");

        return scene;
    }

    function buildRender({ width, height }) {
	console.log("buildRender")

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;         

        return renderer;
    }

    function buildCamera({ width, height }) {
        
        const aspectRatio = width / height;
        const fieldOfView = 20;
        const nearPlane = 0.1;
        const farPlane = 10000; 
        
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.z = 100;
        return camera;
    }

    function createSceneSubjects(scene, camera) {
        
        const sceneSubjects = [
            new GeneralLights(scene),
            new SceneSubject(scene, camera)            
        ];

        return sceneSubjects;
    }

    this.update = function() {
        const elapsedTime = clock.getElapsedTime();
        for(let i=0; i<sceneSubjects.length; i++) 
        	sceneSubjects[i].update(elapsedTime);        
       
        renderer.render(scene, camera);
    }   

    this.onWindowResize = function() {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }  
    
}