function create_Node(nodeparameters) {
  // console.log(create_Node.caller)
  try { 
    var node = document.createElement(nodeparameters.tag); 
    if( nodeparameters.id ) {node.id = nodeparameters.id;}
    if( nodeparameters.href ) {node.href = nodeparameters.href;}
    if( nodeparameters.text ) {node.innerHTML = nodeparameters.text;}  
    if( nodeparameters.nodeclass ) {node.className = nodeparameters.nodeclass;}
    if( nodeparameters.type ) {node.type = nodeparameters.type;}      
    if( nodeparameters.src ) {node.src = nodeparameters.src;} 
    if( nodeparameters.dataid ) {node.dataid = nodeparameters.dataid;}
    if( nodeparameters.style ) {node.style = nodeparameters.style;}
    if( nodeparameters.parent ) {nodeparameters.parent.appendChild(node); }   
  }
  catch(err) {
    console.log(err)
  }
  return node;
}
function create_Attribute(attparameters) {
    var attribute = document.createAttribute(attparameters.name);
    attribute.value = attparameters.value;
    attparameters.parent.setAttributeNode(attribute);
    return attribute;
}
function createTable(context) {  
  var table = document.createElement('table');  
  var tbody = document.createElement('tbody');
  table.appendChild(tbody); 
  for(var prop in context) {
    if(context.hasOwnProperty(prop)) {      
        var content = (
        '<tr>' +
        '<td>' + context[prop].name + '</td>' +
        '<td>' + context[prop].value + '</td>' +
        '</tr>'
        );
        tbody.insertAdjacentHTML('afterbegin', content);      
    }
  }
  return table;
}
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
function createButton(viewdiv) {
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