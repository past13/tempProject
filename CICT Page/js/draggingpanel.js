function draggpanel(data) {

    panels = $(CONTAINER); //.children().not(".resizer");    
    panels.find('');
    


    console.log(panels)
    splitters = $(CONTAINER).children().not(".col").toArray();
    console.log($(CONTAINER))  
    Object.keys(splitters).forEach(function(key) {        
    var splitterid = PREFIXCROSS + splitters[key].id;
    var currentsplitterid = splitters[key];        
    var cleanid = cleanColumnId(currentsplitterid);
    $(splitterid).on("mousedown", function(e){
        draggedpanel = cleanid - 1;
        return false;
    });
    });

    $(CONTAINER).on("mouseup", function(e){ 
    draggedpanel = -1;
    });

    $(CONTAINER).on("mousemove", function (e){   
    
    var mousex = e.pageX;
    if (draggedpanel != -1) {
        parentOffset = $(this).offset();
        var deltax =  mousex - currmousex;             
        var leftpanel = panels[draggedpanel];
        var rightpanel = panels[draggedpanel + 1];
        handledrag_new(deltax, draggedpanel, $(leftpanel), $(rightpanel));
    }
    currmousex = mousex;
    });   
} 

