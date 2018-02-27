function create_menuview() {
    var tag = 'li';
    var parent = document.getElementById("navigationContainer");
    var list = titleslist.listofviews;
    for (item in list)
        menu_view(list[item], item, parent, tag);     
    return parent;
}
function menu_view(title, index, parent, tag) {    
    var node = create_Node(parent, tag, title, null, null, 'navItem'); 
    var subnode = create_Node(node, 'a', null, "#", title, null);        
    return node;    
}
function navBtnClicked(navclass, navid) {    
    var parent = document.getElementById('container'); 
    parent.innerHTML = '';
    var createfunction = 'create_' + navid;        
    var node = window[createfunction]();
    if (!parent.hasChildNodes()) {
        parent.appendChild(node);
    }
}
