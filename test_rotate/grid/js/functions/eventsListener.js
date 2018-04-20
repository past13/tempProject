
addEventListener("click", function(event) { 
    var node = event.originalTarget;     
    var attribute = node.getAttribute('href');

    switch (event.originalTarget.parentNode.className) {
        case 'menuItem':
            navBtnClicked(attribute);
            break;
        case 'navItem':    
            
        var parent = new panelFunctions();

        //bug with container width
            parent.draggPanell();
            break;     
        case 'col':           
            // interface.collapseCol(event.originalTarget); 
            break; 
        case 'changeListView()':
            // changeListView(data);   
            break;
        case 'changeListView()':
            break;
    }
});