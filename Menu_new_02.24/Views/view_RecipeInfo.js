function createRecipeInfo() {
    var parent = document.getElementById('recipeinfoShow');
    var div = document.createElement("div");
    
    $.each(statistic, function(key, value) {   
        var id = 'statistic' + key;  
        var navnode = createNode(div, "div", id, null, value.name, 'overalstatistics');       
        var span = createNode(navnode, "span", null, null, value.value, 'statistictitle');        
        navnode.appendChild(span);
        div.appendChild(navnode);        
    });  
    // $( "#container" ).load( 'Views/recipeinfo.html' ).show();
    // parent.appendChild(div);
    return div;
};