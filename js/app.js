var myShoppingList = new ShoppingList();
var content = document.getElementById('content');

function add_to_shopping_list(){
  var descripBox = document.getElementById('descripBox');
  var titleBox = document.getElementById('titleBox');
  var itemName = titleBox.value;
  var itemDescription = descripBox.value;
  if(typeof itemName == 'string' && typeof itemDescription == 'string' && itemName.length > 0 && itemDescription.length > 2){
    var new_shopping_list_item = new ShoppingListItem(itemName, itemDescription);
    myShoppingList.addItem(new_shopping_list_item);
    content.innerHTML = myShoppingList.render();
    titleBox.value = '';
    descripBox.value = '';
    titleBox.focus();
  }
}

function changeCheckedStatus(theId, isChecked) {
  if(isChecked) myShoppingList.items[theId].check();
  if(!isChecked) myShoppingList.items[theId].uncheck();
  console.log('myShoppingList.items[theId].is_done: ', myShoppingList.items[theId].is_done);
}
