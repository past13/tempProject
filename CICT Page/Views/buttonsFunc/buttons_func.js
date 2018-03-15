function hideNode(value, elementname) {
    if (value.id !== elementname) {
        var full = '#' + value.id;
        $(full).hide();
    }  
}
function navBtnClicked(element) {
    var query = '.navItem:not([style="display: none"])';
    var elementname = element.replace("#", "");
    if (document.querySelector(query) !== null) {
        var visible = document.querySelectorAll(query); 
        if (visible.id === elementname) {       
            $(element).show();   
        }
        else {            
            $(element).show();
            for( i=0; i < visible.length; i++){            
                hideNode(visible[i], elementname);
            }          
        }       
    }
    else {      
        $(element).show(); 
    }    
}


function sortList(objlist, id) {  
    var currentid = id; 
    var nearestcol = getNearestNumber(objlist, currentid);      
     objlist.sort(function (a, b) {
      var position = 0; 
      if (a.columnid == nearestcol) {
        position = position;
      }
      if (b.columnid == nearestcol) {
        position = position + 1;
      }      
    return position;
    });     
    return objlist;
  }
function checkGapedCol(columnwidth) {      
    var gap = 0;
    switch (true) {
    case columnwidth > MINPANELWIDTH:      
      gap = 1;
      break;
    case columnwidth < MINPANELWIDTH:         
      gap = -1;
      break;    
    case columnwidth === MINPANELWIDTH: 
      gap = 0;
      break;
    }  
    return gap;    
  }


  MINPANELWIDTH = 307;  
  PREFIXCOL = '#col';  
  PREFIXPANEL = 'panel'; 

  function animate(list, currentcolumn) {  
    console.log('3')
    

    Object.keys(list[0]).forEach(function(key) { 
      columnidprefix = PREFIXCOL + list[0][key].columnid;
      columnwidth = list[0][key].colwidth;
      columnid = PREFIXPANEL + list[0][key].columnid; 
      $(columnidprefix).animate({            
        width: columnwidth,
        style: minimizeColumn(columnwidth, columnid)
      }, 500)     
    });    
  }
  function minimizeColumn(colwidth, currentpanelid) {  
    console.log('4')
    
    if ( colwidth < MINPANELWIDTH) { 
      document.getElementById(currentpanelid).classList.add('minimzepanel');
    }
    else {      
      document.getElementById(currentpanelid).classList.remove('minimzepanel');
    }   
  } 
function calculatewidth(panelid, current, close) {
    console.log('5')
    
    if (!document.getElementById(panelid).classList.contains('minimzepanel')) {
      close[0].colwidth += current[0].colwidth;
      current[0].gapwidth = 0;
      current[0].gapflag = 0;      
      current[0].colwidth = 0;  
    }
    else {
      current[0].colwidth += close[0].colwidth;
      close[0].gapwidth = 0;
      close[0].gapflag = 0;      
      close[0].colwidth = 0; 
    }
  }
function getNearestNumber(array, num) {   
    var i = 0, closest, closestDiff, currentDiff;
    if (array.length) {
        closest = array[0].columnid;        
        for (i;i<array.length;i++) {
            closestDiff = Math.abs(num - closest);
            currentDiff = Math.abs(num - array[i].columnid);
            if (currentDiff < closestDiff) {
                closest = array[i].columnid;   
            }
            closestDiff = null;
            currentDiff = null;
        }  
        return closest;
    }
    return false;
  }  
function calculateColWidth(columnwidth) {  
    if (columnwidth >! MINPANELWIDTH && columnwidth != MINPANELWIDTH) {      
      columnwidth = Math.abs(MINPANELWIDTH - columnwidth);
    }    
    else {
      columnwidth = columnwidth - MINPANELWIDTH;
    }      
    return columnwidth;      
  } 
function recalculateAllColumns(columns) {
    console.log('3')
     
     var list = [];
     var index = 0;
     for (var columnnode of columns) {
     var width = columnnode.clientWidth;
       var column = {
         columnid: Number(columnnode.id.replace(/^\D+/g, '')),
         colwidth : gapwidth = width,
         gapwidth : colwidth = calculateColWidth(width),
       }
       list.push(column)
     }     
     return list;
   } 
function cleanColumnId (currentcolumn) {
    var id;
    if (typeof currentcolumn === "number") {id = currentcolumn;} 
    else {id = Number(currentcolumn.id.replace(/^\D+/g, ''));}        
    return id;
  }
function recalcColumns(allnodecolumns, currentcolumn, panelid) {    
    console.log('2')

    var currentcolid = cleanColumnId(currentcolumn);  
    var rawcol = recalculateAllColumns(allnodecolumns); 
    var allcol = rawcol.filter(o => o.columnid != currentcolid); 
    var currentcolobj = rawcol.filter(o => o.columnid == currentcolid);    
    var currentcolpanel = currentcolumn.querySelector('h3'); 
    var closestcolid = getNearestNumber(allcol, currentcolid);
    var closestcolobj = allcol.filter(o => o.columnid == closestcolid);     
    calculatewidth(panelid, currentcolobj, closestcolobj); 
    var result = closestcolobj.concat(currentcolobj);
    Object.keys(result).forEach(function(key) { 
      result[key].gapflag = checkGapedCol(result[key].colwidth); 
    });     
    var sortedlist = sortList(result, currentcolid); 
    return [sortedlist, currentcolpanel];
  }

  $(function() {
    $("h2").click(function() {
      $(this).nextAll().each(function() {
        if (this.tagName == 'H2') {
          return false; // stop execution
        }
        $(this).toggleClass("highlighted");
      });
    });
  });


















    // var vis = $(parentcol)[0].offsetWidth;

    // $(parentcol).click(function() {
    //   var parenttest = $(this)[0].offsetWidth;
    //   $(this).nextAll().each(function() {
    //     var result = $(this).hasClass( "col" ); 
    //     var nextcolwidth = $(this)[0].offsetWidth;
    //     console.log('parenttest' + parenttest)
    //     console.log('result' + result)
    //     console.log('nextcolwidth' + nextcolwidth)
    //     if (nextcolwidth >  290) {         
    //     }
    //     else {
    //     }        
    //     if (this.tagName == 'H2') {
    //       return false; // stop execution   
    //     }
    //     // $(this).toggleClass("highlighted");
    //   });
    // });
    // var test1 = $(tempas).next().next();//.find("div.col").next("div").css({"color": "blue", "border": "2px solid red"});

    // var test = $(tempas).nextUntil(".col").css({"color": "red", "border": "2px solid red"});
    
    // var preparedlist = recalcColumns(allcolarray, parent, panelnode.id);  
    // animate(preparedlist, parent);
// }