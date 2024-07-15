// event loop - call stack, web api, callback queue
// call stack - keep track of what is being executed currently
// web api - async api, handle asynchronous operations in a non-blocking way
// callback queue - maintain the async callbacks, push callbacks to call stack if the call stack is empty.

// instance methods vs static methods

// function foo() {
//   setTimeout(() => {
//     console.log(1);
//   }, 0);
// }

// console.log("before");
// foo();
// foo();
// console.log("after");

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// console.log(3);
// setTimeout(() => {
//   console.log(4);
// }, 0);

// console.log(5);

// function foo() {
//   for (var i = 0; i < 5; i++) {
//     function foo2(number) {
//       setTimeout(() => {
//         console.log(number);
//       }, number * 1000);
//     }
//     foo2(i);
//   }
// }

// foo();

// const getData = (id, cb) => {
//   setTimeout(() => {
//     const data = "first response";
//     cb(data);
//   }, 1000);
// };

// const getData2 = (id, cb) => {
//   setTimeout(() => {
//     const data = "second response";
//     cb(data);
//   }, 1000);
// };

// const getData3 = (id, cb) => {
//   setTimeout(() => {
//     const data = "third response";
//     cb(data);
//   }, 1000);
// };

// callback hell
// getData(1, (data) => {
//   console.log(data);
//   getData2(data, (data) => {
//     console.log(data);
//     getData3(data, (data) => {
//       console.log(data);
//       getData3(data, (data) => {
//         console.log(data);
//         getData3(data, (data) => {
//           console.log(data);
//           getData3(data, (data) => {
//             console.log(data);
//           });
//         });
//       });
//     });
//   });
// });

// promise - pending, fulfilled, rejected
// const p = new Promise((resolve, reject) => {
//   reject(1);
// });

// p.then(
//   (value) => {
//     console.log(value);
//     return 2;
//   },
//   (err) => {
//     console.log("then", err);
//     throw Error("new error");
//   }
// )
//   .then((value) => {
//     console.log(value);
//   })
//   // .catch((err) => {
//   //   console.log("catch", err);
//   // })
//   .finally(() => {
//     console.log("finally");
//   });

// async await
// syntax suger

// async function foo() {
//   try {
//     console.log("before promise");
//     const p = await new Promise((resolve, reject) => {
//       console.log("in promise");

//       resolve(1);
//     }); // blocking
//     console.log("after promise");
//     console.log(p);
//   } catch (err) {
//     console.log("err", err);
//   }
// }

// console.log("before");
// foo();
// console.log("after");

const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (data) => data.json()
);
const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
  (data) => data.json()
);
const promise3 = fetch("https://jsonplaceholder.typicode.com/todos/3").then(
  (data) => data.json()
);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
