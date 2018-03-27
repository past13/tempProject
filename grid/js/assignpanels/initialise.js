globalvar = {};

function init() {    

    var panelbody1 = document.getElementById('panel1');
    var panelbody2 = document.getElementById('panel2');
    var panelbody3 = document.getElementById('panel3');    
    var panelbody4 = document.getElementById('panel4');
    
    var containerrecipelist = globalvar.containerrecipelist;
    var recipestatistics = globalvar.recipestatistics.statistic;
    var order = globalvar.order;
    var containertype = globalvar.order.containertypelist.containertype;
    var parameters = globalvar.order.parameterlist.parameter;



    //1 panel 
    var attribute = {title: 'statistics', attribute: 'id', attributename: 'tblstatistic'}
    var tablestatistics = createTable(recipestatistics, attribute);
    panelbody1.appendChild(tablestatistics);

    //2 panel

    //3 panel
    //4 panel

  

    create3DMeshes();
    createContainerPreviews();

    visualisationEngine();

}