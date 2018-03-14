function assignpanel_col1(node, data, index) {
    var title = node.querySelector('h3');
    var body = node.querySelector('#panel' + index);
    var treeview = data.treeview;    
    var treeviewparam = {
        tag : 'button',
        id : 'treeviewbtn',
        // nodeclass : 'btn btn-primary btn-md',
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
    assignTree(node, data);
    title.innerHTML = 'Tree View or List';     
}
function assignTree(node, data) {
    $('#treeview').treeview({data: data.treeview});
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



