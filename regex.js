const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

//Task1
let newWord = text.match(/Spain/g)
console.log(newWord);

// Task 2
let regex2 = /rain/g
let matched = [...text.matchAll(regex2)]
let result = matched.forEach(match=> console.log(`${match} at the position: ${match.index}`))

// Task 3
let newText = text.replace(/Spain/, "France")
console.log(newText); 

// Taks4
let changedText = text.replaceAll(regex2, "sun")
console.log(changedText);

// Task 5
let searchPlainPosition =  text.search(/plain/)
console.log(searchPlainPosition);
