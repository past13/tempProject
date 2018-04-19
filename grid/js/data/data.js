titleslist = (function() {	
	listofcolumns = [
					'statistics',
					'listoforders',	
					'warehouse'	,
					'visualisation',	
	];
	listofviews = [ 
					'home', 
					'recipeinfo',
					'orderinfo', 
					'visualisation'
	];  
	return viewlist = {
		listofcolumns : listofcolumns,
		listofviews : listofviews
	} 
}());





var GOLDEN_RATIO_CONJUGATE = 0.618033988749895;
var _h = 0;
var _v = 0;

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
function createDefaultMesh(orderline) {  
		//todo: add default meshes
		orderline.mesh = {};
			// prepare orderline meshes    
		orderline.geometry = new THREE.BoxBufferGeometry( orderline.size.width, orderline.size.height, orderline.size.length );
		orderline.material = new THREE.MeshStandardMaterial( { color: orderline.color } );
}

function createContainerPreviews() {
	// setStatus('Creating previews...');
	for (var key in globalvar.containerrecipelist.containerrecipe) if (globalvar.containerrecipelist.containerrecipe.hasOwnProperty(key)) {
	var container = globalvar.containerrecipelist.containerrecipe[key];

		createContainerPreview('#containerpreviews', container);
	}
}