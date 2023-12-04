'use strict';

const title = document.getElementsByTagName('h1')[0];
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputTypeRange = document.querySelector('.rollback input[type=range]');
const rangeValue = document.querySelector('.rollback .range-value');

const handlerBtnStart = document.getElementsByClassName('handler_btn')[0];
const handlerBtnResert = document.getElementsByClassName('handler_btn')[1];

//const totalInput = [...document.getElementsByClassName('total-input ')];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screenAll = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  countScreensAll: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  isError: false,

  init: function () {
    appData.addTitle();

    handlerBtnStart.addEventListener('click', appData.checkStart);
    screenBtn.addEventListener('click', appData.addScreenBlock);

    inputTypeRange.addEventListener('input', appData.changeRollback);
  },

  checkStart: function () {
    screenAll = document.querySelectorAll('.screen');
    screenAll.forEach(function (screen) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      if (+input.value === 0) {
        alert('Не проставленно количество');
        appData.isError = true;
      } else if (selectName === 'Тип экранов') {
        appData.isError = true;
        alert('Не заполнен тип экранов');
      } else {
      }
    });

    if (appData.isError === false) {
      appData.start();
    }
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  changeRollback: function () {
    rangeValue.textContent = `${event.target.value}%`;
    document.rollback = event.target.value;
    appData.rollback = +document.rollback;
  },

  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    appData.showResult();

    appData.logger();
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.countScreensAll;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
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
        count: +input.value,
        price: +select.value * +input.value,
      });
    });
  },

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    screenAll = document.querySelectorAll('.screen');
    const cloneScreen = screenAll[screenAll.length - 1].cloneNode(true);

    const inputCloneScreen = cloneScreen.querySelector('input[type=text]');
    const selectCloneScreen = cloneScreen.querySelector('select');

    inputCloneScreen.value = '';
    selectCloneScreen.value = '';

    screenAll[screenAll.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    appData.screenPrice = appData.screens.reduce(function (result, num) {
      return result + num.price;
    }, 0);

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    for (let countScreen of appData.screens) {
      appData.countScreensAll += countScreen.count;
    }

    appData.fullPrice =
      appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;

    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  logger: function () {
    console.log(appData.countScreensAll);
  },
};

appData.init();
