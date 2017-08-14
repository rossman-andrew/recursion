// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === null || typeof obj === 'undefined') {
  	return 'null';
  } else if(typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if(typeof obj === 'number') {
  	return obj.toString();
  } else if(typeof obj === 'boolean') {
  	return obj.toString();
  } else if(Array.isArray(obj)) {
  	if(obj.length === 0){
  		return '[]';
  	}
  	return '[' + obj.map(function(element) {
  		return stringifyJSON(element);
  	}).join(',') + ']';
  } else if(typeof obj === 'object') {
  	var objArray = [];
  	for(var key in obj) {
  		var value = stringifyJSON(obj[key]);
  		if(key !== 'undefined' && key !== 'functions') {
  			objArray.push('"' + key + '":' + value);	
  		}
  	}
  	return "{" + objArray.join(',') + "}";
  }
};
