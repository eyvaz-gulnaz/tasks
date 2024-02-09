// Part one

const stocks = [
    {
        symbol: "AAA",
        price:50,
        sector: "A class"
    },
    {
        symbol: "NewBrand",
        price: 80,
        sector: "econom class"
    },
    {
        symbol: "goldbrand",
        price:60,
        sector: "lux class"
    },
    {
        symbol: "Bbrand",
        price:40,
        sector: "econom class"
    }
]

// Part Two

function updatePrice(){
    let chosenStock = stocks[Math.floor(Math.random()*stocks.length)]
let elem = Math.floor(Math.random()*(80-40))+40
chosenStock.price = elem
    console.log(chosenStock.symbol, "yeni qiymeti ", chosenStock.price)
}
setInterval(updatePrice, 2000);

// // Part third

function filterStocks() {
    return stocks.filter((stock) => stock.sector === "econom class")
}
console.log(filterStocks())

// Part Fourth

function alertMessage(){
    let averagePrice = 50
    let chosenStock = stocks[Math.floor(Math.random()*stocks.length)]
let elem = Math.floor(Math.random()*(80-40))+40
chosenStock.price = elem
    return stocks.forEach((chosenStock) =>
    (chosenStock.price> averagePrice) ?
    console.log(chosenStock.symbol,  " current price ", chosenStock.price, " is above ", averagePrice):
    (chosenStock.price == averagePrice) ?
    console.log(chosenStock.symbol,  " current price ", chosenStock.price, " equal to ", averagePrice):
    console.log(chosenStock.symbol, " current price ", chosenStock.price,  " is below ", averagePrice) 
    )
}
setTimeout(alertMessage, 3000)