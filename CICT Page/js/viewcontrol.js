


function init_Page() { 
    var viewlist = [];
    var buttonlist = []; 
    prepareView(create_menuview()); 
    prepareView(create_orderinfo()); 
    // prepareView(create_visualisation());      
    // prepareView(create_recipeinfo());       
    
    function prepareView(viewdiv) {           
        viewlist.push(viewdiv); 
        // var button = createbutton(viewdiv); 
        // buttonlist.push(button);
    }

    for (list in viewlist) {
        assignContent(viewlist[list]);
    } 
}

function assignContent(node) {
    //todoswitch    
     if (node.assignfunction === 'assignorderinfo'){
        assignorderinfo(node);
    }
    else if (node.assignfunction === 'assignmenuview'){               
        assignMenu(node);
    }
    else if (node.className === 'panelContainer'){        
        assignPanels(node);
    }
    console.log('assign')
    
}




// function createbutton(viewdiv) {
//     // todo: create button here
//     button = ....;
//     button.view = viewdiv;
//     button.onclick = buttonclick(button);
//   }
  
//   function buttonclick(button) {
//     for each b in buttonlist 
//     if b== button b.highlight;
//     else b.donthighlight;
    
//     for each v in viewlist {
//       if v = button.view v.show();
//       else v.hide();
//     }
//   }

addEventListener("click", function(event) {      

    var classname = event.originalTarget.parentNode.className;
    var id = event.originalTarget.parentNode.id;
    var node = event.originalTarget;        
    switch (classname) {
        case 'navItem':
            navBtnClicked(classname, id, node);
            break;
        case 1:
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
    if (id === 'dynamicPanels') {
        $("#dynamicPanels").show();
    }
    else {
        $("#dynamicPanels").hide();       
    }
});

// viewControl = function(listofcolumns, fn) { 
//     var manageMethods = function(fn, data) {
//         switch (fn) {
//             case 'panels':
//                 createPanelContainer(data);
//                 break;
//             case 'navigation':
//                 createNavigationContainer(data);
//             break;
//         }
//     }
//     this.publicMethod = function(data) {
//         alert('Public');
//     }
//     this.nested = (function() {
//       return {
//             publicNestedMethod: function(fn, data) {            
//             manageMethods(fn, data);
//         }
//       };
//     })();
// }