'use strict'; 

function optionsBtn(button) {
'use strict'; 
    var dropdownlist = document.getElementById('dropDownList');	
    var slider = document.getElementById('myRange');			
    var checkboxlist = document.getElementById('checkBoxList');
    var legendcheckbox = document.getElementById('showOveralLegend');
    

    if (button.value === 'submit') {	
        var checkedbox = checkboxlist.querySelectorAll("input[type='checkbox']:checked");
        var checklegend = legendcheckbox.querySelector("input[type='checkbox']:checked").value;        
        var selected = dropdownlist.querySelector("option:checked").value;	
        var slidervalue = slider.value;
       
        var parametters = {
            dropdown: selected,
            transparency: slidervalue,
            showOveralLegend: checklegend,            
            checkboxlist: checkedbox
        };

        

    } else if (button.value === 'reset') {
        $(dropdownlist).prop('selectedIndex', 0);
        $('#checkBoxList input:checked').prop('checked', false);			
        $(slider).first()[0].value = 50;
        $(legendcheckbox).prop('checked', false);				

    } else if (button.value === 'cancel') {
        //todo close form?
    }	
}

