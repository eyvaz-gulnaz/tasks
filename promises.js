// Task 1

function createDelay(message, ms){
    return new Promise((resolve , rejected) => {
    setTimeout(() => {
        const randomError = Math.random()
        randomError <= 0.3 ?  rejected("Error: Delay Failed") : resolve(message);
    }, ms);
})
} 

// #2
createDelay(2000).then(message => {
    console.log("Delay Completed");
})

// #3
createDelay("Welcome", 500)
.then(message => {
    console.log(message);
    return createDelay("Have a good day!", 1000)
})
.then(message => {
    console.log(message);
    return createDelay("Probably u won't see this cos time passed", 1500)
})
.then(message => {
    console.log(message);
})
.catch(err => console.log("Time passed"))

// #4 added to 1, 3 tasks
createDelay(500).catch(err=> console.log(err))

// #5
const createDelayArray  = [["Welcome1", 500], ["Welcome2", 800], ["Welcome3", 1000], ["Welcome4", 1500]]

const greetings = createDelayArray.map(([message,delay])=> createDelay(message, delay))
    Promise.all(greetings)
    .then(messages => {
        messages.forEach(message => {
            console.log(message);
        })
    })
    .catch(err => console.log(err))