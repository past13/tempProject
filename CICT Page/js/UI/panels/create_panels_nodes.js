function initialisePanels() {
    function create_panels() {        
        var parent = document.getElementById('container'); 
        var panellist = [];
        var list = titleslist.listofcolumns;
        var panelinstructions = {
            parent : parent,
            tag : 'div', 
            id : 'visualisation', 
            nodeclass : 'navItem'  
        }
        var node = create_Node(panelinstructions);
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
            var splitterparam = {
                parent : node,
                tag : 'div', 
                id : 'splitter' + item, 
                nodeclass : 'splitter'  
            }  
            var splitter = create_Node(splitterparam);
            // var attribute = { 
            //     parent : splitter,
            //     name : 'onclick',
            //     value : 'draggpanel(this)'
            // }
            // create_Attribute(attribute);  
            var nodecol = create_Node(column);  
            var panele = panel_View(item, list[item], nodecol);        
            panellist.push(panele);    
        } 
        return panellist;
    }
    initialisePanels.create_panels = create_panels;
    function panel_View(index, title, node) {    
        var panellabel = {
            parent : node,
            tag : 'h3', 
            id : 'panellabel' + index,
            nodeclass : 'panelsheader'       
        } 
        var paneltitle = create_Node(panellabel);
        var panelbody = {
            parent : node,
            tag : 'div', 
            id : 'panel' + index,
            nodeclass : 'panelbody'       
        } 
        create_Node(panelbody);    
        return node;
    }
}