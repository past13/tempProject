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
        for (i=0; i < list.length; i++) {
            var column = {
                parent : node,
                tag : 'div', 
                id : 'col' + (i + 1), 
                nodeclass : 'col'  
            }      
            var splitterparam = {
                parent : node,
                tag : 'div', 
                id : 'splitter' + (i + 1), 
                nodeclass : 'splitter'  
            }  
            var splitter = create_Node(splitterparam);
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