'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 50,
  service1: '',
  servicePrice1: 0,
  service2: '',
  servicePrice2: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    appData.title = prompt('Как называется ваш проект?', ' чип и Дейл');
    appData.screens = prompt(
      'Какие типы экранов нужно разработать?',
      'Простые, Сложные, Интерактивные'
    );

    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (
      !appData.isNumber(appData.screenPrice) ||
      appData.screenPrice === null
    );

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    appData.service1 = prompt('Какой дополнительный тип услуги нужен?');

    do {
      appData.servicePrice1 = prompt('Сколько будет стоить данная работа?');
    } while (
      !appData.isNumber(appData.servicePrice1) ||
      appData.servicePrice1 === null
    );

    appData.service2 = prompt('Какой дополнительный тип услуги нужен?');

    do {
      appData.servicePrice2 = prompt('Сколько будет стоить данная работа?');
    } while (
      !appData.isNumber(appData.servicePrice2) ||
      appData.servicePrice2 === null
    );

    appData.title = appData.getTitle(appData.title);

    appData.screens = appData.screens.toLowerCase().split(', ');

    appData.allServicePrices = appData.getAllServicePrices(
      parseFloat(appData.servicePrice1.replaceAll(' ', '')),
      parseFloat(appData.servicePrice2.replaceAll(' ', ''))
    );

    appData.fullPrice = appData.getFullPrice(
      parseFloat(appData.screenPrice.replaceAll(' ', '')),
      appData.allServicePrices
    );

    appData.servicePercentPrice = Math.ceil(
      appData.getServicePercentPrices(appData.fullPrice, appData.rollback)
    );

    appData.getRollbackMessage();

    console.log(appData.getRollbackMessage());
  },

  getAllServicePrices: function (funServicePrice1, funServicePrice2) {
    return funServicePrice1 + funServicePrice2;
  },

  getFullPrice: function (funScreenPrice, funAllServicePrices) {
    return funScreenPrice + funAllServicePrices;
  },

  getTitle: function (funTitle) {
    funTitle = funTitle.trim();
    return funTitle[0].toUpperCase() + funTitle.slice(1);
  },

  getServicePercentPrices: function (funFullPrice, funRollback) {
    return funFullPrice - funRollback;
  },

  getRollbackMessage: function () {
    switch (true) {
      case appData.fullPrice > 30000:
        return 'Даем скидку в 10%';
      case appData.fullPrice > 15000 && appData.fullPrice <= 30000:
        return 'Даем скидку в 5%';
      case appData.fullPrice <= 15000 && appData.fullPrice > 0:
        return 'Скидка не предусмотрена';
      default:
        return 'Что-то пошло не так';
    }
  },

  logger: function () {
    for (let key in appData) {
      console.log(appData[key]);
    }
  },

  start: function () {
    appData.asking();
    appData.logger();
  },
};

appData.start();
