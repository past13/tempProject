function create_Node(parent, tag, id, href, text, nodeclass) {
  var node = document.createElement(tag);  
  if( id ) {node.id = id;}
  if( href ) {node.href = href;}
  if( text ) {node.innerHTML = text;}  
  if( nodeclass ) {node.className = nodeclass;}
  if( parent ) {parent.appendChild(node); }      
  return node;
}
function create_Attribute(parent, name, value) {
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

function create_button(viewdiv) {
  this.viewdiv = viewdiv;   
  var button = {};
  button.view = viewdiv;

  if(viewdiv.length > 1) {
    for (i=0; i<viewdiv.length; i++) {
    if (viewdiv[i].className === 'navItem')
      viewdiv[i].setAttribute('onclick','navMenu(this);');
    }
  } 
  else {
    // if (viewdiv[i].className ===)
  }
}

function buttonClick(button) {   

  // if b== button b.highlight;
  // else b.donthighlight;
  
  // for each v in viewlist {
  //   if v = button.view v.show();
  //   else v.hide();
  // }
}

