function create_warehouse() {          
    var content = create_Node(null, 'div', 'test1', null, null, 'subPage'); 
    var header = create_Node(content, 'h1', 'test1', null, null, 'titleSubPage'); 
    var body = create_Node(content, 'div', 'test1', null, null, 'contentSub'); 
    return content;
}
