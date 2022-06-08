// generic - обобщение типов

// обычное определение типов
const getter = (data: any): any => data;

console.log(`getter =`, getter(2).length); // undefined
console.log(`getter =`, getter("test").length); // 4

// определение типов generic
const getter1 = <T>(data: T): T => data;

// Property 'length' does not exist on type '2'
// console.log(getter1(2).length); // error
console.log(`getter1 =`, getter1("test").length); // 4

// we can define type in function calling
// getter1<number>(10).length; // error
console.log(`getter1 =`, getter1<string>("rio").length); // 3

// =============================================

// Generic with Simple class example

class UserGeneric<T> {
  constructor(public name: T, public age: T) {
    (this.name = name), (this.age = age);
  }

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// получится создать или оба поля string или оба number иди другой тип
// т.к. name & age должны иметь одинаковый тип
const mara = new UserGeneric("Mara", "18"); // error - ("Mara", 18)

// ------------------------------------------
// назначаем разные общие классы
class UserGeneric1<T, K> {
  constructor(public name: T, public age: K) {
    (this.name = name), (this.age = age);
  }

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// можем принимать любые типы
const masha = new UserGeneric1("Masha", 18); // string number
const masha1 = new UserGeneric1("Masha", "18"); // string string
const masha2 = new UserGeneric1(22, 18); // number number

// ------------------------------------------
// назначаем разные общие классы, но K = number

class UserGeneric2<T, K extends number> {
  constructor(public name: T, public age: K) {
    (this.name = name), (this.age = age);
  }

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// поле возраст только number
const rima = new UserGeneric2("Rima", 36);
