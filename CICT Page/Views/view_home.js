function create_home() {
    var content = create_Node(null, 'div', 'homeContent', null, null, ''); 
    var header = create_Node(content, 'h1', 'homeHeader', null, null, ''); 
    var body = create_Node(content, 'div', 'homeBody', null, null, ''); 
    return content;
}
