// primitive types
let number: number = 1;
let str: string = "1";
let bool: boolean = true;
let u: undefined = undefined;
let n: null = null;

// object types

// array
let numberArr: number[] = [1, 2, 3];
let strArr: string[] = ["1", "2", "3"];

// object

// anonymous
let person: { name: string; id: number } = {
  name: "nicole",
  id: 1,
};

// type alias
// type TPerson = {
//   name: string;
//   id: number;
// };

// let person2: IPerson = {
//   name: "nicole",
//   id: 2,
// };

// // interface
// interface IPerson {
//   name: string;
//   id?: number;
// }

// function

function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

const add3: TAddFn = (x, y) => x + y;

type TAddFn = (x: number, y: number) => number;

interface IAddFn {
  (x: number, y: number): number;
}

// union
type TAge = number | string | boolean;
let age: TAge = 1;
age = "1";

// literal type with union
type Direction = "north" | "south" | "east" | "west";
let direction: Direction = "east";

// any - disable typescript
// unknown - the data can be anything, you need to do some type checking
function foo(data: unknown) {
  if (typeof data === "string") {
    return "data is a string";
  }
  if (typeof data === "number") {
  }
}

// extend from other types
type TPerson = {
  name: string;
};

type TStudent = TPerson & {
  studentId?: number;
};

let student: TStudent = {
  name: "nicole",
};

student.studentId = 1;

interface IPerson {
  name: string;
}

interface IStudent extends IPerson {
  studentID?: number;
}

// generic type
function toNumberArr(x: number, y: number): number[] {
  return [x, y];
}

function toStringArr(x: string, y: string): string[] {
  return [x, y];
}

function toArr<T>(x: T, y: T): T[] {
  return [x, y];
}

toArr<number>(1, 2);

// tuple - an array with defined length and type of elements
let arr: [number, string, () => void] = [1, "2", () => {}];

// interface Response {
//   data: any[];
//   title: string;
//   header: string;
//   totalNumber?: number;
//   start?: number
// }
