"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
    { id: 4, name: 'Mark', email: 'mark@example.com', location: { city: 'Lisbon', country: 'Portugal' } },
    { id: 3, name: 'Jane', email: 'jane@example.com', location: { city: 'Madrid', country: 'Spaim' } },
];
var orders = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    { orderId: 103, customerId: 3, product: 'Smart speakers', quantity: 3, price: 1000 },
    { orderId: 104, customerId: 4, product: 'Powerbank', quantity: 1, price: 900 },
];
// #1
var custEmails = customers.map(function (customer) { return customer.email; });
console.log(custEmails);
// #2
var totalPrice = orders.filter(function (order) { return (order.price * order.quantity) > 1000; });
console.log(totalPrice);
// #3
var foundCustomer = customers.find(function (customer) { return customer.name === "Alice"; });
console.log(foundCustomer);
// #4
var specificIndex = orders.findIndex(function (order) { return order.orderId === 102; });
console.log(specificIndex);
// #5
var specificCountry = customers.some(function (customer) {
    var orderExictence = orders.find(function (order) { return order.customerId === customer.id; });
    if (orderExictence && customer.location.country === "USA")
        // console.log(customer.name , orderExictence)
        return true;
});
console.log(specificCountry);
// #6
customers.forEach(function (customer) {
    orders.forEach(function (order) {
        if (customer.id === order.customerId) {
            console.log("Order ".concat(order.orderId, " by ").concat(customer.name, ": ").concat(order.quantity, " ").concat(order.product, " for $").concat(order.price, " each"));
        }
    });
});
// #7
customers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
});
console.log(customers);
// or 
customers.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});
console.log(customers);
