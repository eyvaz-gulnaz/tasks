// Task 1

function createDelay(message: string, ms: number): Promise<string> {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            const randomError = Math.random()
            randomError <= 0.3 ? rejected("Error: Delay Failed") : resolve(message);
        }, ms);
    })
}

// #2
createDelay("Delay Completed", 2000)
    .then((message: string) => {
        console.log(message);
    })
    .catch((err: Error) => console.log(err))

// #3
createDelay("Welcome", 500)
    .then((message: string) => {
        console.log(message);
        return createDelay("Have a good day!", 1000)
    })
    .then((message: string) => {
        console.log(message);
        return createDelay("Probably u won't see this cos time passed", 1500)
    })
    .then((message: string) => {
        console.log(message);
    })
    .catch((err: Error) => console.log("Time passed"))

// #4 added to #1-3 tasks

// #5
const createDelayArray: [string, number][] = [["Welcome1", 500], ["Welcome2", 800], ["Welcome3", 1000], ["Welcome4", 1500]]

const greetings = createDelayArray.map(([message, delay]: [string, number]) => createDelay(message, delay))
Promise.all(greetings)
    .then((messages: string[]) => {
        messages.forEach((message: string) => {
            console.log(message);
        })
    })
    .catch((err: Error) => console.log(err))