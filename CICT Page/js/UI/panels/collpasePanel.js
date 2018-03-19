
function collapseFunctions() {
  

    this.prepareColumns = function(columns, currentid, currentwidth) { 
        var map1 = columns.map((currElement, index) => {    
            var column = {
                columnid: parseInt(currElement.id.replace(/^\D+/g, '')),
                colwidth : changeColWidth(currentid, currentwidth, currElement, columns)  
            }
            list.push(column);       
        });     
        return list;
    } 
    
    this.getNearestNumber = function(array, id) {
        var num = parseInt(id);        
        var i = 0, closest, closestDiff, currentDiff;
        if (array.length) {
            closest = parseInt(array[0].columnid); 
            for (i;i<array.length;i++) {
                closestDiff = Math.abs(num - closest);                
                currentDiff = Math.abs(num - parseInt(array[i].columnid));
                if (currentDiff < closestDiff) {
                    closest = parseInt(array[i].columnid) - 1;                                                             
                }
                else if (currentDiff === 0 && closestDiff === 0) {
                    closest = parseInt(array[i].columnid) + 1;
                }
                closestDiff = null;
                currentDiff = null;
            }  
            return closest;
        }
        return false;
    } 
    
    this.recapColumns = function(closestcol, list, clickedcol) { 
        this.closestcol = closestcol;        
        this.clickedcol = clickedcol;
        this.list = list;

        var temp;


       

        




        if (clickedcol.colwidth[0] > 0 || clickedcol.colwidth[1] > 0 ) {

            console.log(clickedcol.colwidth)
            
            




        }
        
            // list.map(function(col) {
            //     if (clickedcol.colwidth > 0) {
            //          temp.colwidth[0] += activecol.colwidth[1];   
            //          temp.colwidth[1] += activecol.colwidth[1];
            //          activecol.colwidth[1] = 0;
            //          activecol.colwidth[0] = 0;                
            //     }        
            //  });  

         
        
             return list;        
    }

    function changeColWidth(currentid, currentwidth, node, columns) {         
        this.currentid = currentid;
        this.currentwidth = currentwidth;    
        this.node = node;  
        var newwidth;  
        var gap = 0;
        if (currentid === node.id.replace(REGPATTERN, '')) {                            
            if (currentwidth > 0) {          
                newwidth = 0;
                gap = currentwidth;
            } 
        } else {
            newwidth = currentwidth;
            // gap = 0;
        } 
        return [newwidth, gap];
    }  
}
// function hidePanels() {

//     function recalcColumns(allnodecolumns, currentcolumn, panelid) {       
//         var currentcolid = cleanColumnId(currentcolumn);  
//         var rawcol = recalculateAllColumns(allnodecolumns); 
//         var allcol = rawcol.filter(o => o.columnid != currentcolid); 
//         var currentcolobj = rawcol.filter(o => o.columnid == currentcolid);    
//         var currentcolpanel = currentcolumn.querySelector('h3'); 
//         var closestcolid = getNearestNumber(allcol, currentcolid);
//         var closestcolobj = allcol.filter(o => o.columnid == closestcolid);     
//         calculatewidth(panelid, currentcolobj, closestcolobj); 
//         var result = closestcolobj.concat(currentcolobj);
//         Object.keys(result).forEach(function(key) { 
//           result[key].gapflag = checkGapedCol(result[key].colwidth); 
//         });     
//         var sortedlist = sortList(result, currentcolid); 
//         return [sortedlist, currentcolpanel];
//       }


// function calculateColWidth(columnwidth) { 
//     var splitterwidth = document.getElementById('splitter0').clientWidth;
//     // console.log(document.getElementById('visualisation').childNodes)
//     var withoutsplitters = 4 * splitterwidth;
//     // console.log(withoutsplitters)        
//     if (columnwidth >! MINPANELWIDTH && columnwidth != MINPANELWIDTH) {      
//       columnwidth = Math.abs(MINPANELWIDTH - columnwidth);
//     }    
//     else {
//       columnwidth = columnwidth - MINPANELWIDTH;
//     }      
//     return columnwidth;      
//   }     
