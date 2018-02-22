


    var MODULE = (function() {
        // 'use strict';
        var listofcolumns = [
            'statistics',
            'listoforders',
            'visualisation',
            'warehouse'
        ];
        return { 
            naviga : createPanelContainerHTML(listofcolumns)
        };
        // window.ns = result;
    })();
  



        // listofcolumns = [
        //     'statistics',
        //     'listoforders',
        //     'visualisation',
        //     'warehouse'
        // ];     
        // this.initPanelContainer = createPanelContainerHTML(listofcolumns);      
 
        
              
        // createPanelContainerHTML(listofcolumns);

        // var main = document.getElementById("container");    
        // $.each(listofcolumns, function(key, value) {        
        //     createNode(main, "div", key, "splitter" + key, null, null, "resizer first");
        //     var column = createNode(main, "div", key, "col" + key, null, null, "col"); 
        //     var columnheader = createNode(column, "h3", key, "panel" + key, null, value, null); 
        //     var colattribute = createAttribute(columnheader, "onclick", "hidepanel(this)");  
        // });  
   

// function createNode(parent, tag, value, id, href, text, nodeclass) {
//     var node = document.createElement(tag);
//     if( id ) {node.id = id;}
//     if( href ) {node.href = href;}
//     if( text ) {node.innerHTML = text;}  
//     if( nodeclass ) {node.className = nodeclass;}        
//     parent.appendChild(node); 
//     return node;
// }
// function createAttribute(parent, name, value) {
//     var attribute = document.createAttribute(name);
//     attribute.value = value;
//     parent.setAttributeNode(attribute);
//     return attribute;
// }
 
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