// Remapear valores de um array adicionando ID, utilizando map

console.log("Remapeando array: ");

const personName = [
    { nome: 'Luiz'},
    { nome: 'Maria'},
    { nome: 'Eduardo'},
    { nome: 'Letícia'},
    { nome: 'Wallace'},
]; 

// Adicionando id para os elementos do array
const ids = personName.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

console.log(ids); // output: 'Luiz', 0 ....