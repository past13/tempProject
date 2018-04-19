function menu_view(title, parent, tag) {   
    var nodeparameters = {
        parent : parent,
        tag : tag,
        nodeclass : 'menuItem'
    }    
    var node = create_Node(nodeparameters); 
    var subnodeparameters = {
        parent : node,
        tag : 'a',
        href : '#' + title,
        text : title
    } 
    create_Node(subnodeparameters);
    return node;
} 
function navNode(navparam) {    
    var tag = 'li'; 
    var list = titleslist.listofviews;
    var container = create_Node(navparam);
    var listparam = {
        parent : container,
        tag : 'ul',
        id : 'navContainer'    
    } 
    var containernode = create_Node(listparam);
    for (item in list) {        
        menu_view(list[item], containernode, tag); 
    }
}
function initMainViews(mainparam) {
    var parent = mainparam.parent;  
    var views = titleslist.listofviews;

    for (i=0; i< listofviews.length; i++) {
        var panelinstructions = {
            parent : parent,
            tag : 'div', 
            id : listofviews[i],
            nodeclass : 'navItem'
        }
        var node = create_Node(panelinstructions);
        var attribute = { 
            parent : node,
            name : 'style',
            value : 'display: none'
        }        
        create_Attribute(attribute);          
    }    
}





// function panel_View(index, title, node) {    
//     var panellabel = {
//         parent : node,
//         tag : 'h3', 
//         id : 'panellabel' + (i + 1),
//         nodeclass : 'panelsheader'       
//     } 
//     var paneltitle = create_Node(panellabel);
//     var panelbody = {
//         parent : node,
//         tag : 'div', 
//         id : 'panel' + (i + 1),
//         nodeclass : 'panelbody'       
//     } 
//     create_Node(panelbody);    
//     return node;
// }
// function initPanels(param) {
//     var panellist = [];
//     var col = titleslist.listofcolumns;
//     for (i=0; i < col.length; i++) {
//         var column = {
//             parent : "",
//             tag : 'div', 
//             id : 'col' + (i + 1), 
//             nodeclass : 'col'  
//         }      
//         var splitterparam = {
//             parent : "",
//             tag : 'div', 
//             id : 'splitter' + (i + 1), 
//             nodeclass : 'splitter'  
//         }  
//         var splitter = create_Node(splitterparam);
//         var nodecol = create_Node(column);  
//         var panele = panel_View(i, col[i], nodecol);  
//         panellist.push(panele); 
//     } 
//     return panellist;
// }