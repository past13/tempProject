
function collapseFunctions() {
    draggedpanel = -1;
    panels = [];
    splitters = [];
    currmousex = -1;
    MINPANELWIDTH = 307;           
    PREFIXCROSS = '#';
    CONTAINER = '#visualisation'; 
    list = [];
    gap = 0;
    this.recalculateAllColumns = function(columns, currentid, currentwidth, node) { 
        var map1 = columns.map((currElement, index) => {    
            var column = {
                columnid: currElement.id.replace(/^\D+/g, ''),
                colwidth : changeColWidth(currentid, currentwidth, currElement),
                // gap : collectGap()
                // gapwidth : 1//colwidth = calculateColWidth(currElement.clientWidth)
            }
            list.push(column);       
        });  
        return list;
    } 
    
    this.getNearestNumber = function(array, num) {
        console.log(list)
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

    function changeColWidth(currentid, currentwidth, node) {   
        this.currentid = currentid;
        this.currentwidth = currentwidth;    
        this.node = node;        
        var newwidth;




        if (currentid === node.id.replace(REGPATTERN, '')) {
            collectGap(currentwidth);
            newwidth = 0;  
        } else {
            newwidth = currentwidth;
        }    
        return newwidth;
    }
    function collectGap(currentwidth) {
        if (currentwidth > 0) {
            gap += currentwidth;
        }
        else {
            gap -= currentwidth;
        }
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
