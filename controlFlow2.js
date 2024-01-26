const dayOfWeek = "Saturday"
var info = ""
switch (dayOfWeek) {
    case "Monday":
        info = "Study JS"
        break;
    case "Tuesday":
        info = "Study React"
        break;
    case "Wednesday":
        info = "Workout"
        break;
    case "Thursday":
        info = "Work on Figma"
        break;
    case "Friday":
        info = "Study Node js"
        break;
    default:
        info= "Do what u want"
        break;
}
console.log(info)

// Part two

const numbers = [3, 5 ,7, 11,23]
var sum = 0
for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i])
    sum += numbers[i]
}
console.log(sum)

// Part three

const fruits = ["Apple", "Banana", "Cherry", "Plum", "Pear"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i], fruits[i].length);
    
}

// Part four

const student = {
    name: "Someone", 
    grade: 85
}
if(student.grade>=60){
    console.log("Passed");
}else{
    console.log("Fall");
}