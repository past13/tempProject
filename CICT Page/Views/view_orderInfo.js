function create_orderinfo() {   
    var content = create_Node(null, 'div', 'test1', null, null, 'subPage'); 
    var header = create_Node(content, 'h1', 'test1', null, null, 'titleSubPage'); 
    var body = create_Node(content, 'div', 'test1', null, null, 'contentSub'); 
    content.assignfunction = 'assignOrderInfo';
    return content;
}

function assignOrderInfo(list) {
    var parent = document.getElementById('container')
    while (list.childNodes.length > 0) {
        parent.appendChild(list.childNodes[0]);
    }  
}