// ================================= JS1 =================================
/*
primitive data types

number
string
boolean
null
undefined

bigint
symbol
*/

// console.log(typeof 1);
// var number = 1;
// console.log(typeof number);
// console.log(typeof undefined);

// var obj = {};
// var arr = [];
// function foo() {}

// var obj2 = Object.create(obj);
// console.log(obj);
// console.log(obj2);

// console.log(typeof null);

// let a = "a";
// obj.a = 1;
// obj.b = 2;
// console.log(obj.a);
// console.log(obj["a"]);

// Object.keys(obj);
// Object.values(obj);
// console.log(Object.entries(obj));
// // [[a, 1], [b, 2]]

// let arr = [1, '1', true, function(){}]
// arr[arr.length-1]

// for
// while
// arr.forEach
// arr.map

// function foo(input) {
//   // pass by value
//   input = 2;
//   console.log(input); // 2
// }

// let num = 1;
// foo(num);
// console.log(num); //1

// function foo2(input) {
//   // pass by reference
//   input.name = "adam";
//   console.log(input); // adam
// }

// let person = {
//   name: "nicole",
// };
// foo2(person);
// console.log(person); // adam

// let a = 1;
// let b = a;
// let c = b;
// b = 5;
// console.log(a, b, c);

// let obj = {
//   a: 1,
// };

// let obj2 = obj;
// obj2.a = 2;
// console.log(obj, obj2); // 000001, 000001

// console.log(1 === 1);
// console.log({} === {}); // 000002, 000003

// coercion (implicit)
// console.log(1 == "1");

// // coercion (explicitly)
// let str = "1";
// let num = parseInt(str);
// let newStr = num.toString();
// console.log(typeof newStr);

//           var       |      let    |      const
// scope:    function       block          block
// hoisting: yes            no             no
// redeclare:yes            no             no
// reassign: yes            yes            no

// function foo() {
//   var a;
//   console.log(a);
//   if (true) {
//     var a = 1;
//     a = 2;
//   }
//   console.log(a);
// }

// foo();

// function foo2() {
//   // console.log(a);

//   if (true) {
//     let a = 1;
//     a = 2;
//   }
//   // console.log(a);
// }

// foo2();

// // var a = 1;

// // // after 100 lines

// // var a = 100;

// // const a = 1;
// // a = 2;

// const b = {};
// // b = {};
// b.a = 1;
// b.a = 2;

// foo();
// function foo() {} // will do hoisting

// foo2();
// var foo2 = () => {}; // no hoisting

// foo3();
// var foo3 = function () {}; // function expression, no hoisting

// // closure, create private variables

// function add() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//     decrement: function () {
//       count--;
//       console.log(count);
//     },
//   };
// }

// const obj = add();

// obj.increment();
// obj.increment();
// obj.decrement();

// ================================= JS2 =================================

// ES - ECMAScript: syntax standard, you cannot use it alone, es6 (2015)
// JavaScript - ECMAScript + WebApi
// NodeJS - ECMAScript + NodeApi

// ES6
// rest operator, spread operator, destructuring, arrow function, string template, for ... of, promise, class

// rest operator ... : collect arguments and put them into one array

// function foo(val1, val2, ...args) {
//   console.log(arguments); // array-like object
//   console.log(val1, val2, args);
// }

// foo(1, 2, 3, 4, 5, 6, 7);

// spread operator ...
// shallow copy: the properties will point to the same reference as the original one (objects)
// deep copy: 1. create a function, use for loop, while loop, recursion
// 2. lodash
// 3. JSON.stringify, JSON.parse

// const person = {
//   name: "nicole",
//   phone: 123123,
//   address: {
//     street: "123123",
//     city: "xxx",
//   },
//   foo: () => {},
//   date: new Date(),
// };

// const person1 = {
//   name: person.name,
//   phone: person.phone,
//   address: person.address,
// };

// const person2 = { ...person };

// console.log(person.address === person2.address);

// const arr = [1, 2, 3, [4]];
// const arr2 = [...arr];
// const arr3 = [10, ...arr, 0, ...arr2, 9];
// console.log(arr3);

// const person3 = JSON.parse(JSON.stringify(person));
// // console.log(person);
// console.log(person3);

// destructuring
// const person = {
//   name: "nicole",
//   phone: "0000000000",
//   address: {
//     street: "123123",
//     city: "xxx",
//   },
//   foo: () => {},
//   date: new Date(),
// };

// const name = person.name;
// const phone = person.phone;
// const arr = [1, 2, 3, [4]];
// const { name, phone: phone1 } = person;
// const [val1, _, val3] = arr;

// console.log(name, phone1);
// console.log(val1, val3);

// arrow function vs function
// 1. syntax
// 2. "this"
// 3. arguments

// const obj = {
//   name: "nicole",
//   foo() {
//     console.log(this);
//   },
// };

// obj.foo();

// const obj2 = {
//   name: "nicole",
//   foo: () => {
//     console.log(this);
//   },
// };
// window.foo();

// console.log(this);

// function foo() {
//   console.log(this);
// }

// foo();

// const obj = {
//   name: "nicole",
//   foo() {
//     console.log(this);
//     const foo2 = () => {
//       console.log(this);
//     };
//     foo2();
//   },
// };

// obj.foo();

// bind
// this.x = 9;
// const module = {
//   x: 81,
//   getX() {
//     return this.x;
//   },
// };

// // The 'this' parameter of 'getX' is bound to 'module'.
// console.log(module.getX()); // 81

// const retrieveX = module.getX;
// // The 'this' parameter of 'retrieveX' is bound to 'globalThis' in non-strict mode.
// console.log(retrieveX()); // 9

// // Create a new function 'boundGetX' with the 'this' parameter bound to 'module'.
// const boundGetX = retrieveX.bind(module);
// console.log(boundGetX()); // 81

// call (receives this, and arguements), apply (receives this, and arguments in an array)

// const foo = (val1, val2) => {
//   console.log(arguments);
// };

// foo(1, 2);

// const obj = {
//   name: "nicole",
//   greeting() {
//     console.log(`hello ${this.name}`);
//   },
// };

// obj.name = "adam";
// obj.greeting();

// for...of: iterate over an iterable object
// iterable: array, map, set, nodelist, string
// for..in: iterate over enumarable properties of an object
// const arr = [1, 2, 3];
// // for (const element of arr) {
// //   console.log(element);
// // }

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// // for (const element of Object.entries(obj)) {
// //   console.log(element);
// // }

// for (const element in arr) {
//   console.log(element);
// }
// console.log(arr);

// ================================= JS3 =================================
// const p = {
//   greeting() {
//     console.log(`hello ${this.name}`);
//   },
// };

// const person = {
//   name: "nicole",
//   __proto__: p,
// };

// const person2 = {
//   name: "adam",
//   __proto__: p,
// };

// person.phone = "00000";

// // person.__proto__.greeting = function () {
// //   console.log(`hello ${this.name}`);
// // };
// console.log(person);
// person.greeting();

// person2.greeting();

// const obj = {
//   a: 1,
//   b: 1,
//   __proto__: {
//     b: 2,
//   },
// };

// console.log(obj.b);

// constructor function
// function Person(name) {
//   this.name = name;
//   this.greeting = function () {
//     console.log(`hello ${this.name}`);
//   };
// }

// class Person
// person1 is an instance of Person
// person2 is also an instance of Person
// person1.__proto__.phone => this is adding the phone property on Person class

// const person1 = new Person("nicole");
// const person2 = new Person("adam");
// console.log(person1);
// person1.greeting();

// person1.__proto__.phone = "000000";
// Person.prototype.walk = function () {
//   console.log(`${this.name} is walking...`);
// };

// console.log(person1);
// person1.walk();
// console.log(person2);

// // factory function
// function Person2(name) {
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function () {
//     console.log(`hello ${this.name}`);
//   };
//   return obj;
// }

// const p1 = Person2("nicole");
// console.log(p1);

// class keyword
// inheritance, encapsulation, abstraction, polymorphism
// inheritance - super, extends
// encapsulation - hide information from public, make some variables to be private
// abstraction - no instance, used for inheritance, not supported in Javascript
// polymorphism - no overloading, but we do have overriding

// class Person {
//   #age;
//   constructor(name, age) {
//     this.name = name;
//     this.#age = age;
//   }

//   greeting() {
//     console.log(`hello ${this.name}`);
//   }

//   // greeting(name2){
//   //   console.log(`hello ${this.name} and ${name2}`);
//   // }

//   get age() {
//     console.log("in getter");
//     return this.#age;
//   }

//   set age(newAge) {
//     console.log("in setter");
//     this.#age = newAge;
//   }
// }

// const p1 = new Person("nicole");
// console.log(p1);
// p1.greeting("adam");

// class Student extends Person {
//   constructor(name, age, id) {
//     super(name, age);
//     this.id = id;
//   }

//   greeting() {
//     console.log(`hello student ${this.name}`);
//   }
// }

// const s1 = new Student("nicole", 18, 1);
// console.log(s1.age);
// s1.greeting();

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// arr.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

// arr.__proto__.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };

// arr.myForEach((value, index, array) => {
//   console.log(value, index, array);
// });

// homework: filter, map, reduce, find, slice, splice, push, pop

const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2, "nicole");
// console.log(removedElements);
// console.log(arr);

Array.prototype.mySplice = function (start, deleteCount, ...items) {
  let tempArr = [];
  let deletedElements = [];
  if (deleteCount === undefined && items.length === 0) {
    tempArr = [...this.slice(0, start)];
    deletedElements = [...this.slice(start)];
  }
  if (deleteCount !== undefined) {
    deletedElements = this.slice(start, start + deleteCount);
    tempArr = [...this.slice(0, start), ...this.slice(start + deleteCount)];
  }

  if (items.length !== 0) {
    tempArr = [
      ...this.slice(0, start),
      ...items,
      ...this.slice(start + (deleteCount !== undefined ? deleteCount : 0)),
    ];
  }

  this.length = tempArr.length;
  tempArr.forEach((value, index) => {
    this[index] = value;
  });
  return deletedElements;
};

const removedElements = arr.mySplice(1);
console.log(removedElements); // [2,3,4,5]
console.log(arr); // [1]

// delete Array.prototype.mySplice;
// console.log(arr);
