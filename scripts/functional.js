let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// for my Example
let x = "https://example.com/";

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));


// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}


// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));


// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));


// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));


// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n });
}
console.log(functionalSum(numbers));


// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));


// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));


///// exercise 6.1.1
function stateUrls(elements){
  y = elements.map(element => urlify(element))
  return y.forEach(function(element){
  console.log(x+element);
  });
}
console.log(stateUrls(states));

//for an array

function fullUrls(states){
let urlified = states.map(state => urlify(state));
return urlified.map(state => "https://example.com/" + state);
}
console.log(fullUrls(states));

///// exercise 6.2.2

function dakota(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}
console.log(dakota(states));

function functionalDoubles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDoubles(states));


///// exercise 6.3.3
//1//
function functionalProduct(elements){
   return elements.reduce((total,n) => {return total *= n;
   });
 }
 console.log(functionalProduct(numbers));

 //2//
/* function functionalLengths(elements) {return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});
}
console.log(functionalLengths(states));
*/
////////
