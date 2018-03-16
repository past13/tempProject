function assignpanel_col0(node) { 
    var title = node.querySelector('h3');   
    var body = node.querySelector('.panelbody');  
    var statistics =  glbObj.recipestatistics.statistic;
    var table = createTable(statistics);     
    title.innerHTML = 'Statistics'; 
    body.appendChild(table);
    return node;
}


