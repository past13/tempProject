function panel_engine() {
    var panels = [];
    var func = new panelsFunctions(); 

    this.addPanel = function (node) {        
        panels.push(node); 
        return panels;
    } 

    this.collapseCol = function(panelnode) {   
    var currentnode = panelnode.parentNode; 
    var id = currentnode.id.replace(REGPATTERN, '');
    var allcolarray = Array.apply(null, container.querySelectorAll(".col" )); 
    
    var array = func.collapse(allcolarray, currentnode, id);

    // animate(preparedlist, currentcolumn); 
    }  

    this.splitterDragged = function(splitternode) {
      func.draggpanel(splitternode);
    }



    this.uncollapsePanel = function() {


    }
    this.changeListView = function() {
        if ($('#treeview').is(":visible")) {   
        $('#treeview').hide();
        $('#containerpreviews').hide();
        }
        else {
        $('#treeview').show();
        $('#containerpreviews').show();
        }
    }

    function hidePanel() {
    }

    
    function containerResized() {
    }
    function updateDOMobject() {
    }
    function panelContainerDiv() {
    
    }  

}