// ECMAScript6

    //------>ARROW FUNCTION<-------

// Uso da arrow function padrão
var sum = (a, b) => a + b; 

var sub = (a, b) => a - b;

// Para criar uma estabelecer um corpo para função é necessário o uso de chaves
var div = (a, b) => {
    var unknow = 0;
    return a / b; 
};

var mul = (a, b) => { 
    var unknow = 0;
    return a * b; 
};

// Para um único parametro não é necessário o uso de parênteses
var test = a => a + 10;

console.log('Operações básicas...');
console.log(sum(10, 5)); // output: 15
console.log(sub(10, 5)); // output: 5
console.log(div(10, 5)); // output: 2
console.log(mul(10, 5)); // output: 50
console.log(test(10));   // output: 20