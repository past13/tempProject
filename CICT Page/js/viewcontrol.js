
function init_Page() { 
    var viewlist = [];
    var buttonlist = []; 

    prepareView(create_menuview()); 
    prepareView(create_orderinfo()); 
    
    // prepareView(create_home());
    // prepareView(create_panel());      
    // prepareView(create_recipeinfo());

    function prepareView(viewdiv) {           
        viewlist.push(viewdiv); 
        // var button = createbutton(viewdiv); 
        // buttonlist.push(button);
    }
    for (list in viewlist) {
        var funcname = viewlist[list].assignfunction;
        window[funcname](viewlist[list]); 
    } 
}

function assignContent(item, callback) {  
    // if (node.assignfunction === 'assignMenu' && typeof assignMenu === 'function'){               
    //     assignMenu(node);
    // }
    // if (node.assignfunction === 'assignOrderInfo' && typeof assignMenu === 'function'){               
    //     assignOrderInfo(node);
    // }
    // window[functionname]();   
    // else if (node.className === 'panelContainer'){        
    //     assignPanels(node);
    // }    
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
    var node = event.originalTarget;     
    var attribute = node.getAttribute('href');

    switch (event.originalTarget.parentNode.className) {
        case 'menuList':
            navBtnClicked(attribute);
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
    // if (id === 'dynamicPanels') {
    //     $("#dynamicPanels").show();
    // }
    // else {
    //     $("#dynamicPanels").hide();       
    // }
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