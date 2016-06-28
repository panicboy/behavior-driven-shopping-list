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
    shoppinglistitem.should.be.an.instanceOf(ShoppingListItem);
  });

  it('should return an object literal when invoked', function () {
    shoppinglistitem.should.be.an('object');
  });

  describe('name', function(){
    it(`should have a property 'name'`, function() {
      shoppinglistitem.name.should.be.equal('Fish');
      shoppinglistitem2.name.should.be.equal('Dog');
    });
  });

  describe('description', function(){
    it(`should have a property 'description'`, function() {
      shoppinglistitem.description.should.be.equal('A lovely but dangerous goldfish.');
      shoppinglistitem2.description.should.be.equal(`Says 'Woof!'`);
    });
  });

  describe('is_done', function(){
    it(`should have a property 'is_done'`, function() {
      shoppinglistitem.is_done.should.be.equal(false);
    });
  });

  //start of shoppingListItem method tests
  describe('check', function(){
    it(`ShoppingListItem should have a method 'check' available on a new Shopping List Item object`, function () {
      (shoppinglistitem.check).should.be.a.function;
    });

    it(`the 'check' method should set 'is_done' to 'true'`, function () {
      shoppinglistitem.check();
      shoppinglistitem.is_done.should.be.equal(true);
    });
  }); //end of shoppingListItem check tests

  describe('uncheck', function(){
    it(`should have a method 'uncheck' available on a new Shopping List Item object`, function () {
      (shoppinglistitem.uncheck).should.be.a.function;
    });
     it(`the 'uncheck' method should set 'is_done' to 'false'`, function () {
      shoppinglistitem.check();
      shoppinglistitem.is_done.should.be.equal(true);
      shoppinglistitem.uncheck();
      shoppinglistitem.is_done.should.be.equal(false);
    });
  }); //end of shoppingListItem uncheck tests

  describe('render', function(){
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

  }); //end of shoppingListItem render tests
  //end of shoppingListItem method tests

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

//end of shoppingListItem tests
});

describe('ShoppingList', function(){

  var shoppinglist;
  var shoppinglist2;
  var shoppinglistitem;
  var shoppinglistitem2;
  var emptyShoppingList;
  var shoppinglistitem3;

  beforeEach(function() {
  shoppinglist = new ShoppingList();
  shoppinglist2 = new ShoppingList();
  emptyShoppingList = new ShoppingList();
  shoppinglistitem = new ShoppingListItem('Cat', 'Purrs, chases mice');
  shoppinglistitem2 = new ShoppingListItem('Mouse', 'Eats cheese, squeaks');
  shoppinglistitem3 = new ShoppingListItem('TV', `You can watch 'Game of Thrones' on it.`);
  });

  it('should be a Class definition', function() {
    ShoppingList.should.be.a.function;
    shoppinglist.should.be.an.instanceOf(ShoppingList);
  });

  it('should return an object literal when invoked', function () {
    shoppinglist.should.be.an('object');
  });

  it(`should have a property 'items'`, function() {
    expect(shoppinglist.items).to.exist;
  });

  it(`'items' should be an array`, function() {
    (shoppinglist.items).should.be.instanceof(Array);
  });

  it(`'items' should be empty`, function() {
    (shoppinglist.items).should.be.empty;
  }); // end of basic ShoppingList tests

  describe('addItem', function(){

    it(`'ShoppingList' should have a method named 'addItem'`, function() {
      (shoppinglist.addItem).should.be.a.function;
    });

    it(`the 'addItem' method should accept a ShoppingListItem object and add it to the items array`, function() {
      shoppinglist.addItem(shoppinglistitem);
      (shoppinglist.items).indexOf(shoppinglistitem).should.not.be.equal(-1);
    });

    it(`the 'addItem' method should throw an error if passed an object that is not a ShoppingListItem`, function(){
      var badCall = function () {
        shoppinglist.addItem(7);
      };
      badCall.should.throw(Error);
      var badCall2 = function () {
        shoppinglist.addItem({name:'Cat', description:'Purrs a lot, chases mice'});
      };
      badCall2.should.throw(Error);
    });
  }); //end of addItem tests
  describe('removeItem', function(){
    it(`'ShoppingList' should have a method named 'removeItem'`, function() {
      (shoppinglist.removeItem).should.be.a.function;
    });

    it(`'removeItem' should accept a single ShoppingListItem argument`, function() {
      shoppinglist.addItem(shoppinglistitem3);
      (shoppinglist.items).indexOf(shoppinglistitem3).should.not.be.equal(-1);
      (shoppinglist2.items).indexOf(shoppinglistitem3).should.be.equal(-1);
      shoppinglist.removeItem(shoppinglistitem3);
      (shoppinglist.items).indexOf(shoppinglistitem3).should.be.equal(-1);
    });
  }); //end of removeItem tests

  describe('render', function(){

  it(`ShoppingList should have a method 'render' available on a new Shopping List object`, function () {
    (shoppinglist.render).should.be.a.function;
  });

  describe('render results', function(){
    beforeEach(function() {
    shoppinglist.addItem(shoppinglistitem);
    shoppinglist2.addItem(shoppinglistitem);
    shoppinglist2.addItem(shoppinglistitem2);
    shoppinglist2.addItem(shoppinglistitem3);
    var shoppingListRender;
    var shoppingList2Render;
    var listItemRender;
    var listItem2Render;
    var listItem3Render;
  });

    it(`ShoppingList 'render' results should contain the items in Shoppinglist.items`, function () {
      listItemRender = shoppinglistitem.render();
      listItem2Render = shoppinglistitem2.render();
      listItem3Render = shoppinglistitem3.render();
      shoppingListRender = shoppinglist.render();
      shoppingList2Render = shoppinglist2.render();
      expect(shoppingListRender).to.contain(listItemRender);
      expect(shoppingList2Render).to.contain(listItem3Render);
      expect(shoppingListRender).to.not.contain(listItem3Render);
      expect(shoppingListRender).to.not.contain(listItem2Render);
    });

  }); //end of render results tests



  }); //end of render tests

});