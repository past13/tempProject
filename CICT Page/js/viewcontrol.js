

function init_Page() {     
    var obj = xmlToObj;
    // this.viewlist = titleslist;  
    this.statistic = statistics;  
    this.treeview = treeview;
    this.titleslist = titleslist;

    var viewlist = [];
    var buttonlist = []; 

    prepareView(create_visualisation());
    prepareView(create_orderinfo());
    
    // prepareView(create_recipeinfo());
    prepareView(create_menuview());    
    
    function prepareView(viewdiv) {           
        viewlist.push(viewdiv);   
        // var button = createbutton(viewdiv); 
        // buttonlist.push(button);
    }

    for (list in viewlist) {
        assignContent(viewlist[list], titleslist);

    } 
}

function assignContent(list, titleslist) {
    if (list.className === 'panelContainer' && titleslist !== null) {
        assignPanels(list, titleslist);
    }
    else {

    }
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
            
    switch (classname) {
        case 'navItem':
            navBtnClicked(classname, id);
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