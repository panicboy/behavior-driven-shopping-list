// var chai = require('chai');
chai.should();

// var ShoppingList = require('../ShoppingList.js');
// var ShoppingListItem = require('../ShoppingListItem.js');


// ShoppingListItem
describe('ShoppingListItem', function(){

  var shoppinglistitem;
  var shoppinglistitem2;

  beforeEach(function() {
    shoppinglistitem = new ShoppingListItem('Fish','A lovely but dangerous goldfish.');
    shoppinglistitem2 = new ShoppingListItem('Dog',`Says 'Woof!'`);
  });

  it('should be a Class definition', function() {
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

  //start of shoppingListItem method tests

  it(`should have a method 'check' available on a new Shopping List Item object`, function () {
    (shoppinglistitem.check).should.be.a.function;
  });

  it(`the 'check' method should set 'is_done' to 'true'`, function () {
    shoppinglistitem.check();
    shoppinglistitem.is_done.should.be.equal(true);
  });

  it(`should have a method 'uncheck' available on a new Shopping List Item object`, function () {
    (shoppinglistitem.uncheck).should.be.a.function;
  });

   it(`the 'uncheck' method should set 'is_done' to 'false'`, function () {
    shoppinglistitem.check();
    shoppinglistitem.is_done.should.be.equal(true);
    shoppinglistitem.uncheck();
    shoppinglistitem.is_done.should.be.equal(false);
  });

  it(`should have a method 'render' available on a new Shopping List Item object`, function () {
    (shoppinglistitem.render).should.be.a.function;
  });

  it(`the'render' method should return an HTML-formatted string wrapped in quotes`, function () {
    var renderedString = shoppinglistitem.render();
    renderedString.should.be.a.string;
    (renderedString.startsWith(`"<li class`)).should.be.equal(true);
    (renderedString.endsWith(`/li>"`)).should.be.equal(true);
    (renderedString.includes('<span>Fish</span>')).should.be.equal(true);
    (renderedString.includes(`<span>A lovely but dangerous goldfish.</span>`)).should.be.equal(true);
    (renderedString.includes(`"completed_false"`)).should.be.equal(true);
  });

  it(`the'render' method should return a multiline string`, function () {
    var renderedString = shoppinglistitem.render();
    (renderedString.split("\n").length).should.be.equal(4);
  });

  it(`a different ShoppingListItem instance should have a property 'name' with a distinct value`, function() {
    shoppinglistitem.name.should.be.equal('Fish');
    shoppinglistitem2.name.should.be.equal('Dog');
  });

  it(`a different ShoppingListItem instance should have a property 'description' with a distinct value`, function() {
    shoppinglistitem.description.should.be.equal('A lovely but dangerous goldfish.');
    shoppinglistitem2.description.should.be.equal(`Says 'Woof!'`);
  });

  it(`a different ShoppingListItem instance should render a different HTML-formatted string`, function () {
    var renderedString = shoppinglistitem.render();
    var renderedString2 = shoppinglistitem2.render();
    renderedString2.should.be.a.string;
    (renderedString.includes('<span>Fish</span>')).should.be.equal(true);
    (renderedString2.startsWith(`"<li class`)).should.be.equal(true);
    (renderedString2.endsWith(`/li>"`)).should.be.equal(true);
    (renderedString2.includes('<span>Dog</span>')).should.be.equal(true);
    (renderedString2.includes(`<span>Says 'Woof!'</span>`)).should.be.equal(true);
    (renderedString == renderedString2).should.be.equal(false);
  });
  //end of shoppingListItem method tests
//end of shoppingListItem tests
});

describe('ShoppingList', function(){

  var shoppinglist;
  var shoppinglist2;
  var shoppinglistitem;
  var shoppinglistitem2;

  beforeEach(function() {
  shoppinglist = new ShoppingList();
  });

  it('should be a Class definition', function() {
    ShoppingList.should.be.a.function;
  });

  it('should return an object literal when invoked', function () {
    (ShoppingList()).should.be.an('object');
  });

  it(`should have a property 'items'`, function() {
    expect(shoppinglist.items).to.exist;
  });

  it(`'items' should be an array`, function() {
    (shoppinglist.items).should.be.instanceof(Array);
  });

  it(`'items' should be empty`, function() {
    (shoppinglist.items).should.be.empty;
  });

  it(`it should have a method named 'addItem'`, function() {
    (shoppinglist.addItem).should.be.a.function;
  });

  it(`passing the addItem method a ShoppingListItem object should add that object to the items array`, function() {
    var testListItem = new ShoppingListItem('Cat', 'Purrs a lot, chases mice');
    shoppinglist.addItem(testListItem);
    (shoppinglist.items).indexOf(testListItem).should.not.be.equal(-1);
  });





});