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
        nodeclass : 'titleSubPage'
    }
    create_Node(homeheader); 
    var homebody = {
        parent : node,
        tag : 'div',
        nodeclass : 'containerbody'
    }
    create_Node(homebody); 
    node.assignfunction = 'assignHome';   
    return node;
}
function assignHome (node) {
    var body = node.querySelector('div'); 
    var title = node.querySelector('h3');
    title.innerHTML = 'Home Page title'; 
    body.innerHTML = 'Home Page body';
}