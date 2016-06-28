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
  <span><label><input type="checkbox" id="idx">${this.name}</label></span><br>
  <span>${this.description}</span>
</li>`;
  };

}