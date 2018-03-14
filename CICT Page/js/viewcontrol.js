function init_Page() { 
    var viewlist = [];
    var buttonlist = []; 

    prepareView(create_menuview()); 
    prepareView(create_orderinfo());     
    prepareView(create_home());
    prepareView(create_panel());      
    prepareView(create_recipeinfo());

    function prepareView(viewdiv) {           
        viewlist.push(viewdiv); 
    }
    for (list in viewlist) {
        try {
            var funcname = viewlist[list].assignfunction;
            window[funcname](viewlist[list]); 
        }
        catch(error) {
            console.log(error)
            console.log('missing assignfunction function' + viewlist[list].id)
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
        case 'hidepanel':
            hidepanel(data);
            break;
        case 2:
            break;
            // default: monthString = "Invalid month";
            break;
    }

    function changeListView(id) {
        if ($('#containerpreviews').is(":visible")) {   
        $('#tree').show();
        $('#containerpreviews').hide();
        }
        else {
        $('#tree').hide();
        $('#containerpreviews').show();
        }
    }
    // if (id === 'dynamicPanels') {
    //     $("#dynamicPanels").show();
    // }
    // else {
    //     $("#dynamicPanels").hide();       
    // }
});
