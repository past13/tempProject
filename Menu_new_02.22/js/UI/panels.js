 
    
    function createPanelContainerHTML(listofcolumns) {
        console.log(document)
        var main = document.getElementById("container");                
           $.each(listofcolumns, function(key, value) {        
               createNode(main, "div", key, "splitter" + key, null, null, "resizer first");
               var column = createNode(main, "div", key, "col" + key, null, null, "col"); 
               var columnheader = createNode(column, "h3", key, "panel" + key, null, value, null); 
               var colattribute = createAttribute(columnheader, "onclick", "hidepanel(this)");  
           });  
    }

   



