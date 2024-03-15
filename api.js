// // with async - await , try-catch

async function fetchData(){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    if(!response.ok){
        throw new Error ("No data found")
    } 
    const data = await response.json()
    console.log(data);
    console.log(data.weight);
    console.log(data.name);
    } catch (error) {
        console.error(error)
    }
}
fetchData()


// // with then-catch

fetch("https://catfact.ninja/fact")
.then(res => {
    if(!res.ok){
        throw new Error("No resources")
    }
    return res.text()
})
.then( data => console.log(data))
.catch(error => console.error(error))


// with api key 

fetch(`https://api.giphy.com/v1/gifs/random?api_key=S9iMDi1hROQPFySuuJSW5wHO5AVMqdqK&tag=cats&rating=g`)
.then(res=> {
    if(!res.ok){
        throw new Error("No results found")
    }
    console.log(res.json());
})
.then(data => console.log(data))
// console.log(res.data.images.fixed_height.url)
.catch(error => console.error(error))


// 4 // movie api 

async function getProps(){
    let result = await fetch("http://www.omdbapi.com/?apikey=8858de94&t=harry potter")
    var data = await result.json()
    console.log(data.Title);
    console.log(data.Genre);
    console.log(data.Actors);
    console.log(data.Genre);
    return{
        props:{
            ...data
        }
    }
}
getProps()

// 5 // post method / headers / body


fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "User2",
        id: "707"
    })
}).then(res => { 
    console.log(res);
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.error(error))

//6//  get method,  no body

async function randomUserData(){
    try {
        const response = await fetch("https://randomuser.me/api/" , {
            method: 'GET',
            headers: {
                'content-type' : 'application/json; charset=utf-8'
            },
        } )
        console.log(response);
    if(!response.ok){
        throw new Error ("No data found")
    } 
    const data = await response.json()
    console.log(data);
    console.log(data.results);
    console.log(data.results[0].gender);
    } catch (error) {
        console.error(error)
    }
}
randomUserData()

// 7 put method

function memeMaker(){
        fetch("https://restcountries.com/v3.1/region/europe" , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                    population: "more than 3 mln"
                })
        })
        .then(res => { 
            if(!res.ok){
                throw new Error("Couldn't find any results")
            }
            return res.json()
        })
        .then(data => { console.log(data)})
        .catch(err => {console.error(err)})
}
memeMaker()


// 8 // patch method

fetch("https://reqres.in/api/users/4", {
    method: 'PATCH',
    headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        email : "someone@mail.com"
    })
})
.then(res => {
    if(!res.ok){
        throw new Error("No region found")
    }
    console.log();
    return res.text()
})
.then( data => console.log(data))
.catch(error => console.error(error))

// 9// patch method 2

const myEndpoint = 'https://jsonplaceholder.typicode.com/todos/3'
async function UpdatedData(){
    try {
    const response = await fetch( myEndpoint, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "My title",
            userId: 2,
            completed: true
        })
    })
        const data = await response.json()
    console.log(data);
    } catch (error) {
        console.error(error)
    }
}
UpdatedData()

// 10 // just for practice / put method 

fetch('https://api.spoonacular.com/recipes/7', {
    method: "PUT",
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': "f5f7867680ad40d5823be1e4247e08"
    },
    body: JSON.stringify({
        title: " Yummy for my tummy",
        instructions: "Ask mom how to cook"
    })
})
.then(res => {
    if(!res.ok){
        throw new Error("No recipe found with this name")
    }
        return res.json()
    }
)
.then(myRecipe => console.log(myRecipe))
.catch(error => console.error(error))
