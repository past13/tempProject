function create_panel() {
    var parent = document.getElementById('container'); 
    // var parent = document.createElement('div');
    var panellist = [];
    var list = titleslist.listofcolumns;
    var panelinstructions = {
        parent : parent,
        tag : 'div', 
        id : 'visualisation', 
        nodeclass : 'navItem'  
    }
    var node = create_Node(panelinstructions);
    node.assignfunction = 'assignpanels'; 
    var attribute = { 
        parent : node,
        name : 'style',
        value : 'display: none'
    }
    create_Attribute(attribute);  
    for (item in list) {
    var column = {
        parent : node,
        tag : 'div', 
        id : 'col' + item, 
        nodeclass : 'col'  
    }  
    var splitter = {
        parent : node,
        tag : 'div', 
        id : 'splitter' + item, 
        nodeclass : 'resizer first'  
    }  
    create_Node(splitter);
    var nodecol = create_Node(column);  
    var panele = panel_View(item, list[item], nodecol);        
        panellist.push(panele);     
    }   
    return node;
}
function panel_View(index, title, node) {    
    var panellabel = {
        parent : node,
        tag : 'h3', 
        id : 'panellabel' + index       
    } 
    create_Node(panellabel);   
    var panelbody = {
        parent : node,
        tag : 'div', 
        id : 'panelbody' + index       
    } 
    create_Node(panelbody);    
    return node;
}

// function create_visualisation() { 
//     var panels = create_panel();
//     panels.assignfunction = 'assignPanels';   
//     console.log(panels)
//     return panels;
// }

function assignPanels(node, titleslist) {     
    // console.log('assignPanels')
    
}



