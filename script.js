'use strict';

const rollback = 50;

let title = prompt('Как называется ваш проект?');
let screens = prompt(
  'Какие типы экранов нужно разработать?',
  'Простые, Сложные, Интерактивные'
);
let screenPrice = prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');

let fullPrice, servicePercentPrice, allServicePrices;

const getAllServicePrices = function (funServicePrice1, funServicePrice2) {
  return funServicePrice1 + funServicePrice2;
};

function getFullPrice(funScreenPrice, funAllServicePrices) {
  return funScreenPrice + funAllServicePrices;
}

const getTitle = function (funTitle, symbolEmpty1, symbolEmpty2) {
  return funTitle[symbolEmpty1].toUpperCase() + funTitle.slice(symbolEmpty2);
};

const getServicePercentPrices = function (funFullPrice, funRollback) {
  return funFullPrice - funRollback;
};

const showTypeOf = function (varTypeOf) {
  console.log(varTypeOf, typeof varTypeOf);
};

const getRollbackMessage = function () {
  switch (true) {
    case fullPrice > 30000:
      return 'Даем скидку в 10%';
    case fullPrice > 15000 && fullPrice <= 30000:
      return 'Даем скидку в 5%';
    case fullPrice <= 15000 && fullPrice > 0:
      return 'Скидка не предусмотрена';
    default:
      return 'Что то пошло не так';
  }
};

if (title[0] !== ' ') {
  title = getTitle(title, 0, 1);
} else {
  title = getTitle(title, 1, 2);
}

if (screenPrice == null) {
  screenPrice = 0;
} else if (screenPrice == '') {
  screenPrice = 0;
} else {
  screenPrice = parseFloat(screenPrice.replace(',', `.`));
}

if (servicePrice1 == null) {
  servicePrice1 = 0;
} else if (servicePrice1 == '') {
  servicePrice1 = 0;
} else {
  servicePrice1 = parseFloat(servicePrice1.replace(',', `.`));
}

if (servicePrice2 == null) {
  servicePrice2 = 0;
} else if (servicePrice2 == '') {
  servicePrice2 = 0;
} else {
  servicePrice2 = parseFloat(servicePrice2.replace(',', `.`));
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = Math.ceil(getServicePercentPrices(fullPrice, rollback));

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens.toLowerCase().split(', '));
console.log(getRollbackMessage());
console.log(servicePercentPrice);
