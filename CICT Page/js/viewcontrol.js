function init_Page() { 
    var viewlist = [];

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

    switch (event.originalTarget.parentNode.className) {
        case 'menuList':
            navBtnClicked(attribute);
            break;
        case 'collapsePanel(this)':
            collapsePanel(data);
            break;
        case 'changeListView()':
            changeListView(data);   
            break;
        case 'draggpanel(this)':
            draggpanel(data);
            break;
    }
});
