function create_home() {
    var parent = document.getElementById("container");
    var home = {
        parent : parent,
        tag : 'div',
        id : 'home',
        nodeclass : 'navItem'
    }
    var node = create_Node(home); 
    node.assignfunction = 'assignhome'; 
    var header = {
        parent : node,
        tag : 'h1',
        id : 'homeHeader'
    }
    create_Node(header); 
    var body = {
        parent : node,
        tag : 'div',
        id : 'homeBody'
    }
    create_Node(body);   
    return node;
}


// function assignHome () {
//     console.log('hit')
// }