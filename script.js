'use strict';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.getTitle();
    appData.addPrices();
    appData.getFullPrice();

    appData.servicePercentPrice = Math.ceil(
      appData.getServicePercentPrices(appData.fullPrice, appData.rollback)
    );

    appData.getRollbackMessage();

    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    do {
      appData.title = prompt('Как называется ваш проект?');
    } while (
      !isNaN(appData.title) ||
      appData.title === null ||
      appData.title === ''
    );

    for (let i = 0; i < 2; i++) {
      let name = '';

      do {
        name = prompt('Какие типы экранов нужно разработать?');
      } while (!isNaN(name) || name === null || name === '');

      let price = 0;

      do {
        price = prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price) || price === null);

      appData.screens.push({ id: i, name: name, price: +price });
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');

    for (let i = 0; i < 2; i++) {
      let name = '';

      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while (!isNaN(name) || name === null || name === '');

      let price = 0;

      do {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price) || price === null);

      appData.services[`${name}__${i}`] = +price;
    }
  },

  addPrices: function () {
    appData.screenPrice = appData.screens.reduce(function (result, num) {
      return result + num.price;
    }, 0);

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1);
  },

  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
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
    console.log(appData.title);
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.getRollbackMessage());
    console.log(appData.services);
    console.log(appData.screens);
  },
};

appData.start();
