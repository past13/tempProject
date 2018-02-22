var controls, camera, mouse = { x: 0, y: 0 };
var targetList = [];
var INTERSECTED;
var raycaster;
var mouse = new THREE.Vector2();
var renderer, domEvents;

function showOverallStatistics(id, stats) {
  if (id !== null) {
    var list = document.getElementById("statistictotal");
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }  
  }  
  $('<div id="statistictotal"></div>').appendTo("#col1");  
  $.each(stats, function (index, value) {
    $('<div class="overalstatistics" id="' + 'statistic' + index +  '">' + stats[index].name + '</div>').appendTo("#statistictotal");
    $('<span class="statistictitle">' + stats[index].value + '</span>').appendTo("#statistic" + index);
  });  
}

function createContainer3DPreview(parentid, container) {
  var parentelement = document.getElementById(parentid);
  var previewwidth = parentelement.clientWidth;
  var previewheight = parentelement.clientHeight-100;
  
  container.shadowsinpreview = false;  // doesn't work?
  container.animatepreview = false;

  container.previewcamera = new THREE.PerspectiveCamera( 20, previewwidth/previewheight, 0.1, 100000 );
  container.previewcamera.position.set(4000, 2000, 6000);
  container.previewcamera.up = new THREE.Vector3(0, 1, 0);
  container.previewcamera.lookAt(new THREE.Vector3(0, 500, 0));

  container.previewrenderer = new THREE.WebGLRenderer( {antialias: true, alpha: true, logarithmicDepthBuffer: false} );
  container.previewrenderer.setSize( previewwidth, previewheight );
  container.previewrenderer.setClearColor( 0xffffff, 0);
  container.previewrenderer.shadowMap.enabled = container.shadowsinpreview;
  container.previewrenderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  parentelement.appendChild( container.previewrenderer.domElement );

  if (!container.previewscene) {
    container.previewscene = new THREE.Scene();
    container.previewscene.add( container.mesh );

    var amblight = new THREE.AmbientLight( 0xffffff, 1.5 );
    container.previewscene.add( amblight );

    var directionalLight = new THREE.DirectionalLight( 0xa0a0a0, 1 );
    directionalLight.position.set( 10000, 10000, 10000 ); 			//default; light shining from top
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.left = -5000;
    directionalLight.shadow.camera.top = 5000;
    directionalLight.shadow.camera.bottom = -5000;
    directionalLight.shadow.camera.right = 5000;
    directionalLight.shadow.camera.far = 5000;
    directionalLight.shadow.bias = 0.0001;
    container.previewscene.add( directionalLight );

    container.previewscene.scale.set( 1.0, 1.0, 1.0);
  } 

  container.renderPreview = function() {
    container.previewrenderer.render(container.previewscene, container.previewcamera);
    if (container.shadowsinpreview)  // render again if we want shadows
      container.previewrenderer.render(container.previewscene, container.previewcamera);
  }

  container.animatePreview = function () {
    if (container.animatepreview) {
      container.mesh.rotation.y = (container.mesh.rotation.y + 0.01) % (Math.PI * 2);
      container.renderPreview();
    }
    else if (!container.showfull && (container.mesh.rotation.y != 0)) {
      container.mesh.rotation.y = 0;
      container.renderPreview();
    }
    requestAnimationFrame( container.animatePreview );
  };

  container.renderPreview();
  requestAnimationFrame( container.animatePreview );
}

function createContainerPreview(parentid, container) { 
  var previewid = "container_" + container.index;

  $('<div class="containerpreview" id="' + previewid + '" />')
    .appendTo(parentid)
    .hover(function() { container.animatepreview = true; }, function() { container.animatepreview = false; })
    .click(function() {
      container.showfull = true;
      container.animatepreview = false;
     
      //full view
      createFullContainerView(container);

      //refresh statisticpanel
      showOverallStatistics(container.index, container.containerstatistics.statistic);

      $('containerfullview').show();
      $('#containerpreviews').show();
    
    });

  createContainer3DPreview(previewid, container);
  $('<div class="containerpreviewinfo">('+container.index+') '+container.containertype+'</div>').appendTo("#"+previewid);
}

function createFullContainerView(container) {
console.log(container)
  var myNode = document.getElementById("containerfullview");

  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  $("#fullview").remove();
  $('<div id="fullview"></div>').appendTo("#containerfullview");
  var parentelement = document.getElementById('containerfullview');


  
  var fullviewwidth = parentelement.clientWidth;
  var fullviewheight = parentelement.clientHeight;

  container.shadowsinfullview = true;

  container.fullviewcamera = new THREE.PerspectiveCamera( 20, fullviewwidth/fullviewheight, 0.1, 10000 );
  container.fullviewcamera.position.set(4000, 2000, 6000);
  container.fullviewcamera.up = new THREE.Vector3(0, 1, 0);
  container.fullviewcamera.lookAt(new THREE.Vector3(0, 500, 0));

  container.fullviewrenderer = new THREE.WebGLRenderer( {antialias: true, alpha: true, logarithmicDepthBuffer: false} );
  container.fullviewrenderer.setSize( fullviewwidth, fullviewheight );
  container.fullviewrenderer.setClearColor( 0xffffff, 0);
  container.fullviewrenderer.shadowMap.enabled = container.shadowsinfullview;
  container.fullviewrenderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  
  parentelement.appendChild( container.fullviewrenderer.domElement );

  targetList.push(container.mesh);
  renderer = container.fullviewrenderer;
  camera = container.fullviewcamera; 

  if (!container.fullviewscene) {
    container.fullviewscene = new THREE.Scene();
    container.fullviewscene.add( container.mesh );

    var amblight = new THREE.AmbientLight( 0xffffff, 1.5 );
    container.fullviewscene.add( amblight );

    var directionalLight = new THREE.DirectionalLight( 0xa0a0a0, 1 );
    directionalLight.position.set( 10000, 10000, 10000 ); 			//default; light shining from top
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.left = -5000;
    directionalLight.shadow.camera.top = 5000;
    directionalLight.shadow.camera.bottom = -5000;
    directionalLight.shadow.camera.right = 5000;
    directionalLight.shadow.camera.far = 5000;
    directionalLight.shadow.bias = 0.0001;
    container.fullviewscene.add( directionalLight );
    console.log(container)
    container.fullviewscene.scale.set( 1.5, 1.5, 1.5);
  }
  
  container.renderFullView = function() {
    
    container.fullviewrenderer.render(container.fullviewscene, container.fullviewcamera);
   
    // container.fullviewrenderer.update();

    if (container.shadowsinfullview)  // render again if we want shadows
      container.fullviewrenderer.render(container.fullviewscene, container.fullviewcamera);

  }

  container.animateFullView = function () {
    if (!container.showfull) return;
    container.mesh.rotation.y = (container.mesh.rotation.y + 0.01) % (Math.PI * 2);
        
    //laurynas
    document.addEventListener( 'mousedown', onDocumentMouseActions, false );
    
    container.fullviewrenderer.render(container.fullviewscene, container.fullviewcamera);
  
    container.renderFullView();
   
    requestAnimationFrame( container.animateFullView );

  };

requestAnimationFrame( container.animateFullView );

}


// function update() {
//   var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
  
//   vector.unproject(camera);
//   var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
  
//   var intersects = ray.intersectObjects(targetList , true);




// }


function onDocumentMouseActions (event)
{
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  update();
}


function update() {

  var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
  
  vector.unproject(camera);
  var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
  
  var intersects = ray.intersectObjects(targetList[0].children , true);
  
  // var details = getMeshDetails(intersects[0].object);

  // if there is one (or more) intersections
  if (intersects.length > 0) {
    // if the closest object intersected is not the currently stored intersection object
    if (intersects[0].object != INTERSECTED) {
      // restore previous intersection object (if it exists) to its original color
      if (INTERSECTED)    
        INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
        
       
      // store reference to closest object as current intersection object
      INTERSECTED = intersects[0].object;
            

      // var meshas = containerMesh;
      //uuid of all pallet
      // var getas = _.get(meshas, ['uuid']); 
      
      // var exactMesh = _.get(INTERSECTED, ['uuid']); 

      // //array of childs
      // var child = _.get(meshas, ['children']);

      // var child = _.get(child, ['children']);

     
      // meshas.children.forEach(function(mesh) {
        
      // });

      // for(var prop in meshas) {
      //   if (meshas.hasOwnProperty(prop)) {
      //   // or Object.prototype.hasOwnProperty.call(obj, prop)
      //     result++;
      //   }
      // }
      
      // store color of closest object (for later restoration)
      INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
      // set a new color for closest object
      INTERSECTED.material.color.setHex(525251); //0xffff00
    }
  } else // there are no intersections
  {
    // restore previous intersection object (if it exists) to its original color
    if (INTERSECTED)
      INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
    // remove previous intersection object reference
    //     by setting current intersection object to "nothing"
    INTERSECTED = null;
  }

  // stats.update();
  } 

 



