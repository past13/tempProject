// function isHidden(el) {
//     var style = window.getComputedStyle(el);
//     return (style.display === 'none')
// }
    // if (isHidden(temp)) {
    //     
    // }
    // else {
    //     $( element ).hide();       
    // }
// $('.leftSideBar > div:not([data-id=' + id + '])').hide();
// $('.leftSideBar > div[data-id=' + id + ']').show();
// $('.leftSideBar > div:not([data-id=' + id + '])').hide();
//     // var parent = document.getElementById('container'); 
//     // if (parent === null) {
//     //     parent.innerHTML = '';
//         var createfunction = 'assign' + navid; 
//         var node = window[createfunction](node);  
//         console.log(node)              
//         // if (!parent.hasChildNodes()) {
//         //     parent.appendChild(node);
//         // }
//     // } 
	// $.ajax({
	// 	url: '',
	// 	success: function(data) {				
	// 		xmlobj = XML2jsobj(data.childNodes[0]); 
	// 		this.data = xmlobj;
			
	// 		// this._callback();	
	// 	}
	// 	// error callback display error
	// });	
		// this._callback = callback;
		// $.ajax({
		// 	url: 'recipe.xml',

		// 	success: function(data) {				
		// 		var xmlobj = XML2jsobj(data.childNodes[0]); 
		// 		this.data = xmlobj;
		// 		console.log(xmlobj)
		// 		this._callback();	
		// 	}
		// 	// error callback display error
		// });	
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
//function assignContent(item, callback) {  
// if (node.assignfunction === 'assignMenu' && typeof assignMenu === 'function'){               
//     assignMenu(node);
// }
// if (node.assignfunction === 'assignOrderInfo' && typeof assignMenu === 'function'){               
//     assignOrderInfo(node);
// }
// window[functionname]();   
// else if (node.className === 'panelContainer'){        
//     assignPanels(node);
// }    
//}
// function createbutton(viewdiv) {
//     // todo: create button here
//     button = ....;
//     button.view = viewdiv;
//     button.onclick = buttonclick(button);
//   }  
//   function buttonclick(button) {
//     for each b in buttonlist 
//     if b== button b.highlight;
//     else b.donthighlight;    
//     for each v in viewlist {
//       if v = button.view v.show();
//       else v.hide();
//     }
//   }
// function filterKeys(obj, func) {
//     return Array.prototype.filter.call(Object.keys(obj), func, obj);
// }
// function someKeys(obj, func) {
//     return Array.prototype.some.call(Object.keys(obj), func, obj);
// }
// function atLeastOnePropertyMatches(obj, requiredProp) {
//     return someKeys(obj, function (prop) {
//         if (requiredProp.hasOwnProperty(prop)) {
//             return this[prop] === requiredProp[prop];
//         }
//     });
// }
// function getMatchingKeys(obj, data) {
//    console.log('hit')
// //    console.log(obj)
// //    console.log(data)   
// //     return filterKeys(obj, function (prop) {
// //         return atLeastOnePropertyMatches(this[prop], required);
// //     });
// }

// function mapValues(titlelist, columns, dataforpanels) {   
    // var array = Array.prototype.slice.call(columns);
    // var results = getMatchingKeys(array, dataforpanels);    
    // titlelist.map(function( item,  index) { 
    //     var parent = document.getElementById(array[index].id);    
    // [1,2,3,4].filter(function (value) {return value % 2 === 0});
    // [1,2,3,4].filter(value => value % 2 === 0);
    // var titlenode = parent.querySelector('h3');
    // titlenode.innerHTML = titlelist[index][0];  
    // });
// }

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