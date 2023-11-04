const title = "Проект: Зоомагазин Ёж";
let screens = "Простые, Сложные, Интерактивные";
const screenPrice = 500;
const rollback = 50;
const fullPrice = 1000;
const adaptive = true;

alert(
  `Представляем вашему вниманию ${title}. C форматом экрана ${screens}. По скромной цене: ${fullPrice} руб.`
);

console.log(`Купите, не пожалеете! PS: ${adaptive}.`);
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов: ${screenPrice} долларов.`);
console.log(`Стоимость разработки сайта: ${fullPrice} долларов.`);

screens = screens.toLowerCase();

console.log(screens.split(","));
console.log(fullPrice * (rollback / 100));
