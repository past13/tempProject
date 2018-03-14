function create_menuview() {
    var tag = 'li';
    var list = titleslist.listofviews;
    var menuparameters = {   
        tag : 'div',
        id : 'menu'
    }
    var node = create_Node(menuparameters);    
    for (item in list)
    menu_view(list[item], item, node, tag); 
    node.assignfunction = 'assignMenu';
    return node;
}
function menu_view(title, index, parent, tag) {      
    var nodeparameters = {
        parent : parent,
        tag : tag,
        nodeclass : 'menuList'
    }    
    var node = create_Node(nodeparameters); 
    var subnodeparameters = {
        parent : node,
        tag : 'a',
        href : '#' + title,
        text : title
    }  
    var subnode = create_Node(subnodeparameters);        
    return node;    
}
function assignMenu(node) { 
    var parent = document.getElementById("navigationContainer");
    while (node.hasChildNodes()) {
        parent.appendChild(node.removeChild(node.firstChild))
    }
}






