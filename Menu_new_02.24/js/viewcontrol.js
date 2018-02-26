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



function prepareview(viewdiv) { 
    viewlist = [];
    buttonlist = [];

    // viewlist.push(viewdiv);
    buttonlist.push(create_button(viewdiv));
  }


function navmenu_buttonscontainer() {
    create_button();
}

function create_button(viewdiv) {    
}



function init_Page() {     
    var obj = xmlToObj;
    this.viewlist = titleslist;  
    this.statistic = statistics; 


    prepareview(createMenuView());  
    prepareview(createPanelView());
    
    //menu items   
    var test = createRecipeInfo();
    $( "#recipeinfo" ).load( "article.html" );
    console.log(test)
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

