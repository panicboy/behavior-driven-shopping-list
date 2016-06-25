function ShoppingListItem(name, description) {
  this._name = name;
  this._description = description;
  var is_done = false;

  function _check (){
    is_done = true;
  }

  function _unheck (){
    is_done = false;
  }

  return {
  name: this._name,
  description: this._description,
  is_done: is_done,
  check: _check,
  // uncheck: _uncheck
  };
}

