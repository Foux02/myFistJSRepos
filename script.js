'use strict';

const rollback = 50;

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let servicePrice1;
let service2;
let servicePrice2;

let fullPrice, servicePercentPrice, allServicePrices;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt('Как называется ваш проект?', 'Чип и Дейл');
  screens = prompt(
    'Какие типы экранов нужно разработать?',
    'Простые, Сложные, Интерактивные'
  );

  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
  service1 = prompt('Какой дополнительный тип услуги нужен?');

  while (!isNumber(servicePrice1)) {
    servicePrice1 = prompt('Сколько это будет стоить?');
  }

  service2 = prompt('Какой дополнительный тип услуги нужен?');

  while (!isNumber(servicePrice2)) {
    servicePrice2 = prompt('Сколько это будет стоить?');
  }
};

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

asking();

if (title[0] !== ' ') {
  title = getTitle(title, 0, 1);
} else {
  title = getTitle(title, 1, 2);
}

allServicePrices = getAllServicePrices(~~servicePrice1, ~~servicePrice2);
fullPrice = getFullPrice(~~screenPrice, allServicePrices);
servicePercentPrice = Math.ceil(getServicePercentPrices(fullPrice, rollback));

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens.toLowerCase().split(', '));
console.log(getRollbackMessage());
console.log(servicePercentPrice);
