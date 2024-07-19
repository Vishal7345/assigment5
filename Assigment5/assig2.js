let order={

    orderId:'123456',
    productName:'Laptop',
    quantity:2
};

//without distructuring
console.log('Without Destructuring:');
console.log('Oder Id:' ,order.orderId);
console.log('Product Name:' ,order.productName);
console.log('Quantity:' ,order.quantity);

//with destructuring

console.log('\nWith Destructuring:');
let{orderId,  productName,quantity}=order;

console.log('Oder Id:' , orderId);
console.log('Product Name:' ,productName);
console.log('quantity:' ,quantity);