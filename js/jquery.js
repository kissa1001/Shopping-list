
$(function(){

    $('#shopping-cart').submit(function(event){
        event.preventDefault();
        addItem();
    });

    $('#addItem').click(function(){  
        addItem();
    });

    var addItem = function(){
        var item = $('#add').val();
        $('#add').val(' ');

        $('ul.list').append('<li><i class="fa fa-check"></i>' + item + '<i class="fa fa-times"></i></li>');

        $('.fa-times').on('click',function(){
            $(this).parent().fadeOut(500);
        });

        $('.fa-check').on('click', function(){
            $(this).parent().css("text-decoration","line-through");
        }); 

        $('.fa-shopping-cart').on('click',function(){
            location.reload();
        });
    };

});
    

    


  
