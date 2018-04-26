function hideNode(value, elementname) {
    if (value.id !== elementname) {
        var full = '#' + value.id;
        $(full).hide();
    }  
}
function navBtnClicked(element) { 
    var query = '.navItem:not([style="display: none"])';
    var elementname = element.replace("#", "");
    if (document.querySelector(query) !== null) {
        var visible = document.querySelectorAll(query);       
        if (visible.id === elementname) {                   
            $(element).show();               
        }
        else {            
            $(element).show();
            for( i=0; i < visible.length; i++){            
                hideNode(visible[i], elementname);
            }          
        }       
    }
    else {      
        $(element).show(); 
    }    
}

