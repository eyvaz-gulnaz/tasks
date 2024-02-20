const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

// Task1
let newWord: string[] | null = text.match(/Spain/g)
console.log(newWord);

// Task 2
let regex2: RegExp = /rain/g
let matched: RegExpMatchArray[] = [...text.matchAll(regex2)]
let match: RegExpMatchArray | null
matched.forEach(match => console.log(`${match} at the position: ${match.index}`))

// Task 3
let newText: string = text.replace(/Spain/, "France")
console.log(newText);

// Taks4
let changedText: string = text.replaceAll(regex2, "sun")
console.log(changedText);

// Task 5
let searchPlainPosition: number = text.search(/plain/)
console.log(searchPlainPosition);