function create_panel() {
    var parent = document.getElementById('container'); 
    var panellist = [];
    var list = titleslist.listofcolumns;
    var panelinstructions = {
        parent : parent,
        tag : 'div', 
        id : 'visualisation', 
        nodeclass : 'navItem'  
    }
    var node = create_Node(panelinstructions);
    var attribute = { 
        parent : node,
        name : 'style',
        value : 'display: none'
    }
    create_Attribute(attribute);  
    for (item in list) {
        var column = {
            parent : node,
            tag : 'div', 
            id : 'col' + item, 
            nodeclass : 'col'  
        }      
        var splitter = {
            parent : node,
            tag : 'div', 
            id : 'splitter' + item, 
            nodeclass : 'splitter'  
        }  
        create_Node(splitter);
        var nodecol = create_Node(column);  
        var panele = panel_View(item, list[item], nodecol);        
        panellist.push(panele);    
    }   
    node.assignfunction = 'assignPanels'; 
    return node;
}
function panel_View(index, title, node) {    
    var panellabel = {
        parent : node,
        tag : 'h3', 
        id : 'panellabel' + index       
    } 
    var paneltitle = create_Node(panellabel);  
    var attribute = { 
        parent : paneltitle,
        name : 'onclick',
        value : 'hidepanel(this)'
    }
    create_Attribute(attribute);    
    var panelbody = {
        parent : node,
        tag : 'div', 
        id : 'panel' + index,
        nodeclass : 'panelbody'       
    } 
    create_Node(panelbody);    
    return node;
}
function addPackagesToPallet(packages) {  
    var newlist = [];
    packages.forEach(element => {    
    var pack = {    
      text: element.orderlineid 
    }
      newlist.push(pack)
    });
    return newlist;
  }
function getDataforPanels() { 
    var globalobj = glbObj;
    var treeview = (function(globalobj) {
        var obj = [];  
        var containerlist = globalobj.containerrecipelist.containerrecipe;     
        containerlist.forEach(element => {  
            var pallettype = element.containertypecode;    
            var amountonpallet = element.physicalresult.package.length;
            var package = element.physicalresult.package;		 
            var pallet = {
                text: pallettype,
                tags: [amountonpallet],
                nodes : child = addPackagesToPallet(package),
            }
            obj.push(pallet)  
        });   	
        return obj;
    }(globalobj));  
    var statistics = (function(globalobj) { 
        return globalobj.recipestatistics.statistic;  
    }(globalobj));
    return {
        treeview : treeview,
        statistics : statistics
    }
}
function mapListOfCol(listcol, colnodes) {
    var nodes = listcol.map( function(title, i){
        return {'assignfunction': 'assignpanel_col' + i, "node": colnodes[i]}        
    }.bind(this));
    return nodes;
}
//take function name from node and call function
function assignCol(nodes, data) {
    for (node in nodes) {        
        try {            
            var funcname = nodes[node].assignfunction;        
            window[funcname](nodes[node].node, data, node); 
        }
        catch(error) {
            console.log(error)
            console.log('missing assignpanel_col* function' + nodes[node].id)
        }          
    }   
}
function assignPanels(node) {  
    this.listofcol = listofcolumns;
    var columns = node.querySelectorAll('.col');  
    var dataforpanels = getDataforPanels();
    var nodes = mapListOfCol(listofcol, columns);  
    assignCol(nodes, dataforpanels);  
}
