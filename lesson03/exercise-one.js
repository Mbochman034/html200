let fruits = ['Apple',  'Orange', 'Grape', 'Pineapple', 'Kiwi'];
console.log(fruits);

fruits.push('Banana');
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

const fruitsList = fruits.join(', ');
console.log(fruitsList);