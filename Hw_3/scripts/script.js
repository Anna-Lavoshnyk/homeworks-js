// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} Fiz`);
  }
  if (i % 2) {
    console.log(`${i} Buz`);
  }
  if (i % 3) {
    console.log(`${i} FizBuz`);
  }
}

// 2) Написати логіку знаходження факторіалу числа 10.

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
console.log(factorial(10));

// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?
var sheets = 500;
var usedSheets = 1200;
var weeks = 8;

var usedSheetsPer8Weeks = usedSheets * weeks;
var requiredNumberOfPacks = Math.ceil(usedSheetsPer8Weeks / sheets);
console.log(requiredNumberOfPacks);

// 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3

var floors = 9;
var apartmentsPerFloor = 3;
var apartment = prompt("Введите номер квартиры");

var floor = Math.ceil(apartment / apartmentsPerFloor);
var porch = Math.ceil(floor / floors);
floor -= (porch - 1) * floors;
console.log(
  "Квартира №" +
    apartment +
    " находится в подъезде № " +
    porch +
    " на " +
    floor +
    " этаже"
);

// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків

for (let i = 1; i < 10; i++) {
  for (let j = i; j < 10; j++) {
    document.write("&nbsp");
  }
  for (let k = 0; k < i; k++) {
    document.write("*");
  }
  document.write("<br/>");
}
