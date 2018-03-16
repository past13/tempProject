function assignpanel_col3(node) {
    var title = node.querySelector('h3');
    var body = node.querySelector('.panelbody'); 
    var warehousemap = {
        parent : body,
        tag : 'img',
        id : 'map',
        src : 'img/map.png'       
    } 
    var map = create_Node(warehousemap);
    title.innerHTML = 'Warehouse';      
    return node;
}