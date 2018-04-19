function calculateObjectPosition(packagelist) {
    this.packagelist = packagelist;
    $.each(packagelist, function(key, value) {
        packagelist[key].map(function(pack) {       
            pack.rotation.x *=  (Math.PI/180);
            pack.rotation.y *=  (Math.PI/180);  
            pack.rotation.z *=  (Math.PI/180); 
            pack.x = (parseInt(pack.position.x) + parseInt(pack.extent.x))/2;
            pack.y = (parseInt(pack.position.y) + parseInt(pack.extent.y))/2;
            pack.z = (parseInt(pack.position.z) + parseInt(pack.extent.z))/2;
        });
    });
}
function addOrderLinesToPackages(orderslist, recipe ){  
    this.orderslist = orderslist;
    this.recipe = recipe;    
    var container = {};
	$.each( model = recipe.containerlist , function( key, value ) {     
        var pack = model[key].physicalresult.package;
        //todo ask
        $.each( pack, function( key, value ) {
            pack[key].orderline = orderslist[pack[key].productcode];  
        });
        container[pack[key].index] = pack;
    });    
	return container;
} 
function arrayToObject(jsObj, orderlist){ 
    this.jsObj = jsObj;
    this.orderlist = orderlist;
    var temporderlineforpack = {};
    orderlist.reduce(function(obj, value, key) {
        temporderlineforpack[value.productcode] = value;        
    }, {});  
    jsObj.order.orderlinelist.orderline = temporderlineforpack;  
    return temporderlineforpack;
}
function parseXmlRecipe(recipexml) {
    this.recipexml = recipexml;
    var containerlist = ((recipexml || {}).containerrecipelist || {}).containerrecipe;      
    var order = ((recipexml || {}).order || {});  
    var statistic = ((recipexml || {}).recipestatistics || {}).statistic;
    var containertypelist = ((recipexml || {}).order || {}).containertypelist; 
    var recipe = {
        containerlist : containerlist,
        order : order,
        statistic : statistic,   
        containertypelist : containertypelist
    }          
    var orderslist = arrayToObject(recipexml, recipe.order.orderlinelist.orderline);  
    var packagelist = addOrderLinesToPackages(orderslist, recipe);     
    calculateObjectPosition(packagelist);
    return recipe;
}
function assignRecipeToGlobal(data) {       
    var jscriptobj = XML2jsobj(data.childNodes[0]); 
    var globalvar = parseXmlRecipe(jscriptobj);  

    //assign to global
    globalrecipe = globalvar;  
} 
function ajaxCall(url, methodType, callback) {
    $.ajax({
        url: url,
        method: methodType,    
        success: assignRecipeToGlobal,
        async: false,
        error : function (reason, xhr){
            console.log("error in processing your request", reason);
        } 
    });
}   
