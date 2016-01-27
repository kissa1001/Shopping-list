var Item = function(description){
    this.description = description;
};

<<<<<<< HEAD
Item.prototype.show = function() {
    return '<li><i class="fa fa-check"></i>' + this.description + '<i class="fa fa-times"></i></li>';
};

var ShoppingList = function(selector, button, items, list){
    this.form = $(selector);
    this.button= $(button);
    this.list = $(list);
    this.items = items;
};

ShoppingList.prototype.start = function(){
    this.form.submit(this.formSubmitHandler.bind(this));
    
    this.list.on('click', '.fa-times', {shoppingList: this}, function(){
        //shoppingList.items
        $(this).parent().fadeOut(500);
    });
    
    this.list.on('click', '.fa-check', function(){
        $(this).parent().css("text-decoration","line-through");
    });
    $('.fa-shopping-cart').on('click', {shoppingList: this}, function(){
        ShoppingList['items'].empty();
    });
};

ShoppingList.prototype.addItem =function(item){
    this.items.push(item);
    this.list.append(item.show());
};

ShoppingList.prototype.formSubmitHandler = function(event) {
    event.preventDefault();
    var item = new Item(this.button.val());
    this.button.val('');
    this.addItem(item);
};

$(function(){
    var shoppingList = new ShoppingList('#shopping-cart', '#add', [], '.list');
    shoppingList.start();
});


  
=======
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
>>>>>>> 7fe9f0839ef08de7600345eaf7bb381565786838
