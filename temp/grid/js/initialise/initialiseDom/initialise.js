function prepareView(viewdiv) {
    if (viewdiv !== undefined) {
        globalviewlist.push(viewdiv);
    }       
}
function initializePanells() { 
    return initPanels();   
}
function initializeBody() {    
    function initialiseNav() {
        var navparent = document.getElementsByTagName('nav')[0]; 
        var navparam = {
            parent : navparent,
            tag : 'div',
            id : 'navigation'
        }
        navNode(navparam);  
        return navparent;          
    }
    function initializeMain() {  
        var viewcontainer = {
            tag : 'div',
            id : 'viewContainer'
        }
        var mainparent = document.getElementsByTagName('main')[0].appendChild(create_Node(viewcontainer));
        var mainparam = {
            parent : mainparent,
            tag : 'div',
            id : 'maincontainer'
        }    
        initMainViews(mainparam);
        return mainparent;   
    }  
     return [initialiseNav(), initializeMain()];
}
function initializeHead() {
    var parent = document.getElementsByTagName('header')[0];    
    var logoparam = {
        parent : parent,
        tag : 'div',
        id : 'logo'
    }    
    logoNode(logoparam);
    return parent;
}
function initializeFooter() {
    var parent = document.getElementsByTagName('footer')[0];
    var footerparam = {
        parent : parent,
        tag : 'div',
        id : 'copyright',
        text: '©Copyright 2018 by CICT. All rights reversed.'
    }    
    footerNode(footerparam);
    return parent;
}
function initialise() {
    //head
    prepareView(initializeHead());
    //body
    prepareView(initializeBody()); 
    //panells
    prepareView(initializePanells());     
    //footer
    prepareView(initializeFooter());    
}




