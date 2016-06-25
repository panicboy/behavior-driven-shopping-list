function ShoppingListItem(name, description) {
  this._name = name;
  this._description = description;
  var is_done = false;
  var renderString  = `<li class="completed_is_done">
  <span>_name_</span>
  <span>_description_</span>
</li>`;


  function _check (){
    this.is_done = true;
  }

  function _uncheck (){
    this.is_done = false;
  }

function _render(){
  var itemString = testString.renderString('is_done',is_done);
  itemString = itemString.replace('_name_',this._name);
  itemString = itemString.replace('_description_',this._description);
  return itemString;
}


  return {
  name: this._name,
  description: this._description,
  is_done: is_done,
  check: _check,
  uncheck: _uncheck,
  render: _render
  };
}

// shoppinglistitem.check();
//     shoppinglistitem.is_done.should.be.equal(true);

// 9 tests of ShoppingListItem written & passing