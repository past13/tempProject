function assignpanel_col1(node) {
    var title = node.querySelector('h3');
    var body = node.querySelector('.panelbody');   
    var treeviewdata = getDataforPanels().treeview;            
    var treeviewparam = {
        tag : 'button',
        id : 'treeviewbtn',
        type : 'button' 
    } 
    var treeviewbtn = create_Node(treeviewparam);
    var onclickparam = {
        parent : treeviewbtn,
        name : 'onclick',
        value : 'changeListView()'
    }
    create_Attribute(onclickparam);
    var imagebtnparam = {
        parent : treeviewbtn,
        tag : 'img',
        id : 'treeimg',
        src : 'img/treeviewbutton.png' 
    } 
    create_Node(imagebtnparam);
    var imagebtn = {
        parent : treeviewbtn,
        name : 'onclick',
        value : 'changeListView()'
    }
    create_Attribute(imagebtn);
    var treediv = {
        tag : 'div',
        id : 'treeview',
        style : 'display:none' 
    } 
    var treeview = create_Node(treediv);   
    body.appendChild(treeviewbtn); 
    body.appendChild(treeview);    
    assignTree(node, treeviewdata);
    title.innerHTML = 'Tree View or List';     
    return node;
}
//todo move to addeventlistener
function assignTree(node, treeviewdata) {
    $('#treeview').treeview({data: treeviewdata});
}

function changeListView() {
if ($('#treeview').is(":visible")) {   
    $('#treeview').hide();
    // $('#containerpreviews').hide();
  }
  else {
    $('#treeview').show();
    // $('#containerpreviews').show();
  }
}



