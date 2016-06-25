function ShoppingListItem(name, description) {
  this._name = name;
  this._description = description;
  var is_done = false;

  function _check (){
    this.is_done = true;
  }

  function _uncheck (){
    this.is_done = false;
  }

  return {
  name: this._name,
  description: this._description,
  is_done: is_done,
  check: _check,
  uncheck: _uncheck
  };
}

// shoppinglistitem.check();
//     shoppinglistitem.is_done.should.be.equal(true);