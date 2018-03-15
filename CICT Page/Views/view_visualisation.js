function createVisualisation_view() {

    initialisePanels(); 
    var nodepanels = initialisePanels.create_panels();    

    panel_engine();
    panel_engine.addPanel(assignpanel_col0(nodepanels[0]));
    panel_engine.addPanel(assignpanel_col1(nodepanels[1]));
    panel_engine.addPanel(assignpanel_col2(nodepanels[2]));
    panel_engine.addPanel(assignpanel_col3(nodepanels[3]));

    // var panellist = panel_engine.panels;
    var panellist = panel_engine.addPanel();
}



