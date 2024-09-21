// generic function
function getRandomItem(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [11, 32, 12, 23, 7, 34];
console.log(getRandomItem(numbers));
var fruits = ['apple', 'mango', 'grapes', 'chikkoo', 'banana'];
console.log(getRandomItem(fruits));
