function create_recipeinfo() { 
    var parent = document.getElementById("container");    
    var recipeinfo = {
        parent : parent,
        tag : 'div',
        id : 'recipeinfo',       
        nodeclass : 'navItem'    
    }
    var content = create_Node(recipeinfo);  
    var recipeinfohide = { 
        parent : content,
        name : 'style',
        value : 'display: none'
    }
    create_Attribute(recipeinfohide)
    var recipeinfoheader = {
        parent : content,
        tag : 'h1',     
        nodeclass : 'containerheader'    
    }
    var header = create_Node(recipeinfoheader); 
    var recipeinfobody = {
        parent : content,
        tag : 'div',     
        nodeclass : 'containerbody'    
    }
    var body = create_Node(recipeinfobody);    
    return parent;
};

