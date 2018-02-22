function loadRecipe(dataURL) {
	var xmlObj = (function () {
		return $.ajax({
			type: 'GET', 
			async: false,
			url: 'recipe.xml'		 
		})
	}(xmlObj));
	// var xml2bject = XML2jsobj(xmlObj.responseXML.documentElement);
	return  {
		xmlObj: xmlObj,
		xml2bject: XML2jsobj(xmlObj.responseXML.documentElement)
	}
}



