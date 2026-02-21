// ?Маємо масив чисел:
// Витягни перший та третій елемент у змінні a та b через деструктуризацію.
// const numbers = [5, 10, 15, 20];
// const [first, ,third, ...rest] = numbers;
// console.log(first, third, rest);

// ?Маємо об’єкт користувача:
// Витягни name і city у змінні userName та userCity.
// const user = { name: 'Sergiy', age: 22, city: 'Kyiv' };
// const user = { name: 'Sergiy', age: 22, city: 'Kyiv' };
// const { name, city } = user;

// console.log(`userName: ${name}, userCity: ${city}`);


// ?Масив об’єктів:
// Витягни name другого користувача у змінну secondUserName.
const users = [
  { name: 'Sergiy', age: 22 },
  { name: 'Olga', age: 25 },
];

const [, {name: secondUserName,}] = users;
console.log(secondUserName);

const [, {name, age}] = users;
console.log(name, age);



//? Витягни перший і останній елемент у змінні firstScore та lastScore.
const data = { scores: [10, 20, 30, 40] };

const { scores } = data;
const [first, , , last] = scores;

// const { scores: [first, , , last] } = data;

// console.log(first, last);

console.log(first, last);

// Напиши функцію sumCoordinates, яка приймає об’єкт:
// і повертає суму x + y через деструктуризацію параметрів.

// sumCoordinates({ x: 5, y: 10 });

// function sumCoordinates(sum) {
//   // return sum = x + y
//   const { x, y } = sum;
//   return x + y;
  
// }
// console.log(sumCoordinates({ x: 3, y: 654 }));

function sumCoordinates({ x, y }) {
  return x + y;
}

console.log(sumCoordinates({ x: 5, y: 10 }));











