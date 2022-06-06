// Simple class example

class SimpleUser {}

// Class types

class MyUser {
  name: string;
  age: number;
  nickName: string;

  constructor(name: string, age: number, nickName: string) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
  }
}

const ivan = new MyUser("Ivan", 32, "rocketMan");
console.log("MyUser = ", ivan);

// Class types modificators

class ModUser {
  public name: string;
  private age: number; // доступ можно получить только из самого класса
  protected nickName: string; // доступ можно получить из класса наследника
  readonly pass: number; // доступен только для чтения

  constructor(name: string, age: number, nickName: string, pass: number) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.pass = pass;
  }

  getPass(): string {
    return `${this.pass}`;
  }
}

const sancho = new ModUser("Sancho", 29, "sender", 123);
console.log("ModUser = ", sancho);
console.log("ModUser, getPass = ", sancho.getPass());

// Minimization of Class code
// set

class MiniUser {
  constructor(
    public name: string,
    // private
    private age: number,
    public nickName: string,
    public pass: number
  ) {}

  getPass(): string {
    return `${this.pass}`;
  }

  // classic setter
  setAge(age: number) {
    this.age = age;
  }
  // typescript setter with set
  set setterAge(age: number) {
    this.age = age;
  }
}

const rick = new MiniUser("Rick", 29, "biller", 823);
console.log("MinimumUser = ", rick);
console.log("MinimumUser, getPass = ", sancho.getPass());
rick.setAge(99);
console.log("rick.setAge(99) = ", rick);
rick.setterAge = 88;
console.log("rick.setterAge = 88 = ", rick);
