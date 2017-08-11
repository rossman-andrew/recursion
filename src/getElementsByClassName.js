// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // For filling in with items that match particular class name
	var matchingElements = [];
  // Recursive function for finding matching elements                   
	function findMatches(currentElement) {
    // Element has a class field and it contains the className we're looking for. Add it to the array of matchingElements
    if(currentElement.classList && currentElement.classList.contains(className)) {  
      matchingElements.push(currentElement);  
    }
    // Loop through all the children of this element
    for(var i = 0; i < currentElement.childNodes.length; i++) {
      // If the children pass our test, they will be added to the matchingElements array
      findMatches(currentElement.childNodes[i]);
    }
	}
	// Run the recursive function and have it begin work on the DOM
  findMatches(document.body);
  return matchingElements;
};
