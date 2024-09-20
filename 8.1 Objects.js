product = {
    name: 'iPad',
    price: 1500,
    'brand-name': 'Apple',
    [5+20] : 'code 10',
}

console.log(product);
console.log(typeof product);

console.log(product['name']);
console.log(product.name);

// only supports bracket notation
console.log(product['brand-name']);
console.log(product[25]);

product.color = 'Red';
delete product.price;
console.log(product);


let object1 = { name : 'naeem'};
let object2 = object1;
let object3 = { name : 'naeem'};

console.log(object2 === object1);
console.log(object3 === object1); 

// let name = product.name;
// shortcut destructuring
let {name} = product;
let {price, color} = product;
console.log(name, price, color);

console.log(typeof console); // object
console.log(typeof console.log); // function