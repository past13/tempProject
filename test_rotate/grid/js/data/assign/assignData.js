function assingContent(node, content){
    if (node instanceof Array) {
        node[0].insertAdjacentHTML('afterbegin', content);        
    } else if (node instanceof Object) {
        node.insertAdjacentHTML('afterbegin', content);
    }   
}

function appedNodesToView(menulist){   
    var container = Array.prototype.slice.call(menulist.childNodes); 
    //todo refactor assign data reuse code (dublicate)   
    if (menulist.id === 'home' ) { 
        var label = container.filter(x => x.id === 'label' + menulist.id);  
        var labelcontent = (        
            '<div>' + 'homeLabel' + '</div>'        
        );
        assingContent(label, labelcontent);
        var body = container.filter(x => x.id === 'body' + menulist.id);
        var bodycontent = (        
            '<div>' + 'homeBody' + '</div>'        
        );
        assingContent(body, bodycontent); 
        var footer = container.filter(x => x.id === 'footer' + menulist.id);
        var footercontent = (        
            '<div>' + 'homeFooter' + '</div>'        
        );
        assingContent(footer, footercontent); 
    }
    if (menulist.id === 'recipeinfo' ) {
        var label = container.filter(x => x.id === 'label' + menulist.id);  
        var labelcontent = (        
            '<div>' + 'recipeinfoLabel' + '</div>'        
        );
        assingContent(label, labelcontent);
        var body = container.filter(x => x.id === 'body' + menulist.id);
        var bodycontent = (        
            '<div>' + 'recipeinfoBody' + '</div>'        
        );
        assingContent(body, bodycontent); 
        var footer = container.filter(x => x.id === 'footer' + menulist.id);
        var footercontent = (        
            '<div>' + 'recipeinfoFooter' + '</div>'        
        );
        assingContent(footer, footercontent); 
    }
    if (menulist.id === 'orderinfo' ) {
        var label = container.filter(x => x.id === 'label' + menulist.id);  
        var labelcontent = (        
            '<div>' + 'orderinfoLabel' + '</div>'        
        );
        assingContent(label, labelcontent);
        var body = container.filter(x => x.id === 'body' + menulist.id);
        var bodycontent = (        
            '<div>' + 'orderinfoBody' + '</div>'        
        );
        assingContent(body, bodycontent); 
        var footer = container.filter(x => x.id === 'footer' + menulist.id);
        var footercontent = (        
            '<div>' + 'orderinfoFooter' + '</div>'        
        );
        assingContent(footer, footercontent); 
    }
}
function appendDataToPanels(node) {
    if (node.id === 'col1' ) {       
        var labelcontent = (        
            'col1 TITLE'       
        );
        assingContent(node.firstChild, labelcontent);        
        var table = create_Table(globalrecipe.statistic)
        
        var body = node.lastChild;
        body.append(table);       
    }
    if (node.id === 'col2' ) {
        var labelcontent = (        
            'col2 TITLE'       
        );
        assingContent(node.firstChild, labelcontent);
        var bodycontent = (        
            'col2 BODY'       
        );
        assingContent(node.lastChild, bodycontent); 
    }
    if (node.id === 'col3' ) {
        var labelcontent = (        
            'col3 TITLE'       
        );
        assingContent(node.firstChild, labelcontent);
        var bodycontent = (        
            'col3 BODY'       
        );
        assingContent(node.lastChild, bodycontent); 
    }
    if (node.id === 'col4' ) {
        var labelcontent = (        
            'col4 TITLE'       
        );
        assingContent(node.firstChild, labelcontent);
        var bodycontent = (        
            'col4 BODY'       
        );
        assingContent(node.lastChild, bodycontent); 
    }
}
function assignDataToViews() {  
    var mainviews = Array.prototype.slice.call(globalviewlist[1][1].childNodes);
    //add content from glob recipe to exact View except Visualisation
    for (i=0; i<mainviews.length; i++) {
        var node = document.getElementById(String(mainviews[i].id));
        appedNodesToView(node); 
    }    
    //assign data to panells
    var columns = document.querySelectorAll(".col");    
    for (i=0;i<columns.length; i++) {
        appendDataToPanels(columns[i]);
    }  
}