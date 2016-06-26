function ShoppingList(){
  this._items = [];

  function _addItem(theItem){
    if(!isShoppingListItem(theItem)) {
      throw Error("not a ShoppingListItem.");
    } else {
      this.items.push(theItem);
    }
  }

  function isShoppingListItem(theItem){
    var itemProperties = Object.getOwnPropertyNames(theItem);
    var propertyMatch = true;
    var testProperties = [ 'name', 'description', 'is_done', 'check', 'uncheck', 'render' ];
    for (var i = 0; i <= testProperties.length - 1; i++) {
      if(testProperties[i] != itemProperties[i]) propertyMatch = false;
    }
    return propertyMatch;
  }


  function _removeItem(theItem){

  }

  return {
    items: this._items,
    addItem: _addItem
  };
}

