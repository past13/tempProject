var $recipe = {};
var projector;

// function setStatus(text) {
//   var statusLabel = document.getElementById('statusLabel');
//   statusLabel.innerHTML = '<p>'+text+'</p>';
// }

/*
function Rectangle (w, h) {
	this.width = w;
	this.height = h;
}

{
var rect = new Rectangle(10, 20);
}
*/

function addChilds(packages) {    
  var newlist = [];
  packages.forEach(element => {    
  var pack = {
  
    text: element.orderlineid 
  }
    newlist.push(pack)
  });
  return newlist;
}

function prepareOverallStatistics(recipe) {
  var statistics = recipe.recipestatistics.statistic;
  return statistics;
}

function prepareDataForTreeView(recipe) {
  var obj = [];

  var containerlist = recipe.containerrecipelist.containerrecipe;
  var contammount = containerlist.length;

  containerlist.forEach(element => {

    var pallettype = element.containertypecode;    
    var amountonpallet = element.physicalresult.package.length;
    var package = element.physicalresult.package;
       
    var pallet = {
      text: pallettype,
      tags: [amountonpallet],
      nodes : child = addChilds(package),
    }
    obj.push(pallet)  
  });   
  
  return obj;
}

function create3DMeshes() {
  // setStatus('Creating 3D objects...');
    
  // prepare container type meshes
  for (var key in $recipe.order.containertypelist) if ($recipe.order.containertypelist.hasOwnProperty(key)) {
    var containertype = $recipe.order.containertypelist[key];

    containertype.geometry = new THREE.BoxBufferGeometry( containertype.physicalsize.width, containertype.physicalsize.height, containertype.physicalsize.length );    
    containertype.material = new THREE.MeshStandardMaterial( { color: 0xa0a0a0 });
    //todo: check with change xyz parameters
    containertype.offset = { x: -containertype.contentoffset.deltax, y: -containertype.contentoffset.deltaz/2, z: -containertype.contentoffset.deltay }; 
    var mesh = new THREE.Mesh( containertype.geometry, new THREE.MeshFaceMaterial() );
  }

  // prepare orderline meshes
  for (var key in $recipe.order.orderlinelist.orderline) if ($recipe.order.orderlinelist.orderline.hasOwnProperty(key)) {
    var orderline = $recipe.order.orderlinelist.orderline[key];

    orderline.geometry = new THREE.BoxBufferGeometry( orderline.size.width, orderline.size.height, orderline.size.length );
    orderline.material = new THREE.MeshStandardMaterial( { color: orderline.color } );
  }
 
  // create container scenes
  for (var key in $recipe.containerrecipelist.containerrecipe) if ($recipe.containerrecipelist.containerrecipe.hasOwnProperty(key)) {
    var container = $recipe.containerrecipelist.containerrecipe[key];   
    container.mesh = new THREE.Mesh();
    var mesh;
    mesh = new THREE.Mesh(container.containerlist.geometry, container.containerlist.material);
    mesh.position.set(containertype.offset.x, containertype.offset.y, containertype.offset.z);
    //todo: BUG move to another place !!!dont change cas and receive shadow!!!
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    container.mesh.add( mesh );    

    for (var p in container.physicalresult.package) if (container.physicalresult.package.hasOwnProperty(p)) {
      var pack = container.physicalresult.package[p];
    
      mesh = new THREE.Mesh(pack.orderline.geometry, pack.orderline.material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.position.set(pack.x, pack.z, -pack.y);
      mesh.rotation.set(pack.rotation.x, pack.rotation.z, pack.rotation.y);
      container.mesh.add(mesh);

      var edges = new THREE.EdgesGeometry( pack.orderline.geometry ); //missing sphere parameters

      //todo: BUG lineWidth is not a property of this material
      var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000, lineWidth: 3 } ) );
      line.position.copy(mesh.position);
      line.rotation.copy(mesh.rotation);
      container.mesh.add( line );      
    }
  }  
}

function createContainerPreviews() {
  // setStatus('Creating previews...');
  
  for (var key in $recipe.containerrecipelist.containerrecipe) if ($recipe.containerrecipelist.containerrecipe.hasOwnProperty(key)) {
  var container = $recipe.containerrecipelist.containerrecipe[key];
  
	createContainerPreview('#containerpreviews', container);
  }
}

//todo: create abstract class for creating default meshes
function createDefaultMesh(orderline) {  
  //todo: add default meshes
  orderline.mesh = {};
    // prepare orderline meshes    
  orderline.geometry = new THREE.BoxBufferGeometry( orderline.size.width, orderline.size.height, orderline.size.length );
  orderline.material = new THREE.MeshStandardMaterial( { color: orderline.color } );
}

var GOLDEN_RATIO_CONJUGATE = 0.618033988749895;
var _h = 0;
var _v = 0;

//recreate all methods abstract
function getNextColor() {
  var _color = new THREE.Color();
  _color.setHSL(_h, 1.00, 0.50 + 0.30 * _v);
  _h = (_h + GOLDEN_RATIO_CONJUGATE) % 1;
  _v = (_v + GOLDEN_RATIO_CONJUGATE) % 1;
  return _color;
}
function defaultColorsAndMesh(orderlinelist) {   
  var list = orderlinelist.orderline;
  for (var order in list) { 
    list[order].color = getNextColor();
    createDefaultMesh(list[order]);    
  }  
  return list;
}
function arrayToObject(temporderlinelist, jsObj){ 
  //convert from array to object list  
  var temporderlineforpack = {};
  temporderlinelist.reduce(function(obj, value, key) {
    temporderlineforpack[value.productcode] = value;        
  }, {});  
  //todo move away assignment
  jsObj.order.orderlinelist.orderline = temporderlineforpack;  
  return temporderlineforpack;
}
function packageorders(jsObj, orderslist, containerTypeCode){    
  var container = {};

  var containertypeslist = $.each( containerTypeCode, function( key, value ) {  
    var containertype = jsObj.order.containertypelist.containertype;
    var containerlist = containerTypeCode[key];

    var containertypes = $.each( containertype, function( key, value ) {  
    containerlist.containerlist = containertype;
    });
  });

  var packagelist = $.each( containerTypeCode, function( key, value ) {
    var pack = containerTypeCode[key].physicalresult.package;      
      $.each( pack, function( key, value ) {        
      if (pack[key].orderlineid == "0") { pack[key].orderlineid = pack[key].productcode; }  
        pack[key].orderline = orderslist[pack[key].orderlineid];   
      });
    container[ pack[key].index ] = pack;
  }); 
  return container;
}  

function recalculateCoordinates(packagelist) {
  // this.packagelist = packagelist;  
  $.each( packagelist, function( key, value ) {
    packagelist[key].map(function(pack) {       
        pack.rotation.x *=  (Math.PI/180);
        pack.rotation.y *=  (Math.PI/180);  
        pack.rotation.z *=  (Math.PI/180);        

        pack.x = (parseInt(pack.position.x) + parseInt(pack.extent.x))/2;
        pack.y = (parseInt(pack.position.y) + parseInt(pack.extent.y))/2;
        pack.z = (parseInt(pack.position.z) + parseInt(pack.extent.z))/2;
    });
  });
  return packagelist;
}
function customizeXmlObj(jsObj) {  
    //todo: use module pattern   
    this.jsObj = jsObj; 
    var containerTypeCode = jsObj.containerrecipelist.containerrecipe;
    var temporderlinelist = jsObj.order.orderlinelist;


    //add default colors and meshes for orderlines
    var orderlinewithmeshcolor = defaultColorsAndMesh(temporderlinelist);
    //prepare orderlist (arrayToObject)
    var orderslist = arrayToObject(orderlinewithmeshcolor, jsObj);
    //modife order properties and add to package
    var packagelist = packageorders(jsObj, orderslist, containerTypeCode);     
    //recalculate rotation property in pack
    recalculateCoordinates(packagelist);

    return jsObj;
}

function readRecipeFile(file) {
  // setStatus('Loading recipe...');
 
  $.get('recipe.xml', function(data) {

    var xmlObj = XML2jsobj(data.documentElement);    
    var recipe = customizeXmlObj(xmlObj);    
    $recipe = recipe;    

    var statisticobj = prepareOverallStatistics(recipe);    
    var treeviewobj = prepareDataForTreeView(recipe);

    showTree(treeviewobj);
    showOverallStatistics(null, statisticobj);
    create3DMeshes();
    createContainerPreviews();

    // update();

    // setStatus('Recipe loaded: ' + $recipe.order.code);
    $("#statusLabel").fadeOut("slow", "swing", function(){$( this ).remove();});
  })
  .fail(function() {
    // setStatus('Error: could not read recipe.xml');
  })
}




/*
class Rectangle {

  constructor (w, h) {
    this.width = w;
    this.height = h;
    this.color = 234523;
  }

  getarea() {
    return this.width * this.height;
  }
}

var r = new Rectangle(10, 20);
r.getarea();
*/
/*
var r = { 
  width: 20,
  height:10, 
  
  getarea() { 
    return this.width * this.height; 
  } 
}

r.getvolume = new function() { this.height * ... }
r.getvolume();
*/


