"use strict";

let title = "Проект: Зоомагазин Ёж";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
const rollback = 50;
const fullPrice = 1000;
let adaptive = true;

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

console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));

//Урок №3

title = prompt("Как называется ваш проект?");
screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
screenPrice = parseFloat(
  prompt("Сколько будет стоить данная работа?").replace(",", `.`)
);

adaptive = confirm("Нужен ли адаптив на сайте?");

console.log(adaptive);
