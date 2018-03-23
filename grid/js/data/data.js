function customizeXmlObj(jsObj) { 
    this.jsObj = jsObj; 
    var containerTypeCode = jsObj.containerrecipelist.containerrecipe;
	var temporderlinelist = jsObj.order.orderlinelist;
	
    // //add default colors and meshes for orderlines
    var orderlinewithmeshcolor = defaultColorsAndMesh(temporderlinelist);
    // //prepare orderlist (arrayToObject)
    var orderslist = arrayToObject(orderlinewithmeshcolor, jsObj);
    // //modife order properties and add to package
    var packagelist = packageorders(jsObj, orderslist, containerTypeCode);     
    // //recalculate rotation property in pack
    recalculateCoordinates(packagelist);
    return jsObj;
}

titleslist = (function() {	
	listofcolumns = [
					'statistics',
					'listoforders',				
					
					'warehouse'	,
					'visualisation',	
	];
	listofviews = [ 'home', 
					'recipeinfo',
					'orderinfo', 
					'visualisation'
	];  
	return viewlist = {
		listofcolumns : listofcolumns,
		listofviews : listofviews
	} 
}());
function createTable(context, attribute) {	
	var table = document.createElement('table');  
	var tbody = document.createElement('tbody');
	var header = table.createTHead();
	var row = header.insertRow(0);
	var cell = row.insertCell(0);

	if (attribute !== undefined){
		table.setAttribute(attribute.attribute, attribute.attributename);
		cell.innerHTML = attribute.title;	
	}
	table.appendChild(tbody); 
	for(var prop in context) {
	  if(context.hasOwnProperty(prop)) {      
		  var content = (		
		  '<tr>' +
		  '<td>' + context[prop].name + '</td>' +
		  '<td>' + context[prop].value + '</td>' +
		  '</tr>'
		);
		  tbody.insertAdjacentHTML('afterbegin', content);      
	  }
	}
	return table;
  }
function preparedData(data) {
	var readydata = XML2jsobj(data.childNodes[0]);
	globalvar = customizeXmlObj(readydata); 
}  

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
		//bug more then 20 containers TypeError: pack[key] is undefined
			container[ pack[key].index ] = pack;
	}); 
	return container;
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

  function createContainerPreviews() {
	// setStatus('Creating previews...');
	for (var key in globalvar.containerrecipelist.containerrecipe) if (globalvar.containerrecipelist.containerrecipe.hasOwnProperty(key)) {
	var container = globalvar.containerrecipelist.containerrecipe[key];
	
	  createContainerPreview('#containerpreviews', container);
	}
  }