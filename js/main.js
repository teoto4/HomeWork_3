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
