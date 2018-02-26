function createPanelView() {
    var tag = 'div';
    var parent = document.getElementById("container");    
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
    var createSplitter = createNode(parent, tag, 'splitter' + index, null, title, 'resizer first');
    var createCol = createNode(parent, tag, 'col' + index, null, null, 'col');
    var node = createNode(createCol, tag1, 'panel' + index, null, title, title); 
    return parent;
}

   



