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
        id : 'orderinfobody', 
        nodeclass : 'containerbody'
    }
    create_Node(orderinfobody); 
    node.assignfunction = 'assignOrderInfo'; 
    return node;
}
function assignOrderInfo(node) {  
    var title = node.querySelector('h3'); 
    var node = document.getElementById('orderinfobody');
    var orderinfo = glbObj.order.orderinfo;
    var order = glbObj.order.parameterlist;
    var conttype = glbObj.order.containertypelist.containertype;
    var containertype = {
        0 : {
            name : 'code',
            value : conttype.code },
        1 : {
            name : 'type',
            value : conttype.type },
        2 : {
            name : 'physical width',
            value : conttype.physicalsize.width},
        3 : {
            name : 'physical height',
            value: conttype.physicalsize.height
        }
    }
    var modules = orderinfo.modules.split(',').map(function(item) {
        return item.trim();
    }); 
    var modulesnode = { 
        parent : node,
        tag : 'div',
        id : 'orderinfomodules',
        text : modules
    }
    create_Node(modulesnode); 
    var conttypetbl = createTable(containertype);
    var parameters = order.parameter;
    var parameterstbl = createTable(parameters);    
    node.appendChild(conttypetbl); 
    node.appendChild(parameterstbl); 
    title.innerHTML = 'Order Info'; 
}

