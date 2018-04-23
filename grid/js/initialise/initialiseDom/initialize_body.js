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
function viewNode(node, title, parent, index) {
    if (node === title) {
        var labelparam = {
            parent : parent,
            tag : 'div', 
            id : 'label' + title,
            nodeclass : 'labelView'       
        } 
        create_Node(labelparam);
        var bodyparam = {
            parent : parent,
            tag : 'div', 
            id : 'body' + title,
            nodeclass : 'bodyView'       
        } 
        create_Node(bodyparam);
        var footerparam = {
            parent : parent,
            tag : 'div', 
            id : 'footer' + title,
            nodeclass : 'footerView'       
        } 
        create_Node(footerparam);
        return node;
    }   
}
function exceptViews(arrnode, exceptions) {
    var equal = exceptions.filter(x => x === arrnode);    
    if (equal.length === 0) { return arrnode };
}

function initMainViews(mainparam) {
    var parent = mainparam.parent;  
    var views = titleslist.listofviews;
    listwithoutexec = [];
    for (i=0; i < views.length; i++) {
        var panelinstructions = {
            parent : parent,
            tag : 'div', 
            id : views[i],
            nodeclass : 'navItem'
        }
        var node = create_Node(panelinstructions);
        var attribute = { 
            parent : node,
            name : 'style',
            value : 'display: none'
        }        
        create_Attribute(attribute);        
        var exceptnode = [
            'visualisation'
        ]
        listwithoutexec.push(exceptViews(views[i], exceptnode));
        viewNode(listwithoutexec[i], views[i], node, i);                        
    }  
}





