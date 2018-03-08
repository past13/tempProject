function create_menuview() {
    var tag = 'li';
    var list = titleslist.listofviews;
    var menuparameters = {   
        tag : 'div'
    }
    var node = create_Node(menuparameters);
    node.assignfunction = 'assignmenuview';
    for (item in list)
    menu_view(list[item], item, node, tag); 
    return node;
}
function menu_view(title, index, parent, tag) {      
    var nodeparameters = {
        parent : parent,
        tag : tag,
        nodeclass : 'menuList'
    }    
    var node = create_Node(nodeparameters); 
    var subnodeparameters = {
        parent : node,
        tag : 'a',
        href : '#' + title,
        text : title
    }  
    var subnode = create_Node(subnodeparameters);        
    return node;    
}
function assignMenu(node) {
    var parent = document.getElementById("navigationContainer");
    while (node.hasChildNodes()) {
        parent.appendChild(node.removeChild(node.firstChild))
    }
}
function navBtnClicked(node, element) {

    // var visible = document.querySelector('.navItem:not([style="display: none"])').id;    
    
    var name = element.replace("#", "");

    console.log(node)

    if (visible !== null && visible.id === name) {
    
    $('#' + visible.id ).hide(); 
    $( element ).show(); 
    
    console.log('true');
    
    }
    else if (visible === null && visible.id !== name) {
    // $('#' + visible.id ).hide(); 
    $( element ).show(); 
    console.log(visible.id )

    console.log('false');
    
    }
        // $( element ).hide();        
    
    
}
    
    // if (isHidden(temp)) {
    //     
    // }
    // else {
    //     $( element ).hide();       
    // }

  




    // if ($( "#container:visible" )) {
    //     console.log('hit')
    //     $( "#container" ).show();
    // }
    // else {
    //     $( "#container" ).hide();
        
    // }

  




    // if ($(element).is(":visible")) {
    //     $(element).hide();
        

    // }else{
    //     $(element).show();
        
    // }

// $('.leftSideBar > div:not([data-id=' + id + '])').hide();




// $('.leftSideBar > div[data-id=' + id + ']').show();
// $('.leftSideBar > div:not([data-id=' + id + '])').hide();
  

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



function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}