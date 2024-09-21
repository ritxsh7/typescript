

// generic function
function getRandomItem<T>(items: T[]): T{
    let randomIndex: number = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers: number[] = [11, 32, 12, 23, 7, 34];
console.log(getRandomItem(numbers));

let fruits: string[] = ['apple', 'mango', 'grapes', 'chikkoo', 'banana'];
console.log(getRandomItem(fruits));
