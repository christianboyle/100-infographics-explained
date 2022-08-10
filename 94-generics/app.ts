// https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];

let randomEle = getRandomElement(numbers); 

console.log(randomEle);