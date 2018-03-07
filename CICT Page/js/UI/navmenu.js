function create_menuview() {
    var tag = 'li';
    var node = create_Node('', 'div');
    var list = titleslist.listofviews;
    node.assignfunction = 'assignmenuview';
    for (item in list)
        menu_view(list[item], item, node, tag);     
    return node;
}
function menu_view(title, index, parent, tag) {    
    var node = create_Node(parent, tag, title, null, null, 'navItem'); 
    var subnode = create_Node(node, 'a', null, "#", title, null);        
    return node;    
}
function assignMenu(node) {
    var parent = document.getElementById("navigationContainer");
    while (node.hasChildNodes()) {
        parent.appendChild(node.removeChild(node.firstChild))
    }
}
function navBtnClicked(navclass, id, node) {   
    
console.log(navclass)
console.log(id)

//     // var parent = document.getElementById('container'); 
//     // if (parent === null) {
//     //     parent.innerHTML = '';
//         var createfunction = 'assign' + navid;       
        
//         var node = window[createfunction](node);  
//         console.log(node)
              
//         // if (!parent.hasChildNodes()) {
//         //     parent.appendChild(node);
//         // }
//     // } 
}
