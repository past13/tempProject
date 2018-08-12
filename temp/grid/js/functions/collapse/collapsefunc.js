function collapseFunctions() {
    this.prepareColumns = function(columns, currentid, currentwidth) {
        list = [];
        for (var element of columns) { 
            var column = {
                columnid: parseInt(element.id.replace(REGPATTERN, '')),
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
                currentDiff = Math.abs(num - array[i].columnid);                
                if (currentDiff < closestDiff) {
                    closest = array[i].columnid;                                                                                 
                }
                else if (currentDiff === 0 && closestDiff === 0) {
                    closest = array[i].columnid;                    
                }
                closestDiff = null;
                currentDiff = null;
            }  
            return closest;
        }
        return false;
    }  
    this.calculateCol = function(list, nearid, id, currwidth, panelnode) {
        
        this.list = list;
        this.id = id;
        this.nearid = nearid;
        this.currwidth = currwidth;

        
        if(panelnode.classList.contains("minimzepanel")) {
            var currentcol = list.filter(x => x.columnid === id);
            for (item in list) {
                if (list[item].gap > 0) { 
                    addWidth(list[item], item);
                }                
            }    
        }    
            for (item in list) { 
                if (list[item].columnid === id) { 
                    list[item].colwidth = 0;
                    list[item].gap = 0;
                }
                if (list[item].columnid === nearid) {
                    list[item].colwidth += currwidth;
                    list[item].gap += currwidth;
                    currwidth = 0;
                }
            } 
        return list;
    }
    this.animateCol = function(index, col) {
        this.col = col;
        this.index = index;
        columnidprefix = '#col' + list[index].columnid; 
        panelid = 'panellabel' + list[index].columnid;         
        columnwidth = list[index].colwidth; 
        $(columnidprefix).animate({            
            width: columnwidth,
            style: minimizeColumn(columnwidth, panelid)
        }, 250) 
    }
    function minimizeColumn(colwidth, currentpanelid) {
        if ( colwidth < MINPANELWIDTH) { 
            document.getElementById(currentpanelid).classList.add('minimzepanel');
          }
          else {      
            document.getElementById(currentpanelid).classList.remove('minimzepanel');
          }   
    }
    //todo minimize buggggg
    function checkGaps(width) {
        if (width > 300 && width !== 300 ) {
            width = Math.abs(300 - width)
        }
        else {
            width = 0;
        }
        return width;
    }
}
