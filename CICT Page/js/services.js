var glbObj;
var dataStore = (function() {
    $.ajax({
		type: 'GET', 
		url: 'recipe.xml',	
		success: function(data) {
			//todo callback function 
			glbObj = XML2jsobj(data.childNodes[0]); 	
		}	 
	});
    return {getXml : function() {
        if (glbObj) return glbObj;
        else {console.log("can't load recipe")};
    }};
})();
titleslist = (function() {	
	listofcolumns = [
					'statistics',
					'listoforders',
					'visualisation',
					'warehouse'
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




