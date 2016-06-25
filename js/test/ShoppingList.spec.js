// var chai = require('chai');
chai.should();

// var ShoppingList = require('../ShoppingList.js');
// var ShoppingListItem = require('../ShoppingListItem.js');


// ShoppingListItem
describe('ShoppingListItem', function(){

  var shoppinglistitem;

  beforeEach(function() {
    shoppinglistitem = new ShoppingListItem('Fish','A lovely but dangerous goldfish.');
  });

  it('should be a Class definition', function() {
    ShoppingListItem.should.be.a.function;
  });

  it('should have a property name', function() {
    shoppinglistitem.name.should.be.equal('Fish');
  });

  it('should have a property description', function() {
    shoppinglistitem.description.should.be.equal('A lovely but dangerous goldfish.');
  });

});
  //ShoppingListItem has a property named `name`
  //ShoppingListItem has a property named `description`
  //ShoppingListItem has a property named `is_done`
  //ShoppingListItem has a constructor method that accepts 2 arguments, `name` and `description`
    //the constructor method sets the new instances `name` and `description` properties using the arguments passed in