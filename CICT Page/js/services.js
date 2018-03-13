var glbObj;
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
var dataStore = (function(){
    $.ajax({
		type: 'GET', 
		url: 'recipe.xml',	
		success: function(data) {
			glbObj = XML2jsobj(data.childNodes[0]); 	
		}	 
	});
    return {getXml : function()
    {
        if (glbObj) return glbObj;
        else {console.log("can't load recipe")};
    }};
})();
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



