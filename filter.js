console.log("Filter: ");
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Função de callback usada no filter
const FilterNumbers = numbers.filter(valor => valor > 10);
console.log(FilterNumbers); // output: 50, 80, 11, 15, 22, 27

// Ou
console.log("Filter(função extensa): ");
function callbackFilter(value) {
    return value > 10;
}

const FilterNumbersExtensive = numbers.filter(callbackFilter);
console.log(FilterNumbersExtensive); // output: 50, 80, 11, 15, 22, 27

// Outro exemplo
const person = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 49 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Wallace', idade: 47 },
];

const withMoreThan = person.filter(obj => obj.nome.length >= 5);
console.log(withMoreThan); // output: Maria, Eduardo, Letícia, Wallace