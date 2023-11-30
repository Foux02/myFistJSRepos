'use strict';

const title = document.getElementsByTagName('h1')[0];
const handlerBtnStart = document.getElementsByClassName('handler_btn')[0];
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inputTypeRange = document.querySelector('.rollback input[type=range]');
const rangeValue = document.querySelector('.rollback .range-value');
const totalInput = [...document.getElementsByClassName('total-input ')];

let screenAll = document.querySelectorAll('.screen');

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

  init: function () {
    appData.addTitle();

    handlerBtnStart.addEventListener('click', appData.start);
    screenBtn.addEventListener('click', appData.addScreenBlock);
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  start: function () {
    appData.addScreens();
    //appData.asking();
    //appData.getTitle();
    //appData.addPrices();
    //appData.getFullPrice();
    //appData.servicePercentPrice = Math.ceil(
    //  appData.getServicePercentPrices(appData.fullPrice, //appData.rollback)
    // );
    //appData.getRollbackMessage();
    //ppData.logger();
  },

  addScreens: function () {
    screenAll = document.querySelectorAll('.screen');

    screenAll.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
    });
    console.log(appData.screens);
  },

  addScreenBlock: function () {
    const CloneScreen = screenAll[0].cloneNode(true);
    screenAll[screenAll.length - 1].after(CloneScreen);
  },

  asking: function () {
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

appData.init();
