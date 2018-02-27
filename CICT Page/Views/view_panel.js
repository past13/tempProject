function create_panel() {   
    var tag = 'div';
    var parent = document.createElement("div");    
    var panellist = [];
    var list = titleslist.listofcolumns;
    for (item in list) {   
        var test = panel_View(list[item], item, parent, tag);
        panellist.push(test)        
    }
    return panellist[0];
}
function panel_View(title, index, parent, tag) {            
    var tag = 'div';
    var tag1 = 'h3';  
    var createSplitter = create_Node(parent, tag, 'splitter' + index, null, title, 'resizer first');
    var createCol = create_Node(parent, tag, 'col' + index, null, null, 'col');
    var node = create_Node(createCol, tag1, 'panel' + index, null, title, title); 
    return parent;
}

   



