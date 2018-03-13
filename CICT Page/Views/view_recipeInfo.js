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
        id : 'recipeinfobody',  
        nodeclass : 'containerbody'    
    }
    create_Node(recipeinfobody);    
    node.assignfunction = 'assignRecipeInfo';
    return node;
};

function assignRecipeInfo(node){ 
    var title = node.querySelector('h3'); 
    var node = document.getElementById('recipeinfobody');
    var statistic = glbObj.recipestatistics.statistic;
    var table = createTable(statistic);  
    node.appendChild(table);   
    title.innerHTML = 'Order Recipe Info'; 
}