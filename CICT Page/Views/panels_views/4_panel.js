function assignpanel_col3(node, data, index) {
    var title = node.querySelector('h3');
    var body = node.querySelector('#panel' + index);    
    // var warehouse = data.warehouse;
    var warehousemap = {
        parent : body,
        tag : 'img',
        id : 'map',
        src : 'img/map.png'       
    } 
    create_Node(warehousemap);
    title.innerHTML = 'Warehouse';
}