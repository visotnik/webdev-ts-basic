// Namespace Global

const SECRET: string = `12345`;
const PI: number = 3.141592;

const getPass = (name: string, age: number) => `${name}${age}`;
const isEmpty = <T>(data: T): boolean => !data;

// Define Namespace

namespace Utils {
  const SECRET: string = `12345`;
  const PI: number = 3.141592;

  const getPass = (name: string, age: number) => `${name}${age}`;
  const isEmpty = <T>(data: T): boolean => !data;
}

//Try to call method outside namespace
//const myPass = Utils.getPass("Mary", 34);
