
$(document).ready(function(){

    var countVegie= 0;
    var countFruit= 0;
    
    $('#button').click(function(){
    	var Add=$('#addItem').val();
        $('#addItem').val(' '); 
    	$('.list').append('<div class="item">'+ '<i class="fa fa-check"></i>' + Add +'<i class="fa fa-times"></i>'+'</div>');

            
        if(Add.match('fruit')) {
            countFruit ++ ;
        }
        else if(Add.match('vegie')){
            countVegie ++;
        }

        if(countVegie > countFruit){
            $('.fa-shopping-cart').css('color','green');
        }
        else if(countVegie < countFruit){
            $('.fa-shopping-cart').css('color','red');
        }
        else if(countVegie = countFruit) {
            $('.fa-shopping-cart').css('color','orange');
        }
        
    });

    $('#addItem').keydown(function(e) {
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