'use strict';    
function SceneManager(canvas) {    
    const clock = new THREE.Clock();

    const screenDimensions = {
        width: canvas.width = 500,
        height: canvas.height = 600
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene, camera);
  
    function buildScene() {        
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");
        return scene;
    }

    function buildRender({ width, height }) {
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
        const fieldOfView = 45;
        const nearPlane = 0.1;
        const farPlane = 2000; 
        
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.z = 100;
        
        camera.position.set(0,150,400);
        camera.lookAt(scene.position);

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