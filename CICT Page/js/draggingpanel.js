var splitters = [];
CONTAINER = '#visualisation'; 
draggedpanel = -1;
panels = [];
currmousex = -1;
MINPANELWIDTH = 307;    
PREFIXCOL = '#col';  
PREFIXPANEL = 'panel';  
PREFIXCROSS = '#';

function draggpanel(data) {

    panels = $('#visualisation').children().not(".resizer");    
    console.log(panels)

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
        var leftpanel = panels[draggedpanel];
        var rightpanel = panels[draggedpanel + 1];
        // handledrag_new(deltax, draggedpanel, $(leftpanel), $(rightpanel));
    }
    currmousex = mousex;
    });   
} 

