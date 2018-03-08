function create_orderinfo() {
    var parent = document.getElementById('container');
    var orderinfo = {
        parent : parent,
        tag : 'div', 
        id : 'orderinfo', 
        nodeclass : 'navItem',
  
    }
    var node = create_Node(orderinfo);
    node.assignfunction = 'assignorderinfo';       
    var suborderinfohide = { 
        parent : node,
        name : 'style',
        value : 'display: none'
    }
    create_Attribute(suborderinfohide)
    var orderinfoheader = { 
        parent : node,
        tag : 'h3',
        nodeclass : 'titleSubPage'
    }
    create_Node(orderinfoheader); 
    var orderinfobody = { 
        parent : node,
        tag : 'div',
        nodeclass : 'contentSub'
    }
    create_Node(orderinfobody); 
    node.view = node;
    return node;
}

// function assignorderinfo(node) {
    // console.log(node)
    // var titletext = orderinfo.modules.split(',').map(function(item) {
    //     return item.trim();
    // });  
    // var parent = document.getElementById("container");    
    // var title = node.querySelector('h1'); 

    // title.innerText = 'aaaa';
    // parent.appendChild(node);
// }

// var Exposer = (function() {
//     var privateVariable = 10;  
//     var privateMethod = function(data) {
//     var node = create_orderinfo();   
//     var title = node.querySelector('h1'); 
//     title.innerText = 'aaaa';
    
//       console.log('Inside a private method!');
//       privateVariable++;
//     }
  
//     var methodToExpose = function() {
//       console.log('This is a method I want to expose!');
//     }
  
//     var otherMethodIWantToExpose = function(data) {
//       privateMethod(data);
//     }
  
//     return {
//         first: methodToExpose,
//         second: otherMethodIWantToExpose
//     };
// })();