// Function example
const createPassword = (name: string, age: number | string) => {
  return `${name}${age}`;
};

console.log("function result = ", createPassword("Jack", 31));

// Function with optional argument 'age'
// age может быть задан, но не обязательно (обработка внутри функции)
// age?: number | string
const createPasswordOptional = (
  name: string,
  age?: number | string
): string => {
  if (age === undefined) age = 0;
  return `${name}${age}`;
};

console.log("function optional result = ", createPasswordOptional("Maxi", 23));

// остаточные параметры Rest (...args)
console.log("остаточные параметры Rest (...args) ==============");

// (): string - функция возвращает type string данные
const createSkills = (name: string, ...skills: Array<string>): string => {
  return `${name}, my skills are ${skills.join()}`;
};
console.log(createSkills("Olga", "HTML", "CSS", "JavaScript", "Git"));

// (): void - функция не возвражает никаких значений
const sayHello = (): void => {
  console.log("sayHello = ():void --", "Hello!");
};
sayHello();

// (): never - функция возвращает ошибку или выполняется постоянно
const msgError = "error!!!";
const errorWatcher = (msgError: string): never => {
  throw new Error(msgError);
};

// (): never - функция выполняется постоянно, например бесконечный цикл
const infinityLoop = (): never => {
  while (true) {
    let a = 0;
  }
};

// присвоение функции в другую функцию
console.log("присвоение функции в другую функцию ==============");

let myFunc: (firstArg: string) => void;
// let myFunc;

function oldFunc(name: string): void {
  console.log(`Hello ${name}, nice to meet you!`);
}
myFunc = oldFunc;
myFunc("bbb");
