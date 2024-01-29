// part one

function calculateSum(arr)  {
    var sum = 0
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
var result  = calculateSum([5,10,30,45])
console.log(result)

// part two

var counter = 0
var k = 5
while (counter<k) {
    counter++
    console.log(counter)
}

console.log("*************")

// Part three

var countDown = 5
do {
    countDown--
    console.log(countDown)
} while (countDown>0);

// Part Four

function evaluateGrade(x){
    if(x>=60){
        return "Pass"
    } else{
        return "Fail"
    }
}
console.log(evaluateGrade(100))