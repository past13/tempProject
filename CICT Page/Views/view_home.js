function create_home() {
    var parent = document.getElementById("container");
    var home = {
        parent : parent,
        tag : 'div',
        id : 'home',
        nodeclass : 'navItem'
    }
    var node = create_Node(home); 
    var attribute = { 
        parent : node,
        name : 'style',
        value : 'display: none'
    }
    create_Attribute(attribute);
    var homeheader = {
        parent : node,
        tag : 'h3',
        id : 'titleSubPage'
    }
    create_Node(homeheader); 
    var body = {
        parent : node,
        tag : 'div',
        id : 'containerbody'
    }
    create_Node(body); 
    node.assignfunction = 'assignHome';   
    return node;
}
function assignHome (node) {
    var parent = document.getElementById("container");   
    var body = document.getElementsByClassName("contentSub"); 
    var title = node.querySelector('h3'); 
    var orderinfotype = glbObj;
    var orderinfocode = glbObj;
    title.innerHTML = orderinfotype + ' type'; 
    body.innerHTML = orderinfocode + ' code'; 
    parent.appendChild(node);
}