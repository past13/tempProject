services = function(dataURL) {
	this.getXml = function() {
		return $.ajax({
			type: 'GET', 
			async: false,
			url: 'recipe.xml'		 
		})
	}	
	this.getXmlToObj = function(xmlObj) {
		return XML2jsobj(xmlObj.responseXML.documentElement);
	}	
	this.getStatistics = function(obj) {
		return obj.recipestatistics.statistic; 	 
	}
	this.getTreeView = function(obj) {
		return prepareDataForTreeView(obj); 	 
	}
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

titleslist = (function() {
	listofcolumns = [ 'statistics',
					  'listoforders',
					  'visualisation',
					  'warehouse'
	];
	listofviews = [ 'home', 
					'orderinfo', 
					'dynamicPanels', 
					'recipeinfo'
	];  
	return viewlist = {
		listofcolumns : listofcolumns,
		listofviews : listofviews
	} 
}());


