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

  it(`should be a Class definition`, function() {
    ShoppingListItem.should.be.a.function;
  });

  it('should return an object literal when invoked', function () {
    (ShoppingListItem()).should.be.an('object');
  });

  it(`should have a property 'name'`, function() {
    shoppinglistitem.name.should.be.equal('Fish');
  });

  it(`should have a property 'description'`, function() {
    shoppinglistitem.description.should.be.equal('A lovely but dangerous goldfish.');
  });

  it(`should have a property 'is_done'`, function() {
    shoppinglistitem.is_done.should.be.equal(false);
  });

  // describe('Shopping List Item methods', function() {
  //   describe('#check', function() {

  //   }
  // });

  //   //end of shoppingListItem method tests
  // });

//end of shoppingListItem tests
});
  //ShoppingListItem has a constructor method that accepts 2 arguments, `name` and `description`
    //the constructor method sets the new instances `name` and `description` properties using the arguments passed in