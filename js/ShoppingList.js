function ShoppingList(){
  this.items = [];

  this.addItem = function(theItem){
    if(!(theItem instanceof ShoppingListItem)) {
      throw Error("not a ShoppingListItem.");
    } else {
      if(this.items.indexOf(theItem) < 0) this.items.push(theItem);

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

  this.render = function() {
    var theList = `<ul>
    `;
    if(this.items.length === 0) return '';
    for (var i = 0; i <= this.items.length - 1; i++) {
      var checkBoxIdSet = (this.items[i].render()).replace("idx", String(i));
      var removeButtonIdSet = checkBoxIdSet.replace('idx2', String(i));
      theList +=`${removeButtonIdSet}
      `;
    }
    return theList + '</ul>';
  };
}

