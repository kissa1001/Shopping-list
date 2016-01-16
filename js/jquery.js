
$(document).ready(function(){

    $('#button').click(function(){
    	var Add=$('input[name=textarea]').val();
        $('input[name=textarea]').val(' '); 
    	$('.list').append('<div class="item">'+ '<i class="fa fa-check"></i>' + Add +'<i class="fa fa-times"></i>'+'</div>');
    });

    $('input[name=textarea]').keydown(function(e) {
       if(e.which == 13) {
        $('#button').click();
        return false;
       }
    });

    $(document).on('click','.fa-times',function(){
        $(this).parent().fadeOut(500);
    });

    $(document).on('click','.fa-check', function(){
        $(this).parent().css("text-decoration","line-through");
    }); 

    $(document).on('click','.fa-shopping-cart',function(){
        location.reload();
    });
});