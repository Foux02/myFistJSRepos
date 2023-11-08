"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);

let screenPrice = prompt("Сколько будет стоить данная работа?");
if (screenPrice == null) {
  screenPrice = 0;
} else if (screenPrice == "") {
  screenPrice = 0;
} else {
  screenPrice = parseFloat(screenPrice.replace(",", `.`));
}

const rollback = 50;
let adaptive = confirm("Нужен ли адаптив на сайте?");
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

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - rollback);

alert(
  `Название проекта: ${title}. Тип экранов: ${screens}. Стоимость работ: ${fullPrice} руб.`
);

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

console.log(`Адаптив на сайте: ${adaptive}.`);
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов: ${screenPrice} долларов.`);
console.log(`Стоимость разработки сайта: ${fullPrice} долларов.`);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
console.log(servicePercentPrice);
