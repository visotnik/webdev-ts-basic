// Abstract class example

abstract class UserAbstract {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(this.name);
  }

  abstract getPass(): string; // Abstract method
}

// Cannot create an instance of an abstract class
// const maxim = new UserAbstract ("Maxim", 20);

// Create class using Abstraction
class Yauhen extends UserAbstract {
  // Non-abstract class 'Yauhen' does not implement inherited abstract member 'getPass' from class 'User'

  name: string = "Yauhen";

  constructor(age: number) {
    super(Yauhen.name, age);
  }

  getPass(): string {
    return `${this.age}${this.name}`;
  }
}

const yauhen = new Yauhen(34);
console.log(`new Yauhen(34) = `, yauhen);
console.log(`yauhen.greet() = `, yauhen.greet());
console.log(`yauhen.getPass() = `, yauhen.getPass());
