const greet = (name , surname)=>{
    return "Hello, " + name + surname
}
const gr= greet("Gulnaz", " Bakhshiyeva")
console.log(gr)

// Part two

const factorial = (index)=>{
    if(index === 0){
        return 1
    } else{
        return  index*factorial(index-1)
    }
}
    const number = 0
    if(number> 0 || number === 0){
        let fctrl = factorial(number)
        console.log(fctrl)
    }

    // Part three

    const sumAll = (...rest)=>{
        let sum = 0
        for(let i of rest){
            sum+=i
        }
        return sum
    }
    console.log(sumAll(4, 5, 7, 16, 23))

    // Part four

    const first = ()=>{
        second()
        console.log("I'm a first arrow function") 
    }
    const second = ()=>{
        third()
        console.log("I'm a second arrow function");
    }
    const third = ()=>{
        console.log("I'm a third arrow function");
    }

    first()