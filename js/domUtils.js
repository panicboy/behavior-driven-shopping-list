//body
var body = document.body;
body.id = 'body';

function appendLinebreak(theElementId){
    let theElement = document.getElementById(theElementId);
    var lineBreak = document.createElement('br');
    theElement.appendChild(lineBreak);
}

function setElementHTML(theElementId, theInnerHTML){
  let theElement = document.getElementById(theElementId);
  theElement.innerHTML = theInnerHTML;
}

function makeElement(elementType, theElementId, theParentId_, theClassName_, theInnerHTML_, theEventListener_, theFunction_){
  // elementType: String. 'div', 'button', etc.
  // theElementId: String. id of the new element
  // theParentId_: [optional] String. The new element will be appended as a child of the element with this id
  // theClassName_: [optional] String. Class name of the new element
  // theInnerHTML_:  [optional] String. Text that will be in the new element.
  // theEventListener_:  [optional] String. Event listener type, if there is one.
  // theFunction_:  [optional] Function called by the event listener
  var theNewElement = document.createElement(elementType);
  theNewElement.id = theElementId;
  if(arguments.length > 3 && theClassName_.length > 1) theNewElement.className = theClassName_;
  if(arguments.length > 4 && theInnerHTML_.length > 0) theNewElement.innerHTML = theInnerHTML_;
  if(arguments.length > 2 && theParentId_.length > 0) {
    var theParent = document.getElementById(theParentId_);
    theParent.appendChild(theNewElement);
  }
  if(arguments.length > 5) {
    theNewElement.addEventListener(theEventListener_, theFunction_);
  }
  return document.getElementById(theElementId);
}

function appendById(theChildId, theParentId){
  let childDiv = document.getElementById(theChildId);
  let parentDiv = document.getElementById(theParentId);
  parentDiv.appendChild(childDiv);
}

function convertColor(theColor){
  if(typeof theColor == 'string'){
    if(theColor.indexOf('rgb') === 0){
      return extractRGB(theColor);
    }
    if(theColor.length == 6 || theColor.length == 7){
      return hex2rgb(theColor);
    }
    return null;
  }
}

function hex2rgb(hex) {
  //takes a hex color like '#ffffff', returns an array with RGB values [255, 255, 255]
  r = hex.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (r) {
    return r.slice(1,4).map(function(x) { return parseInt(x, 16); });
  }
  return null; // if input can't be parsed
}

function extractRGB(theRGBcolor){
  //takes a string 'rgb(0, 0, 139)', returns array with 3RGB values [0,0,12]
  if(theRGBcolor) {
    let rgb = theRGBcolor.replace(/[^\d,]/g, '').split(',');
    return rgb.map(function(el, ind, ar){
      return parseInt(el);
    });
  }
}

