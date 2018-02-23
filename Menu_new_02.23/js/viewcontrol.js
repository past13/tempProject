viewControl = function(listofcolumns, fn) { 
    var manageMethods = function(fn, data) {
        switch (fn) {
            case 'panels':
                createPanelContainer(data);
                break;
            case 'navigation':
                createNavigationContainer(data);
            break;
        }
    }
    this.publicMethod = function(data) {
        alert('Public');
    }
    this.nested = (function() {
      return {
            publicNestedMethod: function(fn, data) {            
            manageMethods(fn, data);
        }
      };
    })();
}


// function initialize_navmenu(containerdiv) { 
//   create #navmenu_buttonscontainer in containerdiv;
//   create #navmenu_viewcontainer in containerdiv;
//   prepareview(createview_orderinfo());
//   prepareview(createview_recipeinfo());
// }
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
// function prepareview(viewdiv) {
//     viewlist.push(viewdiv);
//     buttonlist.push(createbutton(viewdiv));
//   }



 
    // addEventListener("click", function(event) {
    //     var classname = event.originalTarget.parentNode.className;
    //     var id = event.originalTarget.parentNode.id;
        // function changeListView(id) {
        //   if ($('#containerpreviews').is(":visible")) {   
        //     $('#tree').show();
        //     $('#containerpreviews').hide();
        //   }
        //   else {
        //     $('#tree').hide();
        //     $('#containerpreviews').show();
        //   }
        // }
        // if (id === 'dynamicPanels') {
        //     $("#dynamicPanels").show();
        // }
        // else {
        //     $("#dynamicPanels").hide();       
        // }
    // });

    // function navMenu(filename) {     
    //     console.log(filename)    
    //     if (document.getElementById(filename)) {
    //         console.log("aaa")
    //         document.getElementById('').style.display = 'visible';
    //     }
    //     else document.getElementById('').style.display = 'none'; 
    // }