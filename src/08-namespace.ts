// Namespace Global

const SECRET: string = `12345`;
const PI: number = 3.141592;

const getPass = (name: string, age: number) => `${name}${age}`;
const isEmpty = <T>(data: T): boolean => !data;

// Define Namespace

namespace Utils {
  export const SECRET: string = `12345`;
  const PI: number = 3.141592;

  export const getPass = (name: string, age: number) => `${name}${age}`;
  const isEmpty = <T>(data: T): boolean => !data;
}

// no Error
const myPass = Utils.getPass("Mary", 34);

//Try to call method outside namespace: ERROR
// const myisEmpty = Utils.isEmpty(32)
