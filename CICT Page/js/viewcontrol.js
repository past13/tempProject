function init_Page() { 
    this.viewlist = [];

    prepareView(init_Menu()); 
    prepareView(create_home());
    prepareView(create_orderinfo());
    prepareView(createVisualisation_view());  
    prepareView(create_recipeinfo());    

    function prepareView(viewdiv) {         
        if (viewdiv !== undefined) {
            viewlist.push(viewdiv);
        }          
    }
}

addEventListener("click", function(event) { 
    var node = event.originalTarget;     
    var attribute = node.getAttribute('href');

    var interface = new panel_engine(); 

    switch (event.originalTarget.parentNode.className) {
        case 'menuList':
            navBtnClicked(attribute);
            break;
        case 'navItem': 
            interface.splitterDragged(event.originalTarget);
            break;     
        case 'col':           
            interface.collapseCol(event.originalTarget); 
            break; 
        case 'changeListView()':
            changeListView(data);   
            break;
        case 'changeListView()':
        //  draggpanel(data);   
        
            break;
    }
});

// addEventListener("ondrag", function(event) { 
//     var node = event.originalTarget;     
//     var attribute = node.getAttribute('href');
//     console.log('hit3')

// });