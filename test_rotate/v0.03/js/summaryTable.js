function createTable(heading, data, div) {   
    "use strict";      
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);   
    var tr = document.createElement('tr');
    tableBody.appendChild(tr);
    for (var i = 0; i < heading.length; i++) {
        var th = document.createElement('th')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }
    for (var i = 0; i < data.length; i++) {
        var productcode = document.createElement('td');
        var amount = document.createElement('td');
        var current = document.createElement('td');           
        var tr = document.createElement('tr');      
        productcode.appendChild(document.createTextNode(data[i].productcode));
        amount.appendChild(document.createTextNode(data[i].amount));
        current.appendChild(document.createTextNode(data[i].current));        
        tr.appendChild(productcode);
        tr.appendChild(amount);
        tr.appendChild(current);        
        tableBody.appendChild(tr);
    }  
    div.appendChild(table);    
    return table;
}
function countAllproducts(container, mainList) {
    "use strict";
    var list = container.containercontentlist.containercontentitem;
    var amount;
    var productcode;  
    var current;
    list.forEach(element => {       
            var product = {          
                productcode : element.productcode,
                amount : Number(element.amount),
                current : 0
            }        
            mainList.push(product);  
    });    
    return mainList;
}
function mergeLists(list, current) {  
    if (current !== undefined) {
        list.forEach(function (element, index) {
            current.forEach(c => {
                if (element.productcode === c.productcode) {               
                    list[index].current = c.amount;
                }               
            });        
        });  
    }    
    return list;
}
function overalTable(glbobj) {
    "use strict";
    var amount;
    var productcode;
    var type;
    var packagingtype; 
    var mainList = [];
    var clickedpallet = true;

    var allcontainers = glbobj[1].containerrecipelist.containerrecipe;    

    for (var c in allcontainers) {
        countAllproducts(allcontainers[c], mainList);        
    }
    var currentpalletarray = [];     
    if (clickedpallet) {      
        var currentpalletdata = countAllproducts(allcontainers[1], currentpalletarray); //todo pass current clicked model now hardcoded allcontainers[2]
    }
    var preparedlist = mergeLists(mainList, currentpalletdata);   
    // var div = document.getElementById('showTable');
    var data = new Array();
    var heading = new Array();  
    heading[0] = "Product code";
    heading[1] = "Amount";
    heading[2] = "This carrier";
    // var table = createTable(heading, preparedlist, div);  
}