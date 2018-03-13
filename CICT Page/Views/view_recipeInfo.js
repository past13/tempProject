function create_recipeinfo() { 
    var parent = document.getElementById("container"); 
    var recipeinfo = {
        parent : parent,
        tag : 'div',
        id : 'recipeinfo',       
        nodeclass : 'navItem'    
    }
    var node = create_Node(recipeinfo);  
    var recipeinfohide = { 
        parent : node,
        name : 'style',
        value : 'display: none'
    }
    create_Attribute(recipeinfohide)
    var recipeinfoheader = {
        parent : node,
        tag : 'h3',     
        nodeclass : 'titleSubPage'    
    }
    var header = create_Node(recipeinfoheader); 
    var recipeinfobody = {
        parent : node,
        tag : 'div',     
        nodeclass : 'containerbody'    
    }
    create_Node(recipeinfobody);    
    node.assignfunction = 'assignRecipeInfo';
    return node;
};

function assignRecipeInfo(node){ 
    var parent = document.getElementById("container");   
    var body = document.getElementsByClassName("contentSub");
    var title = node.querySelector('h3'); 
    var orderinfomodules = glbObj.order.orderinfo;
    var recipe = glbObj.order;
    var titletext = orderinfomodules.modules.split(',').map(function(item) {
        return item.trim();
    }); 
    title.innerHTML = 'Order Recipe Info'; 
    body.innerHTML = 'body' + titletext; 
    parent.appendChild(node);
}