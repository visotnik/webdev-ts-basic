// Simple Class example

class User {
  static secret = 12345; // static property (only TypeScript syntaxis)
  private nickName: string = "splashDev";

  constructor(public name: string, public age: number) {}

  getPass(): string {
    return `${this.name}${User.secret}`;
  }
}
// User.secret = 12345 // JS syntaxis

const john = new User("John", 23);

console.log(`new User('John',23) = `, john);
console.log(`John getPass() = `, john.getPass());

class Mary extends User {
  name: string = "Mary"; // определяем постоянное имя

  constructor(age: number) {
    super(Mary.name, age);
  }

  getPass(): string {
    return `${this.age}${this.name}${User.secret}`;
  }
}

const max = new User("Max", 43);
const mary = new Mary(28);
console.log("new Mary(28) = ", mary);
console.log("mary.getPass() = ", mary.getPass());
