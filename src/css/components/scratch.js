// "use strict";

// function whatIsthis() {
//   function thisIsWhat() {
//     console.log(this);
//   }

//   thisIsWhat();
// }

// let boat = {
//   log: whatIsthis
// };

// boat.log();

// 4/
// function logMyName() {
//   console.log(this.name);
// }

// let bettyObj = {
//   name: "Betty",
//   logger: logMyName,
// };

// bettyObj.logger.call(bettyObj);

// // 5
// let foo = {
//   baz: "baz",
//   qux() {
//     this.baz;
//   },
//   init() {
//     console.log(this);
//     this.qux();
//   },
// };

// let bar = {
//   init() {
//     foo.init();
//   },
// };

// bar.init();

//6
// let foo = {
//   letters: ["a", "b", "c", "d", "e"],
//   qux() {
//     this.letters.forEach(
//       function (letter, idx) {
//         this.letters[idx] = letter.toUpperCase();
//       }.bind(this)
//     );
//   },
// };
// console.log(foo.letters);  // returns `['a', 'b', 'c', 'd', 'e']`
// console.log(foo.qux()  )   // returns `undefined`
// console.log(foo.letters);  // returns `['A', 'B', 'C', 'D', 'E']`

//7
function orderCreator(customer, item, quantity, price) {
  return {
    computeValue: () => (quantity * price),
    quantityString: () => (quantity + ' piece' + (quantity === 1 ? '' : 's')),
    customer,
    item,
    quantity,
    price,
  }
}

// function printOrderDetails(...orders) {
//   const ordersTotal = orders.reduce((totalValue, order) => {
//     return (totalValue += order.computeValue());
//   }, 0);

//   const orderQuantity = orders.reduce((totalQuantity, order) => {
//     return (totalQuantity += order.quantity);
//   }, 0);

//   orders.forEach((order) => {
//     console.log(
//       `${order.customer} ordered ${order.quantityString()}` +
//       ` of ${order.item} for $${order.price}`
//     );
//   });

//   console.log("---");
//   console.log(`Total quantity of orders is: ${orderQuantity}`);
//   console.log(`Total value of orders is: $${ordersTotal}`);
// }

// let order1 = orderCreator("Victor", "Pie", 2, 3);
// let order2 = orderCreator("Pete", "Apple", 1, 5);
// let order3 = orderCreator("Victor", "Banana", 3, 2);
// printOrderDetails(order1, order2, order3);




// Victor ordered 2 pieces of Pie for $3
// Pete ordered 1 piece of Apple for $5
// Victor ordered 3 pieces of Banana for $2
// ---
// Total quantity of orders is: 6
// Total value of orders is: $17

//8
// let personCreator = function (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
// };

// let victor = personCreator("Victor", "Reyes");

// personCreator = function (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     fullName() {
//       return `My fullname is ${this.firstName} ${this.lastName}`;
//     },
//   };
// };

// console.log(victor.fullName());
//9

// function studyAtLaunchSchool(path){
//   return function(moduleNumber) {
//     console.log ('You are on the path to ' + path + ', studying LS' + moduleNumber + '!');
//   }
// }
// let studySession = studyAtLaunchSchool('mastery');
// studySession(101);

//10
// let animal = {
//   eat() {
//     console.log('Eating');
//   }
// }
// function Cat(name) {
//   this.name = name;
// }
// Cat.prototype = animal;

// let fluffy = new Cat('Fluffles');
// console.log(fluffy.name);
// fluffy.eat();

// let cat = Object.create(animal)
// [1, 2, 3].slice(1)
// console.log([1, 2, 3].hasOwnProperty('hasOwnProperty'));
// console.log([1, 2, 3].slice(1));

//17
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   static describe() {
//     return "This creates a person object with a name.";
//   }

//   logName() {
//     return `This person's name is ${this.name}.`;
//   }
// }

// function Person(name) {
//   this.name = name;

//   this.logName = function(){
//     return `This person's name is ${this.name}.`;
//   }
// }

// Person.describe = function () {
//   return "This creates a person object with a name.";
// }

// function Vehicle(make, model) {
//   this.make = make;
//   this.model = model;
//   this.speed = 0;
// }

// Vehicle.prototype.accelerate = function() {
//   this.speed += 1;
// };

// Vehicle.prototype.stop = function() {
//   this.speed = 0;
// }

// function FastVehicle(make, model) {
//   Vehicle.call(this, make, model);
// }

// FastVehicle.prototype = Object.create(Vehicle.prototype);
// FastVehicle.prototype.constructor = FastVehicle;

// FastVehicle.prototype.accelerate = function() {
//   this.speed += 5;
// }

// let oldVehicle = new Vehicle('Datsun', 'B210');
// let newVehicle = new FastVehicle('Tesla', 'P90D');
// oldVehicle.accelerate();
// console.log(oldVehicle.speed);  // returns 5; should return 1
// newVehicle.accelerate();
// newVehicle.speed;  // returns 5
// newVehicle.stop();
// newVehicle.speed;  // returns 0

//2
// class Dog {
//   constructor(species) {
//     this.species = 'Canine';
//     this.coat = 'furry';
//   }
//   walk() {
//     console.log('Walkies!?');
//   }
// }

// class Spaniel extends Dog {
//   constructor(name) {
//     super();
//     this.name = name;
//     this.coatLength = 'short';
//   }
//   describe() {
//     console.log(`I have a ${this.coatLength} ${this.coat} coat.`);
//   }
// }
// let fido = new Spaniel('Fido');
// console.log(fido.species);
// console.log(fido.name);
// fido.walk();
// fido.describe();

// Write code that demonstrates inheritance using the class keyword. 
// Your code should demonstrate inheriting properties and methods. 
//The inheriting class should add at least one property and one method that are not defined by the superclass. 
//The new method should make use of one of the properties in the superclass.

let makeTodoList = (() => {
  return () => {
    let list = [];
    return {
      add(item) {
        list.push(item);
      },
      display() {
        list.forEach(item => console.log(item));
      }
    };
  };
// })();

// let fooList = makeTodoList();
// fooList.add('foo item1');
// fooList.add('foo item2');

// let barList = makeTodoList();
// barList.add('bar item1');

// console.log(barList.display());
// should log:
//
// bar item1
//
// instead logs:
// foo item1
// foo item2
// bar item1

function makeSerialCounter(params) {
  let seed = 0;
  return function(seedVal){
    if(arguments.length == 0) {
      return seed++;
    } else {
      seed = seedVal;
      seed += 1;
      return seed
    }
  }
}

//     Calling the function with no arguments returns the current value of the seed and increments the seed value by 1.

//     Calling the function with an integer sets the current value of the seed to the integer passed.
// It returns the current value of the seed and increments the seed value by 1.

// There is no need to handle invalid arguments. You may assume that the argument will always be an integer.

// Here are some sample runs for the expected behavior:

> let counter = makeSerialCounter();
> counter()
= 0
> counter()
= 1
> counter()
= 2
> counter(0)
= 0
> counter()
= 1
> counter(1000)
= 1000
> counter()
= 1001
> counter()
= 1002