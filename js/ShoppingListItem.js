function ShoppingListItem(name, description) {
  this._name = name;
  this._description = description;
  return {
  name: this._name,
  description: this._description
  };
}

