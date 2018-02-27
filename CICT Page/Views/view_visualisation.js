function create_visualisation() {    
    var container = document.createElement("div");  
    var panels = create_panel();
    container.appendChild(panels);  
    return container;
}

