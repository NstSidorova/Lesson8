// Напишите функцию, которая проверяет не содержит ли слово повторяющихся букв

const str1 = "Android";
const str2 = "Iphone";

const noDuplicates = (word: string) => new Set(word.toLocaleLowerCase()).size === word.length;
console.log(noDuplicates(str1));
console.log(noDuplicates(str2));
