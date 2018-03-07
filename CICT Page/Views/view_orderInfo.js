function create_orderinfo() {   
    var node = create_Node('', 'div', '', null, null, 'containerorderinfo'); 
    var header = create_Node(node, 'h1', 'asxxx', null, null, 'titleSubPage'); 
    var body = create_Node(node, 'div', 'aaaax', null, null, 'contentSub'); 
    var style = create_Attribute(node, 'style', 'display: none')
    node.assignfunction = 'assignorderinfo';
    node.view = node;    
    return node;
}

function assignorderinfo(node) {
    console.log(node)
    var titletext = orderinfo.modules.split(',').map(function(item) {
        return item.trim();
    });  
    var parent = document.getElementById("container");    
    var title = node.querySelector('h1'); 

    title.innerText = 'aaaa';
    parent.appendChild(node);
}

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
//   })();