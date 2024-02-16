interface Location: {
        city: string; 
        country: string;
    }
interface Customer {
    readonly id: number;
    name: string;
    email: string;
    location : Location;
}
interface Order {
    orderId: number;
    customerId: number;
    product: string;
    quantity: number;
    price: number;
}


const customers: Customer[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
    { id: 4, name: 'Mark', email: 'mark@example.com', location: { city: 'Lisbon', country: 'Portugal' } },
    { id: 3, name: 'Jane', email: 'jane@example.com', location: { city: 'Madrid', country: 'Spaim' } },
];

const orders: Order[] = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    { orderId: 103, customerId: 3, product: 'Smart speakers', quantity: 3, price: 1000 },
    { orderId: 104, customerId: 4, product: 'Powerbank', quantity: 1, price: 900 },
];

// #1
const custEmails: string[] = customers.map((customer: { email: string }) => customer.email)
console.log(custEmails);

// #2

const totalPrice: Order[] = orders.filter((order: { price: number, quantity: number }) => (order.price * order.quantity) > 1000)
console.log(totalPrice);

// #3

const foundCustomer: Customer | undefined = customers.find((customer: { name: string }) => customer.name === "Alice")
console.log(foundCustomer);

// #4

const specificIndex: number = orders.findIndex((order: { orderId: number }) => order.orderId === 102)
console.log(specificIndex);

// #5

const specificCountry: boolean = customers.some((customer: { location: { country: string }, id: number }) => {
    const orderExictence = orders.find((order: { customerId: number }) => order.customerId === customer.id)
    if (orderExictence && customer.location.country === "USA")
        // console.log(customer.name , orderExictence)
        return true
})
console.log(specificCountry);

// #6

customers.forEach((customer: { id: number, name: string }) => {
    orders.forEach((order: Order) => {
        if (customer.id === order.customerId) {
            console.log(`Order ${order.orderId} by ${customer.name}: ${order.quantity} ${order.product} for $${order.price} each`)
        }
    }
    )
})

// #7

customers.sort((a: { name: string }, b: { name: string }) => {
    return a.name.localeCompare(b.name)
})

console.log(customers);

// or 

customers.sort((a: { name: string }, b: { name: string }) => {
    if (a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
        return 1
    }
    return 0
})

console.log(customers);

export { }










