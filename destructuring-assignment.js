const person = {
    firstName: 'Kayne',
    secondName: 'West',
    age: 30
}

// Atribuição via desconstrução
const { firstName, secondName } = person;
console.log(firstName, secondName); // output: Kayne West