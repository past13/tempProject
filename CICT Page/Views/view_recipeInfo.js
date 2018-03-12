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
        tag : 'h1',     
        nodeclass : 'containerheader'    
    }
    var header = create_Node(recipeinfoheader); 
    var recipeinfobody = {
        parent : node,
        tag : 'div',     
        nodeclass : 'containerbody'    
    }
    var body = create_Node(recipeinfobody);    
    node.assignfunction = 'assignRecipeInfo';
    return parent;
};

