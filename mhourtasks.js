// Mentor hour on February, 18th with typescript
var users = [
    { username: 'user1', password: 'user12345' },
    { username: 'user2', password: 'user123' },
    { username: 'user3', password: 'user123' }
];
var verifyData = function (userData, data) {
    var checkUsers = userData.filter(function (user) { return data.username === user.username && data.password === user.password; });
    return checkUsers.length > 0 ? checkUsers.map(function (user) { return "name: ".concat(user.username, " , Password: ").concat(user.password, " "); }) : "wrong";
};
console.log(verifyData(users, { username: 'user1', password: 'user123' }));
// first task
//* VERILEN SOZUN PALINDROME OLUB OLMAMASINI YOXLAYAN BIR FUNKSIYA YAZIN
function palindrom(soz) {
    var ekssoz = soz.split("").reverse().join("");
    if (soz === ekssoz) {
        return "Palindrome";
    }
    else {
        return "Not Palindrome";
    }
}
console.log(palindrom("rotator"));
// second task
//* VERILEN ARRAY ICERİSİNDE TEKRARLANAN STRINGI ARRAY OLARAQ QAYATARAN BİR FUNKSİYA YAZİN.
var arr = ['ant', 'bison', "camel", "camel", 'duck', 'bison'];
var x = arr.filter(function (el, index) { return arr.indexOf(el) !== index; });
console.log(x);
// or second way
var repeatedWord = "";
for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length - 1; j > 0; j--) {
        if (arr[j] == arr[i]) {
            repeatedWord = arr[j];
        }
    }
}
console.log(repeatedWord);
// third task 
// ARRAY ICERISINDEKI EN BOYUK IKI SAYINI TAP
var nums = [12, 23, 2, 53, 25, 87];
var line = nums.sort(function (a, b) { return b - a; }).slice(0, 2);
console.log(line);
// or  ---> it's my second solution
var maxnum = nums[0];
var secondmax = nums[1];
for (var i = 0; i < arr.length; i++) {
    if (maxnum < nums[i]) {
        secondmax = maxnum;
        maxnum = nums[i];
    }
    if (nums[i] > secondmax && nums[i] !== maxnum) {
        secondmax = nums[i];
    }
}
console.log(maxnum, secondmax);
// fourth task 
//* Verilen Cumleni Elifba Sirasina Gore Siralayin
var sentence = "javascript is a programming language";
console.log(sentence.split(" ").sort().join(" "));
