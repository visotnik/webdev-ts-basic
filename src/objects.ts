// Simple object example

let user = {
  name: "Ivetta",
  age: 33,
};

// Simple object example with types
let appUser: { name: string; age: number; nickName: string } = {
  name: "Ivetta",
  age: 33,
  nickName: "webDev",
};

// нельзя в дальнейшем добавить к такому объекту еще одно поле,
// т.к. мы его не описали.
// appUser.female = "Lee"; // Property 'female' does not exist on appUser

console.log(`Simple object example with types: ${appUser.name}`);

// type - ключевое слово для оприсания объекта и его полей
type Person = {
  name: string;
  age: number;
  nickName?: string;
  getPass?: () => string;
};

// применяем типизацтю Person к другим объектам

let myUser: Person = {
  name: "Michel",
  age: 45,
  nickName: "RoboCop",
};

let myAdmin: Person = {
  name: "Dany",
  age: 41,
  getPass: () => {
    return "12345";
  },
};
console.log("применяем типизацтю Person к другим объектам =======");
console.log(myUser, myAdmin);
