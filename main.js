//ECMAScript6

    //------>ARROW FUNCTION<-------

//Uso da arrow function padrão
var sum = (a, b) => a + b; 

var sub = (a, b) => a - b;

//Para criar um variável/ estabelecer um corpo para função é necessário o uso de chaves
var div = (a, b) => {
    var unknow = 0;
    return a / b; 
};

var mul = (a, b) => { 
    var unknow = 0;
    return a * b; 
};

//Para um único parametro não é necessário o uso de parênteses
var test = a => a + 10;

console.log('Operações básicas');
console.log(sum(10, 5));
console.log(sub(10, 5));
console.log(div(10, 5));
console.log(mul(10, 5));
console.log(test(10));

//-------------------------------------------------

    //------>DEFAULT FUNCTION ARGUMENTS<-------

//Notas
//NaN = not a number

function multiply(a, b) {
    b = b || 1; //Operador lógico verifica se o valor de 'b' é um valor verdadeiro, caso não seja atribui '1' 
    return a * b;
};

console.log('Multiply...');
console.log(multiply(5, 0));
//Se atribuir o número '0' como segundo parâmetro retornará 5, pois o número '0' será interpretado como false 

function multiply_type(a, b) {
    b = typeof b === undefined ? 1 : b;
    return a * b;
};

console.log('Multiply_type...');
console.log(multiply_type(5, 0));
//Usando typeof para verificar o valor da variável é possível atribuir '0' sem que seja interpretado como false

//Porém o código fica muito verboso, então podemos usar uma forma mais simplificada do ECMA6
function multiply_simplified(a, b = 1) {
    return a * b;
};

console.log('Multiply_simplified...');
console.log(multiply_simplified(5, 0));
console.log(multiply_simplified(5, undefined));

//[Lazy evaluation]
//Também é possível atribuir uma função toda vez que o parâmetro não for passado
function randomNumber() {
    return Math.random();
};

function multiply_randonNumber(a, b = randomNumber()) {
    return a * b;
}

console.log('Multiply_randonNumber...');
console.log(multiply_randonNumber(5));