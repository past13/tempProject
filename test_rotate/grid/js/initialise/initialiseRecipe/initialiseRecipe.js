function initialiseRecipe() {
    newarray = [];
    var list = globalrecipe.containerlist;
    for (i=0; i < list.length; i++) {
        newarray = prepareContainer(list[i]);            
    }    
   
    // "use strict";
    // var MODULE = (function () {
    //     function objectContainerFromXml() {
    //         list = []; 
            
    //         return list;
    //     }        
    //     function getArea() {
    //         // var visualisation = visualisationEngine();
    //         // console.log(visualisation)

    //     }

    //     function getPerimeter() {
    //     }
       
    //     // my.moduleMethod = function () {
    //     // 	// ...
    //     // };
    //     return {
    //         getContainer: objectContainerFromXml,
    //         GetArea: getArea,
    //         GetPerimeter: getPerimeter
    //     };
    // }());
    // return MODULE;
}





