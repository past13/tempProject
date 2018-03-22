function panelsFunctions () {
    draggedpanel = -1;
    list = [];
    splitters = [];
    currmousex = -1;
    // MINPANELWIDTH = (document.body.clientWidth * 1.22) - document.body.clientWidth;                 
    MINPANELWIDTH = (document.getElementById('visualisation').clientWidth * 1.22) - document.getElementById('visualisation').clientWidth;
    PREFIXCROSS = '#';
    CONTAINER = '#visualisation'; 
    PANELPREFIX = 'panel';

      
    
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