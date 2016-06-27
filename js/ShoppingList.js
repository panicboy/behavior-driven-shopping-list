function ShoppingList(){
  this.items = [];

  this.addItem = function(theItem){
    if(!(theItem instanceof ShoppingListItem)) {
      throw Error("not a ShoppingListItem.");
    } else {
      this.items.push(theItem);
    }
  };

  this.removeItem = function(theItem){
    if(arguments.length === 0 && this._items.length > 0) return this._items.pop();
    if(!(theItem instanceof ShoppingListItem)) {
      throw Error("not a ShoppingListItem.");
    } else {
      var itemIndex = this.items.indexOf(theItem);
      if(itemIndex >= 0) return this.items.splice(itemIndex,1);
    }
  };

}

