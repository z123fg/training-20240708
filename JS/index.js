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

foo();
function foo() {} // will do hoisting

foo2();
var foo2 = () => {}; // no hoisting

foo3();
var foo3 = function () {}; // function expression, no hoisting

// closure, create private variables

function add() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const obj = add();

obj.increment();
obj.increment();
obj.decrement();
