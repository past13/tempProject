function createMenuView() {
    var tag = 'li';
    var parent = document.getElementById("navigationContainer");
    var list = titleslist.listofviews;
    for (item in list)
        menu_View(list[item], item, parent, tag);     
    return parent;
}
function menu_View(title, index, parent, tag) {    
    var node = createNode(parent, tag, title, null, null, null); 
    var subnode = createNode(node, 'a', null, "#", title, null);        
    return node;    
}

