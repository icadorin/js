function Person(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
    // this.fullName = () => 'ORIGINAL: ' + this.name + ' ' + this.fullName;
}

// Substituir função de concatenação usando prototype, para melhorar a performance

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.secondName;
}

const person1 = new Person('Michael', 'Jackson');

console.log("Prototypes: ");
console.log(person1);

// Outro exemplo

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage / 100));
}

const Product1 = new Product('Camiseta', 500);
Product1.discount(75); // Porcentagem
console.log(Product1); // output: 125