function createVisualisation_view() {

    initialisePanels(); 
    var nodepanels = initialisePanels.create_panels();    

    var engine = new panel_engine();
    engine.addPanel(assignpanel_col0(nodepanels[0]));  
    engine.addPanel(assignpanel_col1(nodepanels[1]));
    engine.addPanel(assignpanel_col2(nodepanels[2]));
    engine.addPanel(assignpanel_col3(nodepanels[3]));    
}



