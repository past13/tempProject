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
        var tr = document.createElement('tr');
        for (var j = 0; j < data[i].length; j++) {
            var td = document.createElement('td')
            td.appendChild(document.createTextNode(data[i][j]));
            tr.appendChild(td)
        }
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
    list.forEach(element => {
        var product = [          
            productcode = element.productcode,
            amount = Number(element.amount)
        ]        
        mainList.push(product);      
    });    
    return mainList;
}

function calculateProducts(list) {
    "use strict";
    var sum = {},newList;
    for (var i=0,c;c=list[i];++i) {
        if ( undefined === sum[c[0]] ) {        
           sum[c[0]] = c;
        }
        else {
            sum[c[0]][1] += c[1];
        }
    }
    newList = Object.keys(sum).map(function(val) { return sum[val]});
    newList.sort(function(a, b){
        if(a[0] < b[0]) return -1;
        if(a[0] > b[0]) return 1;
        return 0;
    });
    return newList;
}

function mergeLists(list, current) {   


    var intersection = list.filter(function(e) {
        return current.indexOf(e) > -1;
    });

    

    var resulttaas = list.filter(p => p[0] === current[0][0])


  
    // var test = list.map(function (l) {
    //     var currentpallet = current.filter(function (curr) {
    //         console.log(l)

    //     })
        
    // });
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
    if (clickedpallet) {
        var currentpalletarray = [];
        var currentpalletdata = countAllproducts(glbobj[0], currentpalletarray); 
    }
    var preparedlist = calculateProducts(mainList);     
    mergeLists(preparedlist, currentpalletdata);   
    var div = document.getElementById('showTable');
    var data = new Array();
    var heading = new Array();  
    heading[0] = "Product code";
    heading[1] = "Amount";
    heading[2] = "This carrier";
    var table = createTable(heading, preparedlist, div);  
    
}