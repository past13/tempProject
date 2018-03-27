
function collapseFunctions() {
       
    this.animateColumns = function(list) { 
        var temp = list.forEach(ShowResults);       
    }    
    this.prepareColumns = function(columns, currentid, currentwidth) {
        list = [];
        for (var element of columns) { 
            var column = {
                columnid: parseInt(element.id.replace(/^\D+/g, '')),
                colwidth : element.clientWidth,
                gap : checkGaps(element.clientWidth)
            }
            list.push(column);       
        };     
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
                    closest = parseInt(array[i].columnid);                                                             
                }
                else if (currentDiff === 0 && closestDiff === 0) {
                    closest = parseInt(array[i].columnid);
                }
                closestDiff = null;
                currentDiff = null;
            }  
            return closest;
        }
        return false;
    }  

    function clearCol(id) {
        list.filter(x => x.columnid === id)[0].colwidth[0] = 0;
        list.filter(x => x.columnid === id)[0].colwidth[1] = 0;
    }

    function checkGaps(width) {
        if (width > MINPANELWIDTH && width !== MINPANELWIDTH ) {
            width = Math.abs(MINPANELWIDTH - width)
        }
        else {
            width = 0;
        }
        return width;
    } 
 
    function ShowResults(value, index, ar) {  
        colid = '#col' + ar[index].columnid;             
       $(colid).animate({            
            width: list[index].colwidth[0],
            // style: minimizeColumn(columnwidth, columnid)
        }, 500);  
    }
}



