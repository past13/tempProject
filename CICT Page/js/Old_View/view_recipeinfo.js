
function createview_orderinfo(statistic) {
    var div = document.createElement("div");
    $.each(statistic, function(key, value) {   
        var id = 'statistic' + key;  
        var navnode = createNode(div, "div", value, id, null, value.name, 'overalstatistics');       
        var span = createNode(navnode, "span", value, null, null, value.value, 'statistictitle');        
        navnode.appendChild(span);
        div.appendChild(navnode);        
    });   

    // // fill in viewdiv
    // viewdiv.menucaption = "Recipe statistcs";

    
    return div;
};


// function showOverallStatistics(id, stats) {
//     if (id !== null) {
//       var list = document.getElementById("statistictotal");
//       while (list.firstChild) {
//         list.removeChild(list.firstChild);
//       }  
//     }  
//     $('<div id="statistictotal"></div>').appendTo("#col1");  
//     $.each(stats, function (index, value) {
//       $('<div class="overalstatistics" id="' + 'statistic' + index +  '">' + stats[index].name + '</div>').appendTo("#statistictotal");
//       $('<span class="statistictitle">' + stats[index].value + '</span>').appendTo("#statistic" + index);
//     });  
//   }