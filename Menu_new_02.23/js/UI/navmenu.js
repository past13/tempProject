function createNavigationContainer(listofviews) {
    //todo: change main node 
    var containerMain = document.getElementById("navigationContainer");
    var div = document.createElement("div");
    $.each(listofviews, function(key, value) {
        var navnode = createNode(container, "li", value, value, null, null, 'navItem');
        var attribute = createAttribute(navnode); //"onclick", "navMenu(id)"
        var a = createNode(navnode, "a", value, null, "#", value);        
        navnode.appendChild(a);
        container.appendChild(navnode);
    });
    containerMain.appendChild(div)
}



