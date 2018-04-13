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
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
function getMapValues(node) {
	if (node.param !== null && typeof node.param ===  'object' ) {
		//change colors		
	}
	else if (node.param === 'string') {		
		var filtered = colorsmap.filter(c => c.param === node.param);
		node.color = filtered[0].color;
	}
	return node;
}
function changeColorsDL(colorsmap, list) {
	this.list = list;		
	this.colorsmap = colorsmap;
	list.map(getMapValues);
	return list;
}
function countUniqColors(arr){	
	var dupes = [];
	var numberuniqcol = [];
	$.each(arr, function (index, entry) {		
			if (!dupes[entry.param]) {
				dupes[entry.param] = true;
				entry.color = getRandomColor();
				delete entry.id;
				numberuniqcol.push(entry);
			}
	});
	return numberuniqcol;
}
function overlayLegend(node, param) { 
	this.node = node;
	this.param = param;
}	

function chkBoxList(node, param) { 
	this.node = node;
	this.param = param;	

	for (var item in param) {
		if (param[item].value === '1') {
			console.log('1')
			//add/create threejs object
		}
		if (param[item].value === '2') {
			console.log('2')			
			//add/create threejs object
		}
		if (param[item].value === '3') {
			console.log('3')			
			//add/create threejs object
		}
		if (param[item].value === '4') {
			console.log('4')
			//add/create threejs object
		}
		if (param[item].value === '5') {
			console.log('5')
			//add/create threejs object
		}
		if (param[item].value === '6') {
			console.log('6')
			//add/create threejs object
		}
	}	
}
function viewModelSettings(param) {	
var overlaylist = [];	
	scene.traverse( function( node ) {		
		if (node instanceof THREE.Mesh && 
			node.userData.orderline  !== undefined || '' &&
			param.dropdown !== 'empty') {

			var orderline = node.userData.orderline;
			var orderlineid = node.userData.orderlineid;
			var statistics = node.userData.statistics;
			var rotation = node.userData.rotation;			
			switch (param.dropdown) {
				case 'familycode':			
					getOverlay(orderline.uuid, node, (orderline.familycode === "" ? "0": orderline.familycode), param.dropdown, overlaylist);
					break;		
				case 'stacking':
					getOverlay(orderlineid, node, orderline.stackinginfo.stackingclass, param.dropdown, overlaylist);		
					break;	
				case 'stability':
					getOverlay(orderlineid, node, statistics.stability, param.dropdown, overlaylist);		
					break;
				// case 'weighontop':
				// 	getOverlay(orderlineid, node, statistics.stability, param.dropdown, overlaylist);		
				// break;
				case 'rotation':
					getOverlay(orderlineid, node, rotation, param.dropdown, overlaylist);		
					break;
				case 'random':	
					getOverlay(orderlineid, node, null, param.dropdown, overlaylist);		
					break;
				default:
					break;
			}		
		}	
	});	
	var uniqcolorarray = countUniqColors(overlaylist);

	var newlist = changeColorsDL(uniqcolorarray, $.extend(true, [], overlaylist));

	


	// if (param.checkboxlist.length > 0) 
	// 	chkBoxList(node, param.checkboxlist);

		
	// if (param.showOveralLegend.length > 0) 
	// 	overlayLegend(node, param.showOveralLegend);
	return newlist;
}