function collapse (columnlist, node, id, panelnode) {    
    this.columnlist = columnlist;
    this.node = node;
    this.id = parseInt(id);
    this.panelnode = panelnode;    
    var methods = new collapseFunctions(); 
    currentcolwidth = node.clientWidth; 
    var rawcol = methods.prepareColumns(columnlist, id, currentcolwidth, node);  
    var modifiedarray = rawcol.filter( o => o.columnid !== id); 
    var nearid = methods.getNearestNumber(modifiedarray, id);    
    methods.calculateCol(rawcol, nearid, id, currentcolwidth, panelnode);
    for(var i = list.length; i--;) {
        methods.animateCol(i, list[i]);
    }
}
function hidepanel (panelnode) {
        var currentnode = panelnode.parentNode; 
        var id = currentnode.id.replace(REGPATTERN, '');    
        var allcolarray = Array.apply(null, document.getElementById('visualisation').querySelectorAll(".col" )); 
        collapse(allcolarray, currentnode, parseInt(id), panelnode);    
}

   