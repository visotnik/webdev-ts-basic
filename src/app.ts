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
