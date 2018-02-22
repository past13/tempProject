// var testuojam = (function(){ 
//     var listofviews = [
//         'home', 
//         'orderinfo', 
//         'dynamicPanels', 
//         'recipeinfo'     
//     ];     
//     var container = document.getElementById("navigationContainer");
//     $.each(listofviews, function(key, value) {
//         var navnode = createNode(container, "li", value, value, null, null, 'navItem');
//         var attribute = createAttribute(navnode); //"onclick", "navMenu(id)"
//         var a = createNode(navnode, "a", value, null, "#", value);        
//         navnode.appendChild(a);
//         container.appendChild(navnode);
//     });   
// }(testuojam));

// function createNode(parent, tag, value, id, href, text, nodeclass) {  
//     var node = document.createElement(tag);
//     if( id ) {node.id = id;}
//     if( href ) {node.href = href;}
//     if( text ) {node.innerHTML = text;}  
//     if( nodeclass ) {node.className = nodeclass;}        
//     parent.appendChild(node); 
//     return node;
// }
// function createAttribute(parent, name, value) {
//     var attribute = document.createAttribute(name);
//     attribute.value = value;
//     parent.setAttributeNode(attribute);
//     return attribute;
// }

