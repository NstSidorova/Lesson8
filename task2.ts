// Написать функцию, которая складывает все четные числа и возвращает результат

const array: number[] = [4, 33, 45, 20, 57, 0, 2];

const sumEven = (arr: number[]) => {
  return arr.reduce((acc, value) => (value % 2 ? acc : acc + value), 0);
};
console.log(sumEven(array));
