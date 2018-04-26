function getOverlay(id, node, data, param, list) {	
	this.id = id;	
	this.param = param;
	this.data = data;	
	this.list = list;	
	this.node = node;
	var newobj = {
		node: node,
		param: data
	};	
	list.push(newobj);		
}
//expand color pallet
function getRandomColor(colormap) {
	for (i=0; i<colormap.length; i++) {
		colormap[i].color = Math.random() * 0xffffff;
	}	
	return colormap;
}
function countUniqColors(arr, param){	
	this.param = param;
	this.arr = arr;
	var dupes = [];
	var numberuniqcol = [];
	$.each(arr, function (index, entry) {		
			if (!dupes[entry.param]) {
				dupes[entry.param] = true;
				delete entry.id;
				entry.color = null;				
				numberuniqcol.push(entry);
			}
	});
	return numberuniqcol;
}
function chkBoxList(node, param) { 
	this.node = node;
	this.param = param;	
	
	console.log(param)	

	// for (var item in param) {
	// 	if (param[item].value === '1') {
	// 		console.log('1')
	// 		//add/create threejs object
	// 	}
	// 	if (param[item].value === '2') {
	// 		console.log('2')			
	// 		//add/create threejs object
	// 	}
	// 	if (param[item].value === '3') {
	// 		console.log('3')			
	// 		//add/create threejs object
	// 	}
	// 	if (param[item].value === '4') {
	// 		console.log('4')
	// 		//add/create threejs object
	// 	}
	// 	if (param[item].value === '5') {
	// 		console.log('5')
	// 		//add/create threejs object
	// 	}
	// 	if (param[item].value === '6') {
	// 		console.log('6')
	// 		//add/create threejs object
	// 	}
	// }	
}

function familyStackingColors(obj, color) {	
	this.obj = obj;
	this.color = color;
	var newcolor = color.filter(x => x.param === obj.param);
	obj.color = newcolor[0].color;
	return obj;
}
function stabilityColors(obj){
	this.obj = obj;
	
	if (obj.param >= 0 && obj.param <= 0.25) {
		obj.color = 0xff0000; 
	}
	else if (obj.param > 0.25 && obj.param <= 0.5) {
		obj.color = 0xF68E55;
	}
	else if (obj.param > 0.5 && obj.param <= 0.75) {
		obj.color = 0x7CC576;
	}
	else if (obj.param > 0.75 && obj.param <= 1) {
		obj.color = 0x00FF00; 
	}	
	return obj;
}
function IsEqual(a, b) {
	return (Math.abs(a-b) < 0.001);
}
function checkRotationStatus(node) {
	this.node = node;
	
	console.log(node)

	var ninetydeg = Math.PI / 2;              //1.5707963267948966;
	
	if (node.param.x === 0 && node.param.y === 0 && node.param.z === 0) {
		node.color = 0x6a5acd;
	}
	else if (node.param.x === 0 && IsEqual(node.param.y, ninetydeg) && node.param.z === 0 ) {
		node.color = 0x6495ed;
	}
	else if (IsEqual(node.param.x, ninetydeg)) {
		node.color = 0x5574B9; //
	}
	else if (IsEqual(node.param.z, ninetydeg)) {
		node.color = 0xffd700; //yellow	
	}	
	else {
		node.color = 0x9400d3;
	}
	return node;
}
function mapColors(list, colormap, param) {
	this.list = list;	
	this.colormap = colormap;	
	this.param = param;	
	
	if (param.dropdown === 'family' || param.dropdown === 'stacking') {		
		list.map(function(x) {familyStackingColors(x, colormap) } );
	}
	if (param.dropdown === 'stability') {
		list.map(stabilityColors);
	}	
	if (param.dropdown === 'rotation') {
		list.map(checkRotationStatus);
	}
	if (param.dropdown === 'weighontop') {
		console.log('weighontop')
		// list.map(checkRotationStatus);
	}
	return list;
}

function viewModelSettings(param) {	
	this.param = param;
	var overlaylist = [];	
	var uniqcolorarray = [];
	var coloredArray = [];
	var newArray = [];
	
	scene.traverse( function( node ) {		
		if (node instanceof THREE.Mesh && 
			node.userData.orderline  !== undefined || '' &&
			param.dropdown !== 'empty') {

			var orderline = node.userData.orderline;
			var orderlineid = node.userData.orderlineid;
			var statistics = node.userData.statistics;
			var rotation = node.userData.rotation;			
			
			switch (param.dropdown) {
				case 'family':			
					getOverlay(orderline.uuid, node, (orderline.familycode === "" ? "0": orderline.familycode), param.dropdown, overlaylist);
					uniqcolorarray = countUniqColors($.extend(true, [], overlaylist), param).sort(function (obj1, obj2) { return obj1.param - obj2.param; });
					var arrayColors = getRandomColor(overlaylist);					
					coloredArray = mapColors(overlaylist, arrayColors, param);										
					break;		
				case 'stacking':
					getOverlay(orderlineid, node, orderline.stackinginfo.stackingclass, param.dropdown, overlaylist);	
					uniqcolorarray = countUniqColors($.extend(true, [], overlaylist), param).sort(function (obj1, obj2) { return obj1.param - obj2.param; });
					var arrayColors = getRandomColor(overlaylist);					
					coloredArray = mapColors(overlaylist, arrayColors, param);
					break;	
				case 'stability':
					getOverlay(orderlineid, node, statistics.stability, param.dropdown, overlaylist);
					uniqcolorarray = countUniqColors($.extend(true, [], overlaylist), param).sort(function (obj1, obj2) { return obj1.param - obj2.param; });
					coloredArray = mapColors(overlaylist, arrayColors, param);							
					break;
				case 'random':	
					getOverlay(orderlineid, node, null, param.dropdown, overlaylist);	
					var arrayColors = getRandomColor(overlaylist);
					coloredArray = mapColors(overlaylist, arrayColors, param);
					break;
				case 'rotation':
					getOverlay(orderlineid, node, rotation, param.dropdown, overlaylist);
					coloredArray = mapColors(overlaylist, null, param);
					break;
				case 'weighontop':
					getOverlay(orderlineid, node, statistics.stability, param.dropdown, overlaylist);
					var arrayColors = getRandomColor(overlaylist);
					// coloredArray = mapColors(overlaylist, null, param);
					break;
				default:
					break;
			}		
		}	
	});			

		console.log(coloredArray)
	if (param.checkboxlist.length > 0) 
		chkBoxList(node, param.checkboxlist);
		
	// if (param.showOveralLegend.length > 0) 
	// 	overlayLegend(node, param.showOveralLegend);
	return coloredArray;
}

