// ECMAScript6

    //------>DEFAULT FUNCTION ARGUMENTS<-------

// Notas
// NaN = not a number

function multiply(a, b) {
    b = b || 1; // Operador lógico verifica se o valor de 'b' é um valor verdadeiro, caso não seja atribui '1' 
    return a * b;
};

console.log('Multiply...');
console.log(multiply(5, 0)); // output: 5

// Se atribuir o número '0' como segundo parâmetro retornará 5, pois o número '0' será interpretado como false
function multiply_type(a, b) {
    // Usando typeof para verificar o valor da variável, se é possível atribuir '0' sem que seja interpretado como false
    b = typeof b === undefined ? 1 : b;
    return a * b;
};

console.log('Multiply_type...');
console.log(multiply_type(5, 0)); // output: 0


// Porém o código fica muito verboso, então podemos usar uma forma mais simplificada do ECMA6
function multiply_simplified(a, b = 1) {
    return a * b;
};

console.log('Multiply_simplified...');
console.log(multiply_simplified(5, 0));         // output: 0
console.log(multiply_simplified(5, undefined)); // output: 5

// [Lazy evaluation]
// Também é possível atribuir uma função toda vez que o parâmetro não for passado
function random_number() {
    return Math.random();
};

function multiply_random_number(a, b = random_number()) {
    return a * b;
}

console.log('Multiply_random_number...');
console.log(multiply_random_number(5)); // output: random number