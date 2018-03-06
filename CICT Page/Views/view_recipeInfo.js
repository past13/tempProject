function create_recipeinfo() { 
    // var parent = document.getElementById("container");    
    //todo move content to another part
    var content = create_Node(parent, 'div', '', null, null, 'pagecontainer'); 
    var header = create_Node(content, 'h1', '', null, null, 'containerheader'); 
    var body = create_Node(content, 'div', '', null, null, 'containerbody'); 
    
    
    // $.each(statistic, function(key, value) {   
    //     var id = 'statistic' + key;  
    //     var navnode = create_Node(div, "div", id, null, value.name, 'overalstatistics');       
    //     var span = create_Node(navnode, "span", null, null, value.value, 'statistictitle');  
    // });
    // console.log(parent)
    return parent;
};

