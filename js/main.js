window.onload = function(){
        'use strict';
        
        $('#add-todo').click(function(){
         let text = $('#message').val();
        // let newList = document.createElement('li');
        // newList.innerHTML = '<label><input type="checkbox"/>' +text+ '</label>';
        /*$('#todo').append(' <li><label><input type="checkbox"/>'+text+'</label></li>');*/
        let input = $('<input type="checkbox"/>');
        let label = $('<label/>').text(text).prepend(input);
        let newList = $('<li/>').append(label);
        
        
        // let newList = $('<li><label><input type="checkbox"/>' +text+ '</label></li>');
        $('#todo').append(newList);
        $('#message').val('');
        });
        
        $('#move-finished').click(function(){
         let done = $('#todo input:checked').parent();
        //  console.log(done.parent());
         $('#todo input').prop('checked',false);
         done.parent().remove();
         $('#finished').append(done.parent());
        });
        
        $('#delete').click(function() {
         let deleteItem = $('#finished input:checked').parent();
         deleteItem.parent().remove();
        });
        
        $('#checkall').click(function() {
         if($(this).is(':checked')){
             $('#todo input').prop('checked',true);
         }else{
            $('#todo input').prop('checked',false);  
         }
        });

       };