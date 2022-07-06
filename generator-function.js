function* generator() {
    yield 'Valor 1';

    yield 'Valor 2';

    yield 'Valor 3';
}

console.log("Função geradora: ");

const g1 = generator();
for (let valor of g1) {
    console.log(valor);
}

//Ou

const g2 = generator();
console.log(g2.next().value);
console.log(g2.next().value);