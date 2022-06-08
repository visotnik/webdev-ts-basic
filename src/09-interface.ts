// Simple interface exapmle
// описание абстрактного объекта
// именованый тип объекта
// interface может наследоваться extends и расширяться implements
// описываем структуру объекта / класса:

interface UserInterface {
  readonly id: number; // задается толькоко при создании, нельзя изменять
  name: string;
  age?: number; // необязательное свойство при создании объекта
  [propName: string]: any; // даем возможность расширять объект любыми свойствами
}

// механизм создания псевдоним для любого типа,
// включая примитивы
// описываем структуру объекта:
// type UserType {
//     name: string,
//     age: number,
// }
// O B J E C T
// создаем ОБЪЕКТ на основе interface UserInterface
const nina: UserInterface = {
  id: 457,
  name: "Nina",
  age: 23,
  //    nickName: 'solo', // нельзя добавить свойство, отсутствующее в interface UserInterface
};
// readonly id: number - свойство объекта id изменять нельзя
// nina.id = 9

console.log(`const nina =`, nina);

// C L A S S
// интерфейс для создания класса определяет минимальное
// количество параметров
// в классе созданном на основе интерфейса может быть
// любое количество дополнительных параметров
interface CarInterface {
  readonly id: number; // задается толькоко при создании, нельзя изменять
  brand: string;
  model: string;
  year: number; // необязательное свойство при создании объекта

  getWinCode(): string; // необязательный метод для класса
}

// interface with one method
interface FullName {
  getFullName(): string;
}

// мы можем расширять интерфейс другим интерфейсом
// в CarTruck теперь все поля и методы из интерфейса CarInterface
interface CarTruck extends CarInterface {
  cargo: number;

  takeOnBoard(): boolean;
}

// создаем CLASS на основе interface CarInterface
// ключевое слово  implements
// мы можем создать class на основании нескольких интерфейсов
class Mercedess implements CarInterface, FullName {
  constructor(win: number) {
    this.win = win;
  }
  // обязательные параметры
  id = 11152;
  brand = "Mercedess";
  model = "560SEC";
  year = 1989;
  // дополнительные необязательные параметры
  win;
  type = "coupe"; // нельзя добавить свойство, отсутствующее в interface UserInterface
  vehicleId = "w126";

  // обязательный метод
  getWinCode() {
    return `${this.id}${this.model}${this.type}`;
  }
  getFullName() {
    return `${this.brand} ${this.model} ${this.vehicleId} ${this.type}`;
  }
  // необязательный метод
  getId() {
    return `${this.id}`;
  }
}
const mercedess = new Mercedess(126);
console.log(`obj mercedess`, mercedess);
console.log(`obj mercedess.getWinCode(): `, mercedess.getWinCode());
console.log(`obj mercedess.getId(): `, mercedess.getId());
console.log(`obj mercedess.getFullName(): `, mercedess.getFullName());
console.log(`class Mercedess`, Mercedess);
