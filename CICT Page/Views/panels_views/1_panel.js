function assignpanel_col0(node, data, index) {
    var title = node.querySelector('h3');
    var body = node.querySelector('#panel' + index);
    var statistics = data.statistics;
    var table = createTable(statistics);     
    title.innerHTML = 'Statistics'; 
    body.appendChild(table); 
}