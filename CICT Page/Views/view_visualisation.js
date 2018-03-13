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
        nodeclass : 'resizer first'  
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
function addChilds(packages) {  
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
                nodes : child = addChilds(package),
            }
            obj.push(pallet)  
        });   	
        return obj;
    }(globalobj));  

    var statistics = (function(globalobj) { 
        return globalobj.recipestatistics.statistic;  
    }(globalobj));

    return {
        listoforders : treeview,
        statistics : statistics
    }
}

function assignPanels(node) {  
    var parent = document.getElementById("container");    
    var columns = node.querySelectorAll('.col');     
  
    var dataforpanels = getDataforPanels();     

    
    var result = mapValues(listofcolumns, columns, dataforpanels);

  
    parent.appendChild(node);
}

// var col0 = 'col0';
//     var col1 = 'col1';
//     var col3 = 'col2';
//     var col4 = 'col3';

function filterKeys(obj, func) {
    return Array.prototype.filter.call(Object.keys(obj), func, obj);
}
function someKeys(obj, func) {
    return Array.prototype.some.call(Object.keys(obj), func, obj);
}
function atLeastOnePropertyMatches(obj, requiredProp) {
    return someKeys(obj, function (prop) {
        if (requiredProp.hasOwnProperty(prop)) {
            return this[prop] === requiredProp[prop];
        }
    });
}

// function getMatchingKeys(obj, data) {
//    console.log('hit')
// //    console.log(obj)
// //    console.log(data)   

// //     return filterKeys(obj, function (prop) {
// //         return atLeastOnePropertyMatches(this[prop], required);
// //     });
// }


function mapValues(titlelist, columns, dataforpanels) {   
    var pattern = /\d/g; 

    // var treeview = dataforpanels.treeview;
    var statistics = dataforpanels.statistics;

    // var array = Array.prototype.slice.call(columns);

    // var results = getMatchingKeys(array, dataforpanels);

    // var temptemp = listofcolumns.filter(value => value. ==='0')

    console.log('a')


    for (i=0; i < listofcolumns.length; i++) {

        let adults = listofcolumns.filter(tile => tile === 'statistics');

        

        console.log(index)
        // console.log(columns[i].id)

    } 


    
    // titlelist.map(function( item,  index) { 
    //     var parent = document.getElementById(array[index].id);       

    //     // [1,2,3,4].filter(function (value) {return value % 2 === 0});
    //     // // to:
    //     // [1,2,3,4].filter(value => value % 2 === 0);

    //     var titlenode = parent.querySelector('h3');
    //     titlenode.innerHTML = titlelist[index][0];  

        
        
    // });
}
// testArr = riskNamesArr.map( function(x, i){
//     return {"name": x, "state": riskWorkflowStateArr[i]}        
// }.bind(this));


// for(var prop in context) {


//     console.log(context[prop])

//     if(context.hasOwnProperty(prop)) {      
//       var content = (
//         '<tr>' +
//         '<td>' + context[prop].name + '</td>' +
//         '<td>' + context[prop].value + '</td>' +
//         '</tr>'
//       );
//       tbody.insertAdjacentHTML('afterbegin', content);      
//     }
//   }