titleslist = (function() {
	listofcolumns = [
					['statistics'],
					['listoforders'],
					['visualisation'],
					['warehouse']
	];

	listofviews = [ 'home', 
					'orderinfo', 
					'visualisation', 
					'recipeinfo'
	];  
	return viewlist = {
		listofcolumns : listofcolumns,
		listofviews : listofviews
	} 
}());

services = function(dataURL) {
	this.getXml = function() {
		return $.ajax({
			type: 'GET', 
			async: false,
			url: 'recipe.xml'		 
		})
	}	

	this.getXmlToObj = function(data) {		
		return XML2jsobj(data.responseXML.documentElement);
	}	
	this.getStatistics = function(data) {	
		return data.recipestatistics.statistic; 	 
	}
	this.getTreeView = function(data) {
		return prepareDataForTreeView(data); 	 
	}
	this.getOrderInfoView = function(data) {
		return data.order.orderinfo;	 
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



