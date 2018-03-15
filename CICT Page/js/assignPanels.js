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


// function mapListOfCol(listcol, colnodes) {
//     var nodes = listcol.map( function(title, i){
//         return {'assignfunction': 'assignpanel_col' + i, "node": colnodes[i]}        
//     }.bind(this));
//     return nodes;
// }
//take function name from node and call function
// function assignCol(nodes, data) {
//     for (node in nodes) {        
//         try {            
//             var funcname = nodes[node].assignfunction;        
//             window[funcname](nodes[node].node, data, node); 
//         }
//         catch(error) {
//             console.log(error)
//             console.log('missing assignpanel_col* function' + nodes[node].id)
//         }          
//     }   
// }
// function assignPanels(node) {  
//     this.listofcol = listofcolumns;
//     var columns = node.querySelectorAll('.col');  
//     var dataforpanels = getDataforPanels();
//     var nodes = mapListOfCol(listofcol, columns);  
//     assignCol(nodes, dataforpanels);  
// }