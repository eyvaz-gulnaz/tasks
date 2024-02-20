const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

Task1
regex1  = /Spain/g
let newWord = text.match(regex1)
console.log(newWord);

// Task 2
regex2 = /rain/g
let matched = [...text.matchAll(regex2)]
let result = matched.forEach(match=> console.log(`${match} at the position: ${match.index}`))

// Task 3
let newText = text.replace(/Spain/, "France")
console.log(newText); 

// Taks4
let changedText = text.replaceAll(/rain/g, "sun")
console.log(changedText);

// Task 5
let searchPlainPosition =  text.search(/plain/)
console.log(searchPlainPosition);