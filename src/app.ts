// 1. Инициализация
// npm init -y
// npm install typescript --save-dev
// npm i -g typescript

// 2. Настройка проекта
// https://www.youtube.com/watch?v=7NU6K4170As
// tsc --init - tscongig.json
// "rootDir": "./src" /* Specify the root folder within your source files. */,
// "outDir": "./dist" /* Specify an output folder for all emitted files. */,

// 3. Запуск проекта
// tsc app.ts - компиляция
// tsc --watch - автообновление при сохранении

// 01 Simple Types ==============================================

// простые типы js
// number, string, boolean, null, undefined, object, Symbol, BigInt

let message: string = "Hello world!!!";
console.log(message);
// нельзя переназначать тип для переменной:
// message = 43 // Type 'number' is not assignable to type 'string'

// Void Type
// Функция, которая не возвращает значение, а просто что-то делает
// является функций с типом void

const printString = (): void => {
  const str: string = "printing one string";
  console.log(str);
};
printString();

// 02 Types TS ==============================================

let list: number[] = [1, 2, 3]; // array number type
let listArray: Array<number> = [1, 2, 3]; // Generic type

let x: [string, number] = ["hello", 3]; // array tuple type

// Any Type for array
let y: [any, any] = ["goodby", 42];
let z: Array<any> = [10, "hello"];

// Any Type for string
let notSure: any = false;
notSure = 11;
notSure = "string";

// Enum Type
enum Directins {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}
console.log("Enum ======================");
console.log("Enum Directins.Up", Directins.Up);
console.log("Enum Directins.Down", Directins.Down);
console.log("Enum Directins.Left", Directins.Left);
console.log("Enum Directins.Right", Directins.Right);

// Never Type
// этот тип говорит о том, что результата от этих функций не будет.
// Function return Error ???
const msg = "hello";
const error = (msg: string): never => {
  throw new Error(msg);
};

// Object Type
const create = (o: object | null): void => {
  console.log(o);
};
create({ a: 1 });
create(null);

// Multiply types for one value
console.log("Multiply types ====================== number | string");
let id: number | string;
console.log("Multiply types - ", (id = 4));
console.log("Multiply types - ", (id = "string"));

// Type
// Пользовательские типы
type Name = string | boolean; // Custom type creation
let projectId: Name;
projectId = "42"; // no Error
// projectId = 10 // Type 'number' is not assignable to type 'string'

// 03 Enum ==============================================

console.log("Enum ======================");
console.log("Enum Directins.Up", Directins.Up, Directins[1]);
console.log("Enum Directins.Down", Directins.Down, Directins[2]);
console.log("Enum Directins.Left", Directins.Left, Directins[3]);
console.log("Enum Directins.Right", Directins.Right, Directins[4]);

// Custom mame for keys
enum links {
  youtube = "https://youtube.com",
  twitter = "https://twitter.com",
  facebook = "https://facebook.com",
}
console.log("youtube = ", links.youtube); // https://youtube.com

// const enum (with using)

const enum linksSites {
  youtube = "https://youtube.com",
  twitter = "https://twitter.com",
  facebook = "https://facebook.com",
}

// Using of enum properties
const arr = [linksSites.youtube, linksSites.facebook];
console.log("enum arr linksSites =", arr);
// ================================
