function createNode(parent, tag, value, id, href, text, nodeclass) {
    var node = document.createElement(tag);
    if( id ) {node.id = id;}
    if( href ) {node.href = href;}
    if( text ) {node.innerHTML = text;}  
    if( nodeclass ) {node.className = nodeclass;}        
    parent.appendChild(node); 
    return node;
}
function createAttribute(parent, name, value) {
    var attribute = document.createAttribute(name);
    attribute.value = value;
    parent.setAttributeNode(attribute);
    return attribute;
}

//treeview part
function addChilds(packages) {    
	var newlist = [];
	packages.forEach(element => {    
	var pack = {	
	  text: element.orderlineid 
	}
	  newlist.push(pack)
	});
	return newlist;
  }