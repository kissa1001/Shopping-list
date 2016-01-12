$(document).ready(function(){
    $('#button').click(function(){
    	var Add=$('input[name=textarea]').val(); 
    	$('.list').append('<div class="item">' + Add + '</div>');
    });
    $(document).on('click','.item',function(){
        $(this).fadeOut(500);
    });
});