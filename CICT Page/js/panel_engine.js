function panel_engine() {
    var panels = [];   
    
    this.addPanel = function (node) {        
        panels.push(node); 
        return panels;
    }  
    this.collapsePanel = function(panelnode) {   
        var parent = document.getElementById(panelnode.id).parentElement;     
        var allcolarray = Array.apply(null, container.querySelectorAll(".col" )); 
        var parentcol = '#' + parent.id;
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

    function uncollapsePanel() {

    }
    function showPanel() {

    }
    function hidePanel() {

    }
    function splitterDragged() {

    }
    function containerResized() {

    }
    function updateDOMobject() {

    }
    function panelContainerDiv() {

    }


}