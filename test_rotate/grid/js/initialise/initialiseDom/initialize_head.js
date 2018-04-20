function logoNode(logoparam) {    
    var logonode = create_Node(logoparam);
    var h1param = {
        parent : logonode,
        tag : 'h1',
        text : 'CICT Innovations'      
    } 
    create_Node(h1param);    
    return logonode;   
}