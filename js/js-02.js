let teslaX = {}
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.color = 'black';
teslaX.price = 150000;
teslaX.isAvailable = true;
teslaX.beep = beep;

let mazda6 = {
    make: 'Mazda',
    model: 6,
    color: 'red',
    price: 18000,
    isAvailable: true,
    beep: beep
};

function beep () {
    console.log(this.make + ' ' + this.model + ' ' + 'beep-beep')
}

function Car(make, model, color, price, isAvailable) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.price = price;
    this.isAvailable = isAvailable;
    //this.beep = beep;
}

Car.prototype.beep = beep;


let audiR8 = new Car('Audi', 'R8', 'white', 200000, true);
audiR8.beep();

console.dir(teslaX);
console.dir(mazda6);
console.log(audiR8);


//closures
 function createCounter() {
   let counter = 0
  const myFunction = function() {
     counter = counter + 1
     return counter
   }
   return myFunction
}
 const increment = createCounter()
 const c1 = increment()
 const c2 = increment()
 const c3 = increment()
 const c4 = increment()
 const c5 = increment()
 console.log('example increment', c1, c2, c3, c4, c5)