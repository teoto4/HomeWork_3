/*1. Підрахунок кількості повторень кожного елемента (метод reduce)
Опис: Дано масив рядків, де можуть бути повторювані елементи.
Підрахуйте кількість кожного елемента і поверніть об'єкт, де ключі —
це елементи масиву, а значення — кількість їх повторень. */

const pinguinArray = [
  "Rico",
  "Skipper",
  "Private",
  "Kowalski",
  "Private",
  "Rico",
];

const howManyPinguin = pinguinArray.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(howManyPinguin);

/*2. Пошук найдовшого слова в масиві рядків (метод reduce)
Опис: Дано масив рядків. Знайдіть найдовше слово в масиві. */

const longestNamePinguine = pinguinArray.reduce((name, currentName) => {
  return currentName.length > name.length ? currentName : name;
});

console.log(longestNamePinguine);

/*3. Глибоке копіювання об'єкта
Опис: Дано вкладений об'єкт, що містить інформацію про користувача і його вподобання.
Створіть глибоку копію цього об'єкта так, щоб зміни в копії не зачіпали оригінал.
Перевірте, що зміни в копії не впливають на оригінал.*/

const user = {
  name: "John",
  age: 30,
  preferences: {
    favoriteColor: "blue",
    hobbies: ["reading", "gaming"],
  },
};

const userCopy = JSON.parse(JSON.stringify(user));
userCopy.name = "Petr";
userCopy.preferences.favoriteColor = "red";
console.log(userCopy);
console.log(user);

/*4. Поверхневе копіювання з додаванням властивостей
Опис: Дано об'єкт, що представляє книгу.
Створіть нову копію цього об'єкта і додайте до нього нову властивість — рейтинг книги.
При цьому зміни в новій копії не повинні впливати на оригінальний об'єкт. */
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};

const copyBook = { ...book, rating: 5.0 };
console.log(book);
console.log(copyBook);

/*5. Підрахунок частоти елементів
Опис: Дано масив чисел. Використовуйте об'єкт Map для підрахунку частоти кожного числа в масиві.
Поверніть об'єкт Map, де ключами будуть числа з масиву, а значеннями — їх частота */

const numbers = [1, 2, 3, 2, 4, 3, 3, 5, 1, 4];

const numberMap = numbers.reduce((map, currentNumber) => {
  if (map.has(currentNumber)) {
    map.set(currentNumber, map.get(currentNumber) + 1);
  } else {
    map.set(currentNumber, 1);
  }
  return map;
}, new Map());

console.log(numberMap);
