function assignpanel_col2(node, data, index) {
    var title = node.querySelector('h3');
    var body = node.querySelector('#panel' + index);
    var canvasprop = {
        tag : 'canvas',
        id : 'modelscene'
    }      
    var canvas = create_Node(canvasprop); 
    body.appendChild(canvas); 
    title.innerHTML = '3D Model';   
}