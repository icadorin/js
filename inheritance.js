function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function (value) {
  this.price += value;
}

Product.prototype.discount = function (value) {
  this.price -= value;
}

function Tshirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

Tshirt.prototype = Object.create(Product.prototype);
// Usar constructor de Tshirt
Tshirt.prototype.constructor = Tshirt;

const tshit = new Tshirt('Regata', 7.5, 'Preta');
tshit.increase(10);
console.log("Herança");
console.log("Camiseta");
console.log(tshit);

//

function Cup(name, price, material, stock) {
  Product.call(this, name, price);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return stock;
    },
    set: function (value) {
      if (typeof value !== 'number') return;
      stock = value;
    }
  });
}

Cup.prototype = Object.create(Product.prototype);
Cup.prototype.constructor = Cup;

const cup = new Cup('Copo de chope', 13, 'Vidro', 5);
console.log("Copo");
console.log(cup);
