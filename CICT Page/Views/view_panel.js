draggedpanel = -1;
CONTAINER = '#container'; 
PREFIXCROSS = '#';

function create_panel() {   
    var tag = 'div';
    var parent = document.createElement("div");  
    parent.classList.add("panelContainer");
    // var parent = document.getElementById('container')
       
    var panellist = [];
    var list = titleslist.listofcolumns;
    for (item in list) {   
        var panel = panel_View(list[item], item, parent, tag);
        panellist.push(panel)        
    }
    return panellist[0];
}
function panel_View(title, index, parent, tag) {
    var tag1 = 'h3';  
    var createSplitter = create_Node(parent, tag, 'splitter' + index, null, '', 'resizer first');
    var createCol = create_Node(parent, tag, 'col' + index, null, null, 'col'); 
    createCol.button = panel_Button(createCol);
    var node = create_Node(createCol, tag1, 'panel' + index, null, '', '');      
    return parent;
}

function panel_Button(viewdiv) {
    // todo: create button here
    button = {};
    button.view = viewdiv;
    button.onclick = buttonclick(button);
    return button;
  }
  
  function buttonclick(button) {
  return 1;
    // for each b in buttonlist 
    // if b== button b.highlight;
    // else b.donthighlight;
    
    // for each v in viewlist {
    //   if v = button.view v.show();
    //   else v.hide();
    // }
  }


function dragg_Panels() {
    panels = $(CONTAINER).children().not(".resizer"); 
    splitters = $(CONTAINER).children().not(".col").toArray();  
    
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

function cleanColumnId (currentcolumn) {
    var id;
    if (typeof currentcolumn === "number") {id = currentcolumn;} 
    else {id = Number(currentcolumn.id.replace(/^\D+/g, ''));}    
    return id;
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
    // for (var item in newarray) {
    //   minimizeColumn(newarray[item].clientWidth, newarray[item].children[0].id); 
    // }
    leftpanel.width(newwidthleft);
    rightpanel.width(newwidthright);
  }


