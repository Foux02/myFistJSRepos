"use strict";

let title = "Проект: Зоомагазин Ёж";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
const rollback = 50;
let fullPrice = 1000;
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

screenPrice = prompt("Сколько будет стоить данная работа?");
if (screenPrice == null) {
  screenPrice = 0;
} else if (screenPrice == "") {
  screenPrice = 0;
} else {
  screenPrice = parseFloat(screenPrice.replace(",", `.`));
}

adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");

let servicePrice1 = prompt("Сколько это будет стоить?");
if (servicePrice1 == null) {
  servicePrice1 = 0;
} else if (servicePrice1 == "") {
  servicePrice1 = 0;
} else {
  servicePrice1 = parseFloat(servicePrice1.replace(",", `.`));
}

const service2 = prompt("Какой дополнительный тип услуги нужен?");

let servicePrice2 = prompt("Сколько это будет стоить?");
if (servicePrice2 == null) {
  servicePrice2 = 0;
} else if (servicePrice2 == "") {
  servicePrice2 = 0;
} else {
  servicePrice2 = parseFloat(servicePrice2.replace(",", `.`));
}

fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - rollback);

console.log(servicePercentPrice);

switch (true) {
  case fullPrice > 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice > 15000 && fullPrice <= 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice <= 15000 && fullPrice > 0:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что то пошло не так");
}
