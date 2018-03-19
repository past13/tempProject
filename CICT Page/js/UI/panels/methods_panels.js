//todo:  
//https://code.tutsplus.com/tutorials/quick-tip-create-a-click-and-drag-function-with-javascript--net-493
function panelsFunctions () {

    this.collapse = function(columnlist, node, id) {
       this.columnlist = columnlist;
       this.node = node;
       this.id = id;

       var methods = new collapseFunctions();       
        currentcolwidth = node.clientWidth;  

        var rawcol = methods.prepareColumns(columnlist, id, currentcolwidth, node);
        var closestcolid = methods.getNearestNumber(rawcol, id);

        var clickedcol = rawcol.find(x => x.columnid === parseInt(id));
        var closestcol = rawcol.find(x => x.columnid === closestcolid);
        


        var result = methods.recapColumns(closestcol, rawcol, clickedcol);
        
        // Animate(result);

        

        
        




    //    var currentcolpanel = currentcolumn.querySelector('h3'); 
    //    var closestcolobj = allcol.filter(o => o.columnid == closestcolid);     
    //    calculatewidth(panelid, currentcolobj, closestcolobj); 
    //    var result = closestcolobj.concat(currentcolobj);
    //    Object.keys(result).forEach(function(key) { 
    //      result[key].gapflag = checkGapedCol(result[key].colwidth); 
    //    });     
    //    var sortedlist = sortList(result, currentcolid); 
    //    return [sortedlist, currentcolpanel];


        return columnlist;
    };

    function Animate (list) {
        this.list = list;
        console.log(list)
        Object.keys(list[0]).forEach(function(key) { 
            columnidprefix = '#' + list[0][key].columnid;
            columnwidth = list[0][key].colwidth;
            columnid = '#' + list[0][key].columnid; 
            $(columnidprefix).animate({            
              width: columnwidth,
            //   style: minimizeColumn(columnwidth, columnid)
            }, 500)     
          });    
    }


    this.draggpanel = function(node) {    
        draggedpanel = -1;
        panels = [];
        splitters = [];
        currmousex = -1;
        MINPANELWIDTH = 307;           
        PREFIXCROSS = '#';
        CONTAINER = '#visualisation'; 
    
        function cleanColumnId (currentcolumn) {
            var id;
            if (typeof currentcolumn === "number") {id = currentcolumn;} 
            else {id = Number(currentcolumn.id.replace(REGPATTERN, ''));} 
            return id;
        }
        function minimizeColumn(colwidth, currentpanelid) {  
            if ( colwidth < MINPANELWIDTH) { 
              document.getElementById(currentpanelid).classList.add('minimzepanel');
            }
            else {      
              document.getElementById(currentpanelid).classList.remove('minimzepanel');
            }   
          }
    
        function handledrag_new(deltax, leftpanelindex, leftpanel, rightpanel) {        
            var totalwidth = leftpanel.width() + rightpanel.width();
            var newwidthleft = leftpanel.width() + deltax;
            var newwidthright = rightpanel.width() - deltax;  
            leftpanelid = leftpanel[0].firstElementChild.id;
            rightpanelid = rightpanel[0].firstElementChild.id;
            if ((newwidthleft < 0) || (newwidthright < 0)) {
              if (deltax > 0) {
                newwidthright = 0;
                newwidthleft = totalwidth;
              }
              else {
                newwidthleft = 0;
                newwidthright = totalwidth;
              }
            }
            var rightarray = leftpanel.toArray();
            var lefttarray = rightpanel.toArray();
            var newarray = rightarray.concat(lefttarray);
            for (var item in newarray) {
              minimizeColumn(newarray[item].clientWidth, newarray[item].children[0].id); 
            }
            leftpanel.width(newwidthleft);
            rightpanel.width(newwidthright);
        }
        panels = $('#visualisation').children().not(".splitter");  
        splitters = $('#visualisation').children().not(".col").toArray();
    
        Object.keys(splitters).forEach(function(key) {        
        var splitterid = PREFIXCROSS + splitters[key].id;
        
        var currentsplitterid = splitters[key];        
        var cleanid = cleanColumnId(currentsplitterid);
            $(splitterid).on("mousedown", function(e){
                draggedpanel = cleanid - 1;
                return false;
            });
        });    
    
        $('#visualisation').on("mouseup", function(e){ 
            draggedpanel = -1;
        });
    
        $('#visualisation').on("mousemove", function (e){   
        
        var mousex = e.pageX;
        if (draggedpanel != -1) {
            parentOffset = $(this).offset();
            var deltax =  mousex - currmousex;     
            var leftpanel = panels[draggedpanel - 1];            
            var rightpanel = panels[draggedpanel];  
              
            handledrag_new(deltax, draggedpanel, $(leftpanel), $(rightpanel));
        }
        currmousex = mousex;
        }); 
    } 
}





