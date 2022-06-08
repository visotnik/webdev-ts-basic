// simple class example & decorators

// Class Decorator

// декоратор принимает 1 аргумент у декорируемого метода
const logClass = (constructor: Function) => {
  console.log("@Decorator Class:\n", constructor);
};

@logClass
class UserDecorator {
  constructor(public name: string, public age: number) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}
// ------------------------------------
// Property Decorator

// декоратор принимает 2 аргумента у декорируемого метода
const logProperty = (target: Object, propertyKey: string | symbol) => {
  console.log("@Decorator Property:\n", propertyKey);
};

class UserDecorator1 {
  @logProperty
  secret: number;

  constructor(public name: string, public age: number, secret: number) {
    this.secret = secret;
  }

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// ------------------------------------
// Method Decorator

// декоратор принимает 3 аргумента у декорируемого метода
const logMethod = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log("@Decorator Method:\n", propertyKey);
};

class UserDecorator2 {
  constructor(public name: string, public age: number) {}

  @logMethod
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// ------------------------------------
// Accessor Decorator (Get / Set)
// декоратор принимает 3 аргумента у декорируемого метода
const logSet = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(`= = = = = = = = = = = = = = = = =`);
  console.log("@Decorator Setter (target: Object):\n", target);
  console.log(
    "@Decorator Setter (propertyKey: string | symbol):\n",
    propertyKey
  );
  console.log(
    "@Decorator Setter (descriptor: PropertyDescriptor):\n",
    descriptor
  );
};

class UserDecorator3 {
  constructor(public name: string, public age: number) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
  @logSet
  set setAge(age: number) {
    this.age = age;
  }
}

const test = new UserDecorator3("Filya", 13);

console.log(`test obj \n`, test.hasOwnProperty("age"));
// for (let key in test) {
//   console.log(`property ${key} = `, test[key]);
// }

// ------------------------------------
console.log(`= = = = = = = = = = = Factory Decorator`);
// Factory Decorator

//Factory
function factory(value: any) {
  // Decorator
  return function (target: any) {
    //Decorator logic
    console.log(target);
  };
}

// здесь возвращаем функцию, которая изменяет свойство объекта
// Object.defineProperty(obj, prop, descriptor)
// https://learn.javascript.ru/descriptors-getters-setters
// descriptor – объект, который описывает поведение свойства
// В нём могут быть следующие поля:
// value – значение свойства, по умолчанию undefined
// writable – значение свойства можно менять, если true.
// configurable – если true, то свойство можно удалять
// enumerable – если true, то свойство просматривается в цикле
// get – функция, которая возвращает значение свойства.
// set – функция, которая записывает значение свойства.

const enumerable = (value: boolean) => {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.enumerable = value;
    console.log(`descriptor.enumerable:\n`, descriptor.enumerable);
  };
};

class UserDecorator4 {
  constructor(public name: string, public age: number) {}

  // передаем значение false в декоратор enumerable и выполняем его
  @enumerable(false)
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

const testObj4 = new UserDecorator4("Sveta", 19);
console.log(Object(testObj4));

// ------------------------------------
console.log(`= = = = = = = Decorator composition syntax`);
// Decorator composition syntax

// Example of two factory decorators
const first = () => {
  console.log("first() completing");
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    console.log("first() called");
  };
};

const second = () => {
  console.log("second() completing");
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    console.log("second() called");
  };
};

// Apply and call two factory decorators
class UserComposition {
  constructor(public name: string, public age: number) {}

  @first()
  @second()
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}
