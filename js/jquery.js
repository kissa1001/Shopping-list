var Item = function(description){
    this.description = description;
};

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
    $('.fa-shopping-cart').on('click', {ShoppingList: this}, function(){
        ShoppingList.list.empty();
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


  
