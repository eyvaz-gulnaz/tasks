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