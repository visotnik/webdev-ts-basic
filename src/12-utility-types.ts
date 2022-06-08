// Readonly Type
console.log(`= = = = = = = = = = = Readonly Type`);

interface UserReadonly {
  name: string;
}

const someUser: Readonly<UserReadonly> = {
  name: "somebody",
};

// someUser.name = 'den' // Error: Cannot assign to 'name' because it is a read-only
console.log(`someUser = `, someUser);

// ------------------------------------
// Required Type
console.log(`= = = = = = = = = = = Required Type`);

interface PropsRequired {
  a?: number;
  b?: string;
}

const obj1: PropsRequired = { a: 5 }; // ok
console.log(`obj1 = `, obj1);
// const obj2: Required<PropsRequired> = { a: 5 }; // Property 'b' is missing

// ------------------------------------
// Record<K, T>
console.log(`= = = = = = = = = = = Record Type`);

interface PageInfo {
  title: string;
}

// обязательные свойства
type Page = "home" | "about" | "contact";

const x1: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

console.log(`x1 = `, x1);

// ------------------------------------
// Pick<T, K>
console.log(`= = = = = = = = = = = Pick<T, K>`);

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

console.log(`todo = `, todo);

// ------------------------------------
// Omit<T, K>
// удаляет ненужные свойства у интерфейса при создании объекта
console.log(`= = = = = = = = = = = Omit<T, K>`);

interface Todoshka {
  title: string;
  description: string;
  completed: boolean;
}

type TodoOmit = Omit<Todoshka, "description">;

const todoshka: TodoOmit = {
  title: "Clean room",
  completed: false,
};

console.log(`todoshka = `, todoshka);

// ------------------------------------
// Exclude<T, U>
// исключает из создаваемого типа, типы переданные вторым аргументом U
console.log(`= = = = = = = = = = = Exclude<T, U>`);

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// Extract<T, U>
// оставляет только переданные свойства
type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () => void

// NonNullable<T>
// выбрасывает из типа все несуществующие типы
type T5 = NonNullable<string | number | undefined>; // string | number
type T6 = NonNullable<string[] | null | undefined>; // string[]

// ReturnType<T>
// создает тип из возвращаемого функцией типа

declare function f1(): { a: number; b: string }; // see T14

type T10 = ReturnType<() => string>; // string
type T11 = ReturnType<(s: string) => void>; // void
type T12 = ReturnType<<T>() => T>; // {}
type T13 = ReturnType<<T extends X, X extends number[]>() => T>; // number[]
type T14 = ReturnType<typeof f1>; // { a: number, b: string }
type T15 = ReturnType<any>; // any
type T16 = ReturnType<never>; // any
// type T17 = ReturnType<string>; // Error
// type T18 = ReturnType<Function>; // Error

// InstanceType<T>
// создает тип из типа экземпляра функции конструктора

class C {
  x = 0;
  y = 0;
}

type T20 = InstanceType<typeof C>; // C
type T21 = InstanceType<any>; // any
type T22 = InstanceType<never>; // any
// type T23 = InstanceType<string>; // Error
// type T24 = InstanceType<Function>; // Error
