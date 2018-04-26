function create_Node(p) {
	this.p = p;
  try { 
    var node = document.createElement(p.tag); 
    if( p.id ) {node.id = p.id;}
    if( p.href ) {node.href = p.href;}
    if( p.text ) {node.innerHTML = p.text;}  
    if( p.nodeclass ) {node.className = p.nodeclass;}
    if( p.type ) {node.type = p.type;}      
    if( p.src ) {node.src = p.src;} 
    if( p.dataid ) {node.dataid = p.dataid;}
    if( p.style ) {node.style = p.style;}
    if( p.parent ) {p.parent.appendChild(node); }   
  }
  catch(err) {}
  return node;
}
function create_Attribute(attparameters) {
    var attribute = document.createAttribute(attparameters.name);
    attribute.value = attparameters.value;
    attparameters.parent.setAttributeNode(attribute);
    return attribute;
}
function create_Table(context) {  
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
function add_Childs(packages) {    
  var newlist = [];
  packages.forEach(element => {    
    var pack = {	
      text: element.orderlineid 
    }
    newlist.push(pack)
  });
  return newlist;
}
function create_MenuView() {
	var tag = 'li';
	var list = titleslist.listofviews;
	var menuparameters = {  
			tag : 'div',
			id : 'menu'
	}
	var node = create_Node(menuparameters);        
	for (item in list) {
			menu_view(list[item], item, node, tag); 
	}
	assignMenu(node);       
}

function show3dModelList(containerlist) {   
  list = [];
  for (i=0; i<containerlist.length; i++) {
    list.push("<li id=element"+ i + ">" + i + "</li>");
  }
  return list;
}