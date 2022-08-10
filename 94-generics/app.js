// https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 5, 7, 4, 2, 9];
var randomEle = getRandomElement(numbers);
console.log(randomEle);
