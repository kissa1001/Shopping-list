var Item = function(description){
    this.description = description;
    this.bought = false;
    this.quantity = 1;
    this.template = $('#item-template').html();
    this.render = Handlebars.compile(this.template);
};

Item.prototype.itemCount = function(value) {
    if(this.description == value){
        return true;
    }
    else{
        return false;
    }
    return this.length;
};

var ShoppingList = function(items, form, list) {
    this.form = $(form);
    this.list = $(list);
    this.items = items;
    this.veggies = ['lettuce', 'tomato', 'cucumber', 'cabbage', 'potato'];
    this.fruits = ['apple', 'orange', 'banana', 'strawberry', 'lemon', 'grape', 'watermelon'];
};

ShoppingList.prototype.restart = function () {
    this.items = [];
    this.update();
};

ShoppingList.prototype.onItemRemove = function(event){
    $(this).parent().fadeOut(500, function(){
        var description = $(this).find('.item-description').text();
        this.items = _.reject(this.items, function(item) { return item.description ==  description; });
    });
    this.update();
};

ShoppingList.prototype.onItemCheck = function(event){
    event.preventDefault();
    $(this).parent().css("text-decoration","line-through");
    this.update();
}

ShoppingList.prototype.show = function(){
    // Set up form submit listener.
    this.form.submit(this.onFormSubmit.bind(this));
    // Set up shopping list restart listener.
    this.list.on('click', '.fa-shopping-cart', this.restart.bind(this));
    // Set up item removal listener.
    this.list.on('click','.fa-times', this.onItemRemove);
    // Set up item buying listener.
    this.list.on('click', '.fa-check', this.onItemCheck);
};

ShoppingList.prototype.onFormSubmit = function(event){
    var formInput = $('#addItem').val().trim();
    if (formInput.length > 0) {
        this.addItem(new Item(formInput));
        $('#addItem').val(' ');
    }
    event.preventDefault();
};

ShoppingList.prototype.addItem = function(item) {
    this.items.push(item);
    this.update();
};

ShoppingList.prototype.updateCart = function() {
    var counter = _.countBy(this.items, function(item){
        if (_.contains(this.veggies, item.description)) {
           return 'veggie';
       } else if (_.contains(this.fruits, item.description)) {
        return 'fruit';
    } else {
       return 'other';
   }
}, this);

    var veggieCount = counter.veggie || 0;
    var fruitCount = counter.fruit || 0;

    if (veggieCount > fruitCount){
        $('.fa-shopping-cart').css('color','green');
    }
    else if (fruitCount > veggieCount){
        $('.fa-shopping-cart').css('color','red');
    }
    else {
        $('.fa-shopping-cart').css('color','orange');
    }
};

ShoppingList.prototype.updateList = function  (){
    this.list.empty();
    var rendered = $.map(this.items, function(item, index) {
        return item.render({item: item, index: index});
    });
    this.list.append(rendered);
};

ShoppingList.prototype.update = function() {
    this.updateList();
    this.updateCart();
};

$(document).ready(function(){
    var shoppingList = new ShoppingList([], '#shopping-cart', '.list');
    shoppingList.show();
});

