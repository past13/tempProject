function create_recipeinfo() { 
    var div = document.createElement("div");    
    $.each(statistic, function(key, value) {   
        var id = 'statistic' + key;  
        var navnode = create_Node(div, "div", id, null, value.name, 'overalstatistics');       
        var span = create_Node(navnode, "span", null, null, value.value, 'statistictitle');  
    });
    return div;
};