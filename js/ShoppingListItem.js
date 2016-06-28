function ShoppingListItem(name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;

  this.check = function (){
    this.is_done = true;
  };

  this.uncheck = function(){
    this.is_done = false;
  };

  this.render = function(){
    return `<li class="completed_${this.is_done}">
  <span>${this.name}</span>
  <span>${this.description}</span>
  <input type="checkbox" id="idx" onchange="changeCheckedStatus(this.id, this.checked)"></input>
  <input type="button" name="idx2" value = "x" onclick="removeItemButtonClicked(this.name)")></input>
</li>`;
// return `<li class=“completed_${this.is_done}">\n<span>${this.name}</span>\n<span>${
// this.description}</span><input class="checkboxes" type="checkbox"></input><input class="removebuttons" value = "x" type="submit"></input></li>`;
  };

}
