const persons = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' },
];

const newPerson = new Map();
for (const person12 of persons) {
  const { id } = person12;
  newPerson.set(id, { ...person12 });
}

console.log('Mapa novas pessoas: ');
console.log(newPerson); // output: value: {id: 3, nome: 'Luiz'}

