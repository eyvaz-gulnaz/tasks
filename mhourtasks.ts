// Mentor hour on February, 18th with typescript

// fifth task
//* Istifadeci melumatlarini tesdiqleyen bir funksiya yazin.
//* Size Username ve Password gonderilir ve Duzgun Username ve Password gonderilibse hemin melumatlar bir obyekt olaraq terminalda gosterilir.
//* Eger Username ve Password yanlisdirsa terminalda username veya sifre yanlisdir mesaji gosterilir..

interface IData {
    username: string;
    password: string;
}
const users: IData[] = [
    { username: 'user1', password: 'user12345' },
    { username: 'user2', password: 'user123' },
    { username: 'user3', password: 'user123' }
]
let verifyData = (userData: IData[], data: IData) => {
    let checkUsers: IData[] = userData.filter(user => data.username === user.username && data.password === user.password)
    return checkUsers.length > 0 ? checkUsers.map(user => `name: ${user.username} , Password: ${user.password} `) : "wrong"
}
console.log(verifyData(users, { username: 'user1', password: 'user123' }));

// first task
//* VERILEN SOZUN PALINDROME OLUB OLMAMASINI YOXLAYAN BIR FUNKSIYA YAZIN
function palindrom(soz: string) {
    var ekssoz: string = soz.split("").reverse().join("")
    if (soz === ekssoz) {
        return "Palindrome"
    } else {
        return "Not Palindrome"
    }
}
console.log(palindrom("rotator"))

// second task
//* VERILEN ARRAY ICERİSİNDE TEKRARLANAN STRINGI ARRAY OLARAQ QAYATARAN BİR FUNKSİYA YAZİN.
const arr: string[] = ['ant', 'bison', "camel", "camel", 'duck', 'bison']
let x: string[] = arr.filter((el: string, index: number) => arr.indexOf(el) !== index)
console.log(x);
// or second way
var repeatedWord: string = ""
for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length - 1; j > 0; j--) {
        if (arr[j] == arr[i]) {
            repeatedWord = arr[j]
        }
    }
}
console.log(repeatedWord)

// third task 
// ARRAY ICERISINDEKI EN BOYUK IKI SAYINI TAP

const nums: number[] = [12, 23, 2, 53, 25, 87]
let line: number[] = nums.sort((a, b) => b - a).slice(0, 2)
console.log(line);

// or  ---> it's my second solution
var maxnum: number = nums[0]
var secondmax: number = nums[1]
for (var i = 0; i < arr.length; i++) {
    if (maxnum < nums[i]) {
        secondmax = maxnum
        maxnum = nums[i]
    }
    if (nums[i] > secondmax && nums[i] !== maxnum) {
        secondmax = nums[i]
    }
}
console.log(maxnum, secondmax)

// fourth task 
//* Verilen Cumleni Elifba Sirasina Gore Siralayin
const sentence: string = "javascript is a programming language"
console.log(sentence.split(" ").sort().join(" "));