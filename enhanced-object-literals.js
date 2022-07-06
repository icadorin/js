// Maneira clássica de escrever objetos literais

var prop1 = 'Padrão';

var obj = {
    prop1: prop1
};

console.log('Maneira clássica...');
console.log(obj);

// Com o uso do [Short Range] o lado direito pode ser omitido para definir valores para propriedades e métodos

var prop1 = 'Padrão';

var obj = {
    prop1 
};

// Outro exemplo de [Short Range], dessa vez omitindo a palavra "function"

var obj = {
    sum(a, b) {
        return a + b;
    }
};

// console.log(obj.sum(1, 5));