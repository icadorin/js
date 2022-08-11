const person = [
    {name: 'Luiz', age: 32},
    {name: 'Pedro', age: 43},
    {name: 'João', age: 32},
    {name: 'Douglas', age: 56},
    {name: 'Guilherme', age: 32},
    {name: 'Wellington', age: 34}
];

const older = person.reduce(function(accumulator, value) {
    if(accumulator.age > value.age) return accumulator;
    return value;
})