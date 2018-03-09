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
    var panelnode = create_Node(panelinstructions);
    var attribute = { 
        parent : panelnode,
        name : 'style',
        value : 'display: none'
    }
    create_Attribute(attribute);
    

    for (item in list) {
        var column = {
            parent : panelnode,
            tag : 'div', 
            id : 'col' + item, 
            nodeclass : 'col'  
    }  

    var nodecol = create_Node(column);  
        var panele = panel_View(item, list[item], nodecol);
        console.log(panele)
        
        panellist.push(panele)        
    }
    
    // return panellist[0];
    return list;
}

function panel_View(index, title, node) {  
    var splitter = {
        parent : node,
        tag : 'div', 
        id : 'splitter' + index, 
        nodeclass : 'resizer first'  
    }  
    create_Node(splitter); 
      
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





function create_visualisation() { 
    var panels = create_panel();
    panels.assignfunction = 'assignPanels';   
    return panels;
}

function assignPanels(node, titleslist) {     
    // console.log('assignPanels')
    
}



