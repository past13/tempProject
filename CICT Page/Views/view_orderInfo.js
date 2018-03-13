function create_orderinfo() {
    var parent = document.getElementById('container');
    var orderinfo = {
        parent : parent,
        tag : 'div', 
        id : 'orderinfo', 
        nodeclass : 'navItem',
    }
    var node = create_Node(orderinfo);      
    var attribute = { 
        parent : node,
        name : 'style',
        value : 'display: none'
    }
    create_Attribute(attribute);
    var orderinfoheader = { 
        parent : node,
        tag : 'h3',
        nodeclass : 'titleSubPage'
    }
    create_Node(orderinfoheader); 
    var orderinfobody = { 
        parent : node,
        tag : 'div',
        nodeclass : 'containerbody'
    }
    create_Node(orderinfobody); 
    node.assignfunction = 'assignOrderInfo'; 
    return node;
}
function assignOrderInfo(node) { 
    var parent = document.getElementById("container");   
    var body = document.getElementsByClassName("contentSub"); 
    var title = node.querySelector('h3'); 
    var orderinfotype = glbObj.type;
    var orderinfocode = glbObj.order.code;
    title.innerHTML = orderinfotype + ' type'; 
    body.innerHTML = orderinfocode + ' code'; 
    parent.appendChild(node);
}