
// Part one

const color = "brown"
var message = ""
switch (color) {
    case "red":
        message = "Stop!"
        break;
    case "green":
        message = "Go!"
        break;
    case "yellow":
        message = "Caution"
        break;
    default:
        message = "The Traffic light is broken. Be careful!"
        break;
}

console.log(message);

// Part two

const matrix = [[1,2], [3,4]]

for( var i=0; i<matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Part three

const product = {
    name: "Bakhlava",
    price: 8,
    inStock: true
}
var productProp = Object.keys(product)

for (const productProp in product) {
   console.log(product[productProp])  
    }

    // Part four

    if(product.price<50 && product.inStock){
        console.log("Available");
    } else{
        console.log("Unavailable")
    }