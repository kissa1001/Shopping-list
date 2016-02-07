
$(document).ready(function(){

var Item = function(description){
    this.description = description;
    this.bought = false;
    this.quantity = 1;
};

Item.prototype.itemCount = function  (value){
        if(this.description == value){
            return true;
        }
        else{
            return false;
        }
    return this.length;
};

Item.prototype.updateCart = function  (){
    if(this.itemCount('vegie') > this.itemCount('fruit')){
        $('.fa-shopping-cart').css('color','green');
    }
    else if (this.itemCount('vegie') < this.itemCount('fruit')){
        $('.fa-shopping-cart').css('color','red');
    }
    else{
        $('.fa-shopping-cart').css('color','orange');
    }
};

Item.prototype.totalBoughtItems = function () {
    total = 0;
    $.each(data, function(index, element) {
        if (item.bought) {
            total += item.quantity;
        }
    });
    return total;
}

var shoppingListItems = function(items,form,list){
    this.form = $(form);
    this.list = $(list);
    this.items = items;
}

shoppingListItems.prototype.updateList = function  (){
    this.list.empty();
        $.each(this.items, function(index, description){
         var template = Handlebars.compile($('#item-template').html());
         this.list.append(template({description:description,index:index}));
    })
};

shoppingListItems.prototype.addItems = function(item){
    var item = new Item($('#addItem').val());
    $('#addItem').val(' ');
    this.list.append(item);
    this.items.push(item);

        $(document).on('click','.fa-times',function(){
        $(this).parent().fadeOut(500, function(){
            var index = $(this).attr('id').substr(5);
            shoppingListItems.splice(index,1);
            updateCart();
            updateList();
        });
    });

    $(document).on('click','.fa-check', function(){
        $(this).parent().css("text-decoration","line-through");
         totalBoughtItems();
        updateList();
    }); 

    $(document).on('click','.fa-shopping-cart',function(){
        shoppingListItems = [];
        updateList();
        updateCart();
    });

    this.updateList();
    updateCart();


}
    
shoppingListItems.prototype.show = function(event){
    this.form.submit(this.addItems.bind(this));
};

var shoppingList = new shoppingListItems( [], '#shopping-cart', '.list');
    shoppingList.show();


});


