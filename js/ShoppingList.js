function ShoppingList(){
  this._items = [];
  var shoppingListItemProperties = ["name", "description", "is_done", "check", "uncheck", "render"];
  function _addItem(theItem){
    var itemProperties = Object.getOwnPropertyNames(theItem);
    var propertyMatch = itemProperties.every(function(el, i, a) {
      return shoppingListItemProperties.indexOf(el) >= 0;
      });
    if(propertyMatch) this.items.push(theItem);
  }

  var toClass = {}.toString;

  function _removeItem(theItem){

  }

  return {
    items: this._items,
    addItem: _addItem
  };
}