
$(document).ready(function(){


function itemCount (value){
    var items = $('.item').filter(function(i,e){
        var item = $(e).text().trim();
        if(item == value){
            return true;
        }
        else{
            return false;
        }
    });
    return items.length;
};

function updateCart (){
    if(itemCount('vegie') > itemCount('fruit')){
        $('.fa-shopping-cart').css('color','green');
    }
    else if (itemCount('vegie') < itemCount('fruit')){
        $('.fa-shopping-cart').css('color','red');
    }
    else{
        $('.fa-shopping-cart').css('color','orange');
    }
};


    $('#button').click(function(){
    	var Add=$('#addItem').val();
        $('#addItem').val(' '); 
    	$('.list').append('<div class="item">'+ '<i class="fa fa-check"></i>' + Add +'<i class="fa fa-times"></i>'+'</div>');
        updateCart();
    });

    $('#addItem').keydown(function(e) {
       if(e.which == 13) {
        $('#button').click();
        return false;
       }
    });

    $(document).on('click','.fa-times',function(){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
            updateCart();
        });
    });

    $(document).on('click','.fa-check', function(){
        $(this).parent().css("text-decoration","line-through");
    }); 

    $(document).on('click','.fa-shopping-cart',function(){
        location.reload();
    });



        

    

    




});