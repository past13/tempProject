function create_menuview() {
    var tag = 'li';
    var list = titleslist.listofviews;
    var menuparameters = {   
        tag : 'div'
    }
    var node = create_Node(menuparameters);
    node.assignfunction = 'assignmenuview';
    for (item in list)
    menu_view(list[item], item, node, tag); 
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
function hideNode(value, elementname) {
    if (value.id !== elementname) {
        var full = '#' + value.id;
        $(full).hide();
    }  
}

function navBtnClicked(element) {
    var query = '.navItem:not([style="display: none"])';
    var elementname = element.replace("#", "");
    if (document.querySelector(query) !== null) {
        var visible = document.querySelectorAll(query); 
        if (visible.id === elementname) {       
            $(element).show();   
        }
        else {            
        $(element).show();
        for( i=0; i < visible.length; i++){            
            hideNode(visible[i], elementname); 
            }          
        }       
    }
    else {      
        $(element).show(); 
    }    
}




